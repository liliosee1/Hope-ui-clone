import { FiX } from 'react-icons/fi'

export default function ImageModal({ image, onClose }) {
  if (!image) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close preview">
          <FiX />
        </button>
        <div className="modal-image-wrap">
          <img src={image.url} alt={image.name} />
        </div>
        <div className="modal-content">
          <h2>{image.name}</h2>
          <div className="modal-meta">
            <div>
              <p className="modal-label">Created on</p>
              <p>{image.createdAt}</p>
            </div>
            <div>
              <p className="modal-label">File size</p>
              <p>{image.size}</p>
            </div>
            <div>
              <p className="modal-label">Type</p>
              <p>{image.type}</p>
            </div>
          </div>
          <button type="button" className="button button-secondary" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  )
}
