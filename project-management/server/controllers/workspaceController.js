import prisma from "../configs/prisma.js";

// Get all workspaces for the logged-in user
export const getUserWorkspaces = async (req, res) => {
    try {
        const { userId } = await req.auth();

        // 1️⃣ Ensure user exists in DB (sync Clerk user -> Prisma user)
        let dbUser = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!dbUser) {
            dbUser = await prisma.user.create({
                data: {
                    id: userId,
                    name: "New User",
                    email: `${userId}@example.com`, // fallback email
                    image: ""
                }
            });
        }

        // 2️⃣ Fetch workspaces
        let workspaces = await prisma.workspace.findMany({
            where: {
                members: { some: { userId: userId } }
            },
            include: {
                members: { include: { user: true } },
                projects: {
                    include: {
                        tasks: {
                            include: {
                                assignee: true,
                                comments: { include: { user: true } }
                            }
                        },
                        members: { include: { user: true } }
                    }
                },
                owner: true
            }
        });

        // 3️⃣ If no workspace exists, create default one
        if (workspaces.length === 0) {
            const newWorkspace = await prisma.workspace.create({
                data: {
                    id: crypto.randomUUID(),
                    name: "My Workspace",
                    slug: `workspace-${userId}`,
                    ownerId: userId,
                    members: {
                        create: {
                            userId: userId,
                            role: "ADMIN"
                        }
                    }
                },
                include: {
                    members: { include: { user: true } },
                    projects: true,
                    owner: true
                }
            });

            workspaces = [newWorkspace];
        }

        res.json({ workspaces });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.code || error.message });
    }
};