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

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-main">
        <h2 className="panel-title">Your Folders</h2>
        <div className="folder-grid">
          {folders.map((folder) => {
            const Icon = folder.icon
            return (
              <article className="folder-card" key={folder.name}>
                <div className="folder-tab" />
                <button className="folder-menu" type="button" aria-label={`${folder.name} options`}>
                  <FiMoreVertical />
                </button>
                <span className="folder-icon"><Icon /></span>
                <h3>{folder.name}</h3>
                <p>{folder.items}</p>
              </article>
            )
          })}
        </div>

        <section className="chart-card">
          <div className="card-heading">
            <h2>Activity Chart</h2>
            <button type="button">This year</button>
          </div>
          <div className="chart-area" aria-label="Storage activity chart">
            <svg viewBox="0 0 720 300" role="img">
              <g className="chart-grid">
                {[30, 40, 50, 60, 70, 80, 90].map((label, index) => (
                  <g key={label}>
                    <line x1="70" x2="700" y1={250 - index * 35} y2={250 - index * 35} />
                    <text x="18" y={255 - index * 35}>{label} GB</text>
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
                <text className="chart-month" key={month} x={70 + index * 105} y="286">{month}</text>
              ))}
            </svg>
          </div>
        </section>

        <div className="dashboard-bottom">
          <section className="recent-files-card">
            <div className="card-heading">
              <h2>Recently added files</h2>
              <button type="button">View all</button>
            </div>
            <div className="file-table">
              <div className="file-row file-head">
                <span>Files</span>
                <span>Last Modified</span>
                <span>Size</span>
                <span />
              </div>
              {recentFiles.map(([name, modified, size, Icon]) => (
                <div className="file-row" key={name}>
                  <span className="file-name"><i><Icon /></i>{name}</span>
                  <span>{modified}</span>
                  <span className="file-size">{size}</span>
                  <button type="button" aria-label={`Delete ${name}`}><FiTrash2 /></button>
                </div>
              ))}
            </div>
          </section>

          <section className="cloud-card">
            <h2>Cloud Storage</h2>
            {cloudStorage.map(([name, used, total, width]) => (
              <div className="cloud-row" key={name}>
                <strong>{name}</strong>
                <div><span>{used}</span><span>{total}</span></div>
                <progress value={Number.parseInt(width)} max="100" />
              </div>
            ))}
          </section>
        </div>
      </section>

      <aside className="dashboard-side">
        <section className="storage-card">
          <h2>Storage Details</h2>
          <div className="storage-gauge">
            <div className="gauge-ring" />
            <strong>75GB</strong>
            <span>used of 100GB</span>
          </div>
          {storageRows.map((row) => {
            const Icon = row.icon
            return (
              <div className="storage-row" key={row.label}>
                <span className="storage-icon"><Icon /></span>
                <div>
                  <strong>{row.label}</strong>
                  <div className="storage-bar"><i style={{ width: row.width, background: row.color }} /></div>
                </div>
                <small>{row.value}</small>
              </div>
            )
          })}
        </section>

        <section className="upload-card">
          <h2>Uploading on Drive</h2>
          {uploads.map(([name, size, width], index) => (
            <div className="upload-row" key={`${name}-${index}`}>
              <span>{name}</span>
              <progress value={Number.parseInt(width)} max="100" />
              <small>{size}</small>
              <button type="button" aria-label={`Cancel ${name}`}>x</button>
            </div>
          ))}
        </section>

        <section className="upgrade-card">
          <div className="folder-graphic" />
          <h2>Upgrade to Special Offer For Unlimited Storage</h2>
          <button type="button">Buy storage</button>
        </section>
      </aside>
    </div>
  )
}
