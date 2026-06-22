import { FiImage } from 'react-icons/fi'

function relativeTime(dateString) {
  const now = new Date('2026-06-20T13:00:00Z')
  const date = new Date(dateString)
  const delta = Math.max(0, Math.floor((now - date) / 1000))
  if (delta < 3600) return 'just now'
  if (delta < 172800) return '2 day ago'
  return 'a month ago'
}

export default function ImageCard({ image, onClick }) {
  return (
    <button
      type="button"
      className="w-full min-w-0 overflow-hidden rounded-lg border-0 bg-white text-left transition hover:shadow-[0_14px_34px_rgba(39,53,97,0.08)]"
      onClick={() => onClick(image)}
      aria-label={`Open preview for ${image.name}`}
    >
      <div className="mx-3.5 mt-3.5 aspect-[1.44/1] overflow-hidden rounded bg-[#e9edf6]">
        <img className="h-full w-full object-cover" src={image.url} alt={image.name} />
      </div>
      <div className="px-3.5 pb-4 pt-2">
        <p className="m-0 mb-2 text-xs text-[#7f8ba3]">Created on {image.createdAt}</p>
        <h2 className="m-0 mb-1.5 flex items-center gap-2 text-[15px] font-medium text-[#020b26]">
          <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded bg-[#d9e1ff] text-[#3A57E8]">
            <FiImage className="h-3 w-3" />
          </span>
          <span className="truncate">{image.name}</span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-[#72809a]">
          <span>
            You opened <b className="font-medium text-[#3A57E8]">{relativeTime(image.lastOpenedAt)}</b>
          </span>
        </div>
      </div>
    </button>
  )
}
