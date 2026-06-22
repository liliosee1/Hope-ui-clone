import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  FiBell,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiHome,
  FiMaximize2,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi'
import { useImages } from '../hooks/useImages'

const headingByPath = {
  '/file-manager/dashboard': 'Dashboard',
  '/file-manager/images': 'Image',
  '/file-manager/videos': 'Video',
  '/file-manager/documents': 'Document',
  '/file-manager/all-files': 'All Files',
  '/file-manager/trash': 'Trash',
}

const topMenus = [
  {
    key: 'home',
    label: 'Home',
    icon: FiHome,
    items: [
      { label: 'Dashboard', to: '/file-manager/dashboard' },
      { label: 'Alternate Dashboard', to: '/file-manager/dashboard' },
      { label: 'Menu Style', hasMore: true },
      { label: 'E-Commerce' },
      { label: 'Social App' },
      { label: 'Blog' },
      { label: 'Appointment' },
      { label: 'File Manager', to: '/file-manager/images' },
      { label: 'Chat' },
      { label: 'Mail' },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: FiFileText,
    items: [
      { label: 'Special Pages', hasMore: true },
      { label: 'Auth Skins', hasMore: true },
      { label: 'User', hasMore: true },
      { label: 'Utilities', hasMore: true },
      { label: 'Plugins', hasMore: true },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    icon: FiBookOpen,
    items: [
      { label: 'Components' },
      { label: 'UI Color' },
      { label: 'Widgets', hasMore: true },
      { label: 'Map', hasMore: true },
      { label: 'Form', hasMore: true },
      { label: 'Table', hasMore: true },
      { label: 'Icons', hasMore: true },
    ],
  },
]

const fontSizes = [14, 16, 18]

function iconButtonClasses(extra = '') {
  return `grid h-[27px] w-[27px] place-items-center rounded-full bg-[#3A57E8] text-white ${extra}`
}

export default function Navbar() {
  const location = useLocation()
  const { searchQuery, setSearchQuery } = useImages()
  const [openMenu, setOpenMenu] = useState(null)
  const [fontSize, setFontSize] = useState(16)
  const [cartOpen, setCartOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const pageTitle = headingByPath[location.pathname] || 'Image'

  useEffect(() => {
    document.body.dataset.uiFont = String(fontSize)
    document.documentElement.style.fontSize = `${fontSize}px`

    return () => {
      document.documentElement.style.fontSize = ''
    }
  }, [fontSize])

  return (
    <header className="sticky top-0 z-30 flex min-h-[54px] flex-wrap items-center justify-between gap-3 border-b border-[#e9ebf2] bg-white px-4 py-2 md:px-7 lg:flex-nowrap lg:py-0">
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 lg:flex-nowrap lg:gap-4">
        <button className={iconButtonClasses('shrink-0')} type="button" aria-label="Go back">
          <FiChevronLeft className="h-[15px] w-[15px]" />
        </button>
        <span className="min-w-[72px] border-r border-[#e9ebf2] pr-4 text-xs text-[#8a94a8] max-sm:w-[calc(100%-45px)] max-sm:border-r-0">
          {pageTitle}
        </span>

        <nav
          className="relative flex w-full flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:w-auto lg:flex-nowrap lg:gap-8 lg:overflow-visible lg:pb-0"
          aria-label="Primary"
        >
          {topMenus.map((menu) => {
            const Icon = menu.icon
            const isOpen = openMenu === menu.key

            return (
              <div
                className="relative"
                key={menu.key}
                onMouseEnter={() => setOpenMenu(menu.key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={[
                    'flex h-[38px] items-center gap-2 rounded px-2 text-sm whitespace-nowrap text-[#7f8ba3] transition hover:text-[#3A57E8] lg:h-[54px] lg:px-0',
                    isOpen ? 'bg-[#edf1ff] text-[#3A57E8] lg:bg-transparent' : '',
                  ].join(' ')}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu((current) => (current === menu.key ? null : menu.key))}
                >
                  <Icon className="h-4 w-4" />
                  {menu.label}
                </button>

                {isOpen && (
                  <div
                    className={[
                      'fixed left-4 right-4 top-[154px] z-40 grid max-h-[62vh] overflow-y-auto rounded-b bg-white py-4 shadow-[0_18px_36px_rgba(33,43,82,0.08)] sm:top-[112px]',
                      'lg:absolute lg:left-[-2px] lg:right-auto lg:top-[54px] lg:max-h-none lg:overflow-visible',
                      menu.key === 'home' ? 'lg:min-w-[262px]' : 'lg:min-w-[244px]',
                    ].join(' ')}
                  >
                    {menu.items.map((item) => {
                      const content = (
                        <>
                          <span>{item.label}</span>
                          {item.hasMore && <FiChevronRight className="h-4 w-4" />}
                        </>
                      )

                      const className =
                        'flex min-h-10 w-full items-center justify-between gap-4 bg-white px-6 text-left text-base text-[#858d9e] hover:text-[#3A57E8] lg:px-9'

                      return item.to ? (
                        <NavLink
                          className={className}
                          key={item.label}
                          to={item.to}
                          onClick={() => setOpenMenu(null)}
                        >
                          {content}
                        </NavLink>
                      ) : (
                        <button className={className} key={item.label} type="button">
                          {content}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto lg:flex-nowrap">
        <div className="flex gap-2.5 max-sm:order-3 max-sm:w-full" aria-label="Display controls">
          {fontSizes.map((size) => (
            <button
              className={[
                'grid h-9 w-9 place-items-center rounded leading-none text-[#34405a]',
                fontSize === size ? 'bg-[#3A57E8] text-white' : 'bg-transparent',
              ].join(' ')}
              key={size}
              type="button"
              style={{ fontSize: `${size}px` }}
              aria-pressed={fontSize === size}
              aria-label={`Use ${size}px text`}
              onClick={() => setFontSize(size)}
            >
              A
            </button>
          ))}
        </div>

        <label
          className="flex h-[37px] min-w-[190px] flex-1 items-center gap-2.5 rounded border border-[#e9ebf2] bg-white px-3 text-[#8c95a8] lg:w-[146px] lg:min-w-0 lg:flex-none"
          htmlFor="navbar-search"
        >
          <input
            id="navbar-search"
            className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#63708b] outline-none"
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <FiSearch className="shrink-0" />
        </label>

        <div className="relative">
          <button
            className={iconButtonClasses()}
            type="button"
            aria-expanded={cartOpen}
            aria-label="Cart"
            onClick={() => setCartOpen((open) => !open)}
          >
            <FiShoppingCart className="h-[15px] w-[15px]" />
          </button>
          {cartOpen && (
            <div className="absolute right-0 top-10 z-50 w-[220px] rounded-lg border border-[#e9ebf2] bg-white p-3.5 shadow-[0_14px_34px_rgba(39,53,97,0.08)]">
              <p className="m-0 mb-2 font-bold">Cart</p>
              <p className="m-0 text-sm text-[#7f8ba3]">Your file storage cart is empty.</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className={iconButtonClasses()}
            type="button"
            aria-expanded={notificationsOpen}
            aria-label="Notifications"
            onClick={() => setNotificationsOpen((open) => !open)}
          >
            <FiBell className="h-[15px] w-[15px]" />
          </button>
          {notificationsOpen && (
            <div className="absolute right-0 top-10 z-50 w-[220px] rounded-lg border border-[#e9ebf2] bg-white p-3.5 shadow-[0_14px_34px_rgba(39,53,97,0.08)]">
              <p className="m-0 mb-2 font-bold">Notifications</p>
              <p className="m-0 text-sm text-[#7f8ba3]">No new file notifications.</p>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className={iconButtonClasses()}
            type="button"
            aria-expanded={profileOpen}
            aria-label="Profile menu"
            onClick={() => setProfileOpen((open) => !open)}
          >
            <FiUser className="h-[15px] w-[15px]" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-10 z-50 grid w-[220px] rounded-lg border border-[#e9ebf2] bg-white p-3.5 shadow-[0_14px_34px_rgba(39,53,97,0.08)]">
              {['Profile', 'Privacy Settings', 'Logout'].map((item) => (
                <button
                  className="w-full bg-transparent py-2 text-left text-sm text-[#7f8ba3] hover:text-[#071434]"
                  type="button"
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className={iconButtonClasses()} type="button" aria-label="Fullscreen">
          <FiMaximize2 className="h-[15px] w-[15px]" />
        </button>
      </div>
    </header>
  )
}
