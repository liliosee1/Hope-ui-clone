import { FiImage } from 'react-icons/fi'

function relativeTime(dateString) {
  const now = new Date('2026-06-20T13:00:00Z')
  const date = new Date(dateString)
  const delta = Math.max(0, Math.floor((now - date) / 1000))
  if (delta < 3600) return 'just now'
  if (delta < 172800) return '2 day ago'
  return 'a month ago'
}

export default function ImageCard({ image, onClick, variant = 'grid' }) {
  return (
    <button
      type="button"
      className={`image-card ${variant === 'scroller' ? 'image-card-scroller' : ''}`}
      onClick={() => onClick(image)}
      aria-label={`Open preview for ${image.name}`}
    >
      <div className="image-card-thumbnail">
        <img src={image.url} alt={image.name} />
      </div>
      <div className="image-card-body">
        <p className="image-card-date">Created on {image.createdAt}</p>
        <h2 className="image-card-title">{image.name}</h2>
        <div className="image-card-meta">
          <span className="image-card-badge"><FiImage /></span>
          <span>You opened <b>{relativeTime(image.lastOpenedAt)}</b></span>
        </div>
      </div>
    </button>
  )
}
