import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ setSidebarOpen, pendingCount }) => {
  return (
    <div className='px-6 text-gray-600 space-y-1 font-medium'>
      {
        menuItemsData.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `relative px-3.5 py-2 flex items-center gap-3 rounded-xl ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`
            }
          >
            <Icon className="w-5 h-5" />
            {label}

            {/* 🔵 Blue notification dot for Friend Requests */}
            {label === 'Connections' && pendingCount > 0 && (
              <span className='absolute right-3 w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
            )}
          </NavLink>
        ))
      }
    </div>
  )
}

export default MenuItems