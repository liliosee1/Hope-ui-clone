import { NavLink } from 'react-router-dom'
import {
  FiHome,
  FiImage,
  FiVideo,
  FiFileText,
  FiLayers,
  FiTrash2,
  FiShoppingCart,
  FiShield,
  FiBell,
  FiBox,
} from 'react-icons/fi'

const navGroups = [
  {
    title: 'File Manager',
    items: [
      { label: 'Dashboard', path: '/file-manager/dashboard', icon: FiHome },
    ],
  },
  {
    title: 'Pages',
    items: [
      { label: 'Image', path: '/file-manager/images', icon: FiImage },
      { label: 'Video', path: '/file-manager/videos', icon: FiVideo },
      { label: 'Document', path: '/file-manager/documents', icon: FiFileText },
      { label: 'All Files', path: '/file-manager/all-files', icon: FiLayers },
      { label: 'Trash', path: '/file-manager/trash', icon: FiTrash2 },
    ],
  },
  {
    title: 'Other',
    items: [
      { label: 'Settings', path: '/file-manager/dashboard', icon: FiShield },
      { label: 'Archive', path: '/file-manager/dashboard', icon: FiBox },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">✣</div>
        <p className="brand-name">Hope UI</p>
      </div>

      <div className="sidebar-profile">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=140&q=80"
          alt="Profile"
          className="profile-avatar"
        />
        <div className="profile-copy">
          <p className="profile-name">Elon musk</p>
          <p className="profile-role">@musk</p>
        </div>
        <div className="profile-actions">
          <button type="button" aria-label="Cart"><FiShoppingCart /></button>
          <button type="button" aria-label="Security"><FiShield /></button>
          <button type="button" aria-label="Notifications"><FiBell /></button>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navGroups.map((group) => (
          <div key={group.title} className="sidebar-group">
            <p className="sidebar-group-title">{group.title}</p>
            <div className="sidebar-links">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'sidebar-link active' : 'sidebar-link'
                    }
                  >
                    <Icon className="sidebar-link-icon" />
                    <span>{item.label}</span>
                    {item.label === 'All Files' && <em>21</em>}
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
