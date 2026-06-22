import { NavLink } from 'react-router-dom'
import {
  FiBell,
  FiFileText,
  FiHelpCircle,
  FiHome,
  FiImage,
  FiLayers,
  FiLogOut,
  FiShield,
  FiShoppingCart,
  FiTrash2,
  FiVideo,
} from 'react-icons/fi'

const navGroups = [
  {
    title: 'File Manager',
    items: [{ label: 'Dashboard', path: '/file-manager/dashboard', icon: FiHome }],
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
      { label: 'Sign Out', path: '/file-manager/dashboard', icon: FiLogOut },
      { label: 'Help', path: '/file-manager/dashboard', icon: FiHelpCircle },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="bg-white border-r border-[#e9ebf2] lg:sticky lg:top-0 lg:h-screen lg:w-[228px] lg:min-w-[228px] lg:overflow-y-auto">
      <div className="flex h-[54px] items-center gap-3 border-b border-[#e9ebf2] px-4 max-sm:justify-center">
        <div className="text-3xl leading-none text-[#3A57E8]">✣</div>
        <p className="m-0 text-[22px] font-medium text-[#020b26]">Hope UI</p>
      </div>

      <div className="grid justify-items-center gap-2.5 border-b border-[#e9ebf2] px-4 pb-[18px] pt-[22px]">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=140&q=80"
          alt="Profile"
          className="h-[78px] w-[78px] rounded-lg border border-[#3A57E8] bg-[#eef2ff] object-cover p-1.5"
        />
        <div className="text-center">
          <p className="m-0 mb-0.5 text-sm font-medium text-[#101936]">Elon musk</p>
          <p className="m-0 text-sm text-[#3A57E8]">@musk</p>
        </div>
        <div className="flex gap-3.5 pt-2">
          {[
            ['Cart', FiShoppingCart],
            ['Security', FiShield],
            ['Notifications', FiBell],
          ].map(([label, Icon]) => (
            <button
              className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#3A57E8] text-white"
              type="button"
              aria-label={label}
              key={label}
            >
              <Icon className="h-[15px] w-[15px]" />
            </button>
          ))}
        </div>
      </div>

      <nav className="flex flex-wrap items-start gap-2 p-3 lg:block lg:p-0 lg:py-4">
        {navGroups.map((group) => (
          <div key={group.title} className="w-full border-b border-[#f0f1f5] pb-4 lg:mb-4">
            <p className="m-0 mb-3 px-3 text-[13px] font-medium uppercase tracking-[0.22em] text-[#1f2941]">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2 lg:grid lg:gap-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      [
                        'relative flex min-h-[38px] items-center gap-3.5 px-3 py-2 text-sm text-[#747f8d] transition hover:text-[#3A57E8] lg:px-6',
                        'before:absolute before:left-0 before:h-8 before:w-1 before:rounded-r before:content-[""]',
                        isActive
                          ? 'text-[#3A57E8] before:bg-[#3A57E8]'
                          : 'before:bg-transparent',
                      ].join(' ')
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    {item.label === 'All Files' && (
                      <em className="ml-auto rounded-full bg-[#f16a1b] px-2 py-0.5 text-[11px] not-italic text-white">
                        21
                      </em>
                    )}
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
