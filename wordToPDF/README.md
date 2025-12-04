# Word to PDF Converter 📄

A full-stack MERN application that allows users to convert Microsoft Word documents (.doc, .docx) to PDF format online without installing any software.

## 🚀 Features

- **Easy File Upload**: Drag and drop or click to select Word documents
- **Instant Conversion**: Fast and reliable Word to PDF conversion
- **Automatic Download**: Converted PDF files are automatically downloaded
- **Modern UI**: Clean and responsive interface built with React and Tailwind CSS
- **No Software Required**: Everything runs in the browser

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js 5** - Web framework
- **Multer** - File upload middleware
- **docx-pdf** - Word to PDF conversion library
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rahul72918/mern-project.git
cd mern-project/wordToPDF
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd Backend
npm start
```

The backend server will start on `http://localhost:3000`

### Start the Frontend Development Server

Open a new terminal:

```bash
cd Frontend
npm run dev
```

The frontend will start on `http://localhost:5173` (or another port if 5173 is busy)

## 📁 Project Structure

```
wordToPDF/
├── Backend/
│   ├── uploads/          # Temporary storage for uploaded Word files
│   ├── files/            # Converted PDF files
│   ├── index.js          # Express server and conversion logic
│   ├── package.json      # Backend dependencies
│   └── package-lock.json
│
└── Frontend/
    ├── public/           # Static assets
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx    # Navigation bar component
    │   │   ├── Home.jsx      # Main conversion interface
    │   │   └── Footer.jsx    # Footer component
    │   ├── App.jsx       # Main app component
    │   ├── main.jsx      # Entry point
    │   └── index.css     # Global styles
    ├── index.html
    ├── package.json      # Frontend dependencies
    ├── vite.config.js    # Vite configuration
    └── tailwind.config.js
```

## 🔄 How It Works

1. **User uploads a Word document** - The frontend provides a file input that accepts .doc and .docx files
2. **File is sent to backend** - Using Axios, the file is sent as FormData to the Express server
3. **Backend processes the file** - Multer handles the file upload and saves it temporarily
4. **Conversion** - The docx-pdf library converts the Word document to PDF format
5. **Download** - The converted PDF is sent back to the frontend and automatically downloaded

## 📝 API Endpoints

### POST `/converFile`
Converts an uploaded Word document to PDF.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `file` (Word document)

**Response:**
- Success: PDF file download
- Error 400: No file uploaded
- Error 500: Conversion error or internal server error

## 🎨 Frontend Components

### Navbar
- Displays the application branding and navigation

### Home
- Main component containing the file upload interface
- Handles file selection, upload, and conversion
- Manages success/error states
- Triggers automatic PDF download

### Footer
- Contains footer information and links

## 🔒 Dependencies

### Backend Dependencies
```json
{
  "cors": "^2.8.5",
  "docx-pdf": "^0.0.1",
  "express": "^5.2.1",
  "multer": "^2.0.2",
  "nodemon": "^3.1.11"
}
```

### Frontend Dependencies
```json
{
  "@tailwindcss/vite": "^4.1.17",
  "axios": "^1.13.2",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0",
  "tailwindcss": "^4.1.17"
}
```

## 🐛 Known Issues & Limitations

- Only supports .doc and .docx file formats
- Large files may take longer to process
- Converted files are stored temporarily on the server

## 🚀 Future Enhancements

- [ ] Add support for batch conversion
- [ ] Implement file size validation
- [ ] Add conversion progress indicator
- [ ] Support for additional file formats (PDF to Word, Excel to PDF, etc.)
- [ ] Add user authentication and conversion history
- [ ] Implement cloud storage for converted files

## 📄 License

ISC

## 👤 Author

**Rahul Sharma**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!
