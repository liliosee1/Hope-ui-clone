import {
  FiArchive,
  FiBox,
  FiFileText,
  FiFilm,
  FiImage,
  FiMoreVertical,
  FiMusic,
  FiPenTool,
  FiStar,
  FiTrash2,
} from 'react-icons/fi'

const folders = [
  { name: 'Image', items: '246 Items', icon: FiImage },
  { name: 'Video', items: '246 Items', icon: FiFilm },
  { name: 'Documents', items: '246 Items', icon: FiFileText },
  { name: 'Audio', items: '246 Items', icon: FiMusic },
  { name: 'Movies', items: '246 Items', icon: FiFilm },
  { name: 'Assignment', items: '246 Items', icon: FiPenTool },
  { name: 'Ui-Kit', items: '246 Items', icon: FiArchive },
  { name: 'Design', items: '246 Items', icon: FiStar },
]

const storageRows = [
  { label: 'Documents', value: '5,674s', width: '78%', color: '#3a57e8', icon: FiFileText },
  { label: 'Videos', value: '1,624', width: '25%', color: '#1aa053', icon: FiFilm },
  { label: 'Images', value: '5,515', width: '35%', color: '#f16a1b', icon: FiImage },
]

const uploads = [
  ['Onboarding.zip', '23 mb', '35%'],
  ['Web Design.zip', '45 mb', '45%'],
  ['Example.zar', '90 mb', '86%'],
  ['Web Design.zip', '45 mb', '45%'],
  ['Designing.pptx', '73 mb', '68%'],
  ['Web Design.zip', '45 mb', '45%'],
  ['Example.zar', '90 mb', '86%'],
  ['Designing.pptx', '73 mb', '68%'],
]

const recentFiles = [
  ['Marcus Family.jpg', '16 Oct,11:23m', '12 MB', FiBox],
  ['Work.Doc', '20 Nov,12:40pm', '4.3 MB', FiFileText],
  ['Apha.mkv', '08 Oct,05:45pm', '10 MB', FiFilm],
  ['SVG Logo.png', '04 Jul,10:30pm', '9 MB', FiImage],
]

const cloudStorage = [
  ['Drop Box', '32gb', '48gb', '55%'],
  ['One Drive', '10gb', '48gb', '82%'],
  ['Google Drive', '15gb', '48gb', '20%'],
]

function ProgressBar({ width, color = '#3A57E8' }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#dce2fb]">
      <span className="block h-full rounded-full" style={{ width, background: color }} />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_342px]">
      <section className="min-w-0">
        <h2 className="mb-7 mt-0 text-[22px] font-medium text-[#020b26]">Your Folders</h2>
        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {folders.map((folder) => {
            const Icon = folder.icon
            return (
              <article
                className="relative min-h-[146px] rounded-lg bg-white px-5 pb-5 pt-8 shadow-[0_14px_34px_rgba(39,53,97,0.06)]"
                key={folder.name}
              >
                <div className="absolute -top-3 left-0 h-6 w-[78px] rounded-t bg-white" />
                <button
                  className="absolute right-3.5 top-6 border-0 bg-transparent text-[#8a94a8]"
                  type="button"
                  aria-label={`${folder.name} options`}
                >
                  <FiMoreVertical />
                </button>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dfe5ff] text-[#3A57E8]">
                  <Icon />
                </span>
                <h3 className="mb-1 mt-4 text-lg font-medium text-[#020b26]">{folder.name}</h3>
                <p className="m-0 text-sm text-[#7f8ba3]">{folder.items}</p>
              </article>
            )
          })}
        </div>

        <section className="mt-7 rounded-lg bg-white p-6 shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="m-0 text-[22px] font-medium text-[#020b26]">Activity Chart</h2>
            <button className="border-0 bg-transparent text-[#65708a]" type="button">
              This year
            </button>
          </div>
          <div className="mt-6 min-h-[320px] overflow-x-auto" aria-label="Storage activity chart">
            <svg className="h-[320px] min-w-[680px] w-full" viewBox="0 0 720 300" role="img">
              <g>
                {[30, 40, 50, 60, 70, 80, 90].map((label, index) => (
                  <g key={label}>
                    <line
                      x1="70"
                      x2="700"
                      y1={250 - index * 35}
                      y2={250 - index * 35}
                      stroke="#dfe2ea"
                      strokeDasharray="4 4"
                    />
                    <text x="18" y={255 - index * 35} fill="#526078" fontSize="12">
                      {label} GB
                    </text>
                  </g>
                ))}
              </g>
              <path
                d="M70 110 C115 115 130 250 180 230 C230 210 235 20 290 35 C345 50 340 245 395 230 C450 215 470 95 510 110 C555 125 560 285 610 250 C660 215 655 95 700 70"
                fill="none"
                stroke="#5570f1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'].map((month, index) => (
                <text key={month} x={70 + index * 105} y="286" fill="#526078" fontSize="12">
                  {month}
                </text>
              ))}
            </svg>
          </div>
        </section>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(220px,0.7fr)]">
          <section className="rounded-lg bg-white p-5 shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="m-0 text-[22px] font-medium text-[#020b26]">Recently added files</h2>
              <button className="border-0 bg-transparent text-[#3A57E8]" type="button">
                View all
              </button>
            </div>
            <div className="-mx-5 -mb-2 mt-4">
              <div className="grid grid-cols-[1.5fr_1fr_70px_34px] gap-3 border-y border-[#f1f2f6] px-5 py-3 text-sm text-[#7f8ba3] max-sm:hidden">
                <span>Files</span>
                <span>Last Modified</span>
                <span>Size</span>
                <span />
              </div>
              {recentFiles.map(([name, modified, size, Icon]) => (
                <div
                  className="grid items-center gap-3 px-5 py-3 text-sm text-[#7f8ba3] sm:grid-cols-[1.5fr_1fr_70px_34px]"
                  key={name}
                >
                  <span className="flex items-center gap-3 text-[#020b26]">
                    <i className="grid h-8 w-8 place-items-center rounded-full bg-[#dfe5ff] text-[#3A57E8]">
                      <Icon />
                    </i>
                    {name}
                  </span>
                  <span>{modified}</span>
                  <span className="text-[#3A57E8]">{size}</span>
                  <button className="border-0 bg-transparent text-[#e17367]" type="button" aria-label={`Delete ${name}`}>
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 rounded-lg bg-white p-5 shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
            <h2 className="m-0 text-[22px] font-medium text-[#020b26]">Cloud Storage</h2>
            {cloudStorage.map(([name, used, total, width]) => (
              <div className="grid gap-2" key={name}>
                <strong className="text-lg font-medium">{name}</strong>
                <div className="flex justify-between text-xs text-[#020b26]">
                  <span>{used}</span>
                  <span>{total}</span>
                </div>
                <ProgressBar width={width} />
              </div>
            ))}
          </section>
        </div>
      </section>

      <aside className="grid content-start gap-7 xl:gap-[54px]">
        <section className="rounded-lg bg-white p-5 shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
          <h2 className="m-0 text-[22px] font-medium text-[#020b26]">Storage Details</h2>
          <div className="relative mx-auto mb-5 mt-6 grid h-[120px] w-[190px] place-items-center text-center">
            <div className="absolute inset-0 rounded-t-full border-[25px] border-b-transparent border-[#e8ebfb]" />
            <div className="absolute inset-0 rounded-t-full border-[25px] border-b-transparent border-r-transparent border-[#5870ed] rotate-[-18deg]" />
            <strong className="relative mt-8 text-[40px] font-medium leading-none text-[#c9ced8]">75GB</strong>
            <span className="relative text-sm font-bold text-[#3A57E8]">used of 100GB</span>
          </div>
          {storageRows.map((row) => {
            const Icon = row.icon
            return (
              <div className="mt-4 grid grid-cols-[44px_minmax(0,1fr)_56px] items-center gap-3.5" key={row.label}>
                <span className="grid h-11 w-11 place-items-center rounded bg-[#dfe5ff] text-[#3A57E8]">
                  <Icon />
                </span>
                <div>
                  <strong className="mb-2 block text-sm font-medium text-[#020b26]">{row.label}</strong>
                  <ProgressBar width={row.width} color={row.color} />
                </div>
                <small className="text-right text-[#7f8ba3]">{row.value}</small>
              </div>
            )
          })}
        </section>

        <section className="rounded-lg bg-white p-5 shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
          <h2 className="mb-5 mt-0 text-[22px] font-medium text-[#020b26]">Uploading on Drive</h2>
          {uploads.map(([name, size, width], index) => (
            <div className="mb-4 grid items-center gap-3 text-sm text-[#7f8ba3] sm:grid-cols-[minmax(100px,1fr)_86px_48px_18px]" key={`${name}-${index}`}>
              <span>{name}</span>
              <ProgressBar width={width} />
              <small>{size}</small>
              <button
                className="grid h-3.5 w-3.5 place-items-center rounded bg-[#c8d2ff] text-[10px] text-[#3A57E8]"
                type="button"
                aria-label={`Cancel ${name}`}
              >
                x
              </button>
            </div>
          ))}
        </section>

        <section className="grid justify-items-center gap-4 rounded-lg bg-white px-6 pb-6 pt-10 text-center shadow-[0_14px_34px_rgba(39,53,97,0.06)]">
          <div className="relative h-[74px] w-[136px] -skew-x-3 rounded-lg bg-[#4565c8] before:absolute before:-top-3.5 before:left-3 before:h-7 before:w-[70px] before:rounded-t-lg before:bg-[#5272dc] before:content-[''] after:absolute after:bottom-1 after:-right-1.5 after:h-10 after:w-28 after:rounded-md after:bg-[#2e3446] after:content-['']" />
          <h2 className="m-0 max-w-[230px] text-lg font-medium leading-tight text-[#020b26]">
            Upgrade to Special Offer For Unlimited Storage
          </h2>
          <button className="min-h-[38px] rounded bg-[#3A57E8] px-6 text-white" type="button">
            Buy storage
          </button>
        </section>
      </aside>
    </div>
  )
}
