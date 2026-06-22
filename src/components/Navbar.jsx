import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiChevronLeft, FiFileText, FiHome, FiMaximize2, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { useImages } from '../hooks/useImages'

const headingByPath = {
  '/file-manager/dashboard': 'Dashboard',
  '/file-manager/images': 'Images',
  '/file-manager/videos': 'Videos',
  '/file-manager/documents': 'Documents',
  '/file-manager/all-files': 'All Files',
  '/file-manager/trash': 'Trash',
}

export default function Navbar() {
  const location = useLocation()
  const { searchQuery, setSearchQuery } = useImages()
  const [cartOpen, setCartOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const pageTitle = headingByPath[location.pathname] || 'Images'

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="back-button" type="button" aria-label="Go back">
          <FiChevronLeft />
        </button>
        <span className="breadcrumb-current">{pageTitle}</span>
        <nav className="top-nav" aria-label="Primary">
          <NavLink to="/file-manager/dashboard"><FiHome /> Home</NavLink>
          <NavLink to="/file-manager/documents"><FiFileText /> Pages</NavLink>
          <NavLink to="/file-manager/all-files"><FiFileText /> Elements</NavLink>
        </nav>
      </div>

      <div className="navbar-actions">
        <div className="font-tools" aria-label="Display controls">
          <span>A</span>
          <strong>A</strong>
          <b>A</b>
        </div>
        <label className="navbar-search" htmlFor="navbar-search">
          <input
            id="navbar-search"
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <FiSearch />
        </label>

        <div className="dropdown-wrapper">
          <button
            className="icon-button"
            type="button"
            aria-expanded={cartOpen}
            onClick={() => setCartOpen((open) => !open)}
          >
            <FiShoppingCart />
          </button>
          {cartOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-title">Cart</p>
              <p className="dropdown-text">Your file storage cart is empty.</p>
            </div>
          )}
        </div>

        <button className="icon-button" type="button" aria-label="Profile notifications">
          <FiUser />
        </button>

        <div className="dropdown-wrapper">
          <button
            className="icon-button"
            type="button"
            aria-expanded={profileOpen}
            onClick={() => setProfileOpen((open) => !open)}
          >
            <FiMaximize2 />
          </button>
          {profileOpen && (
            <div className="dropdown-menu dropdown-menu-right">
              <button type="button" className="dropdown-item">Profile</button>
              <button type="button" className="dropdown-item">Privacy Settings</button>
              <button type="button" className="dropdown-item">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
