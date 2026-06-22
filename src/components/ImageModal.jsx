import { FiX } from 'react-icons/fi'

export default function ImageModal({ image, onClose }) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-[rgba(12,18,38,0.45)] p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-[920px] overflow-hidden rounded-lg bg-white shadow-[0_30px_80px_rgba(18,29,64,0.24)]">
        <button
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border-0 bg-white/85"
          type="button"
          onClick={onClose}
          aria-label="Close preview"
        >
          <FiX />
        </button>
        <div className="max-h-[430px] overflow-hidden">
          <img className="h-[430px] w-full object-cover" src={image.url} alt={image.name} />
        </div>
        <div className="p-6">
          <h2 className="m-0 mb-4 text-2xl font-medium text-[#020b26]">{image.name}</h2>
          <div className="mb-5 grid gap-4 text-[#7f8ba3] sm:grid-cols-3">
            <div>
              <p className="m-0 mb-1 font-bold text-[#071434]">Created on</p>
              <p className="m-0">{image.createdAt}</p>
            </div>
            <div>
              <p className="m-0 mb-1 font-bold text-[#071434]">File size</p>
              <p className="m-0">{image.size}</p>
            </div>
            <div>
              <p className="m-0 mb-1 font-bold text-[#071434]">Type</p>
              <p className="m-0">{image.type}</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded bg-[#dfe5ff] px-5 py-2.5 text-[#3A57E8]"
            onClick={onClose}
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  )
}
