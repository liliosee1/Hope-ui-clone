import { useMemo } from 'react'
import { useImages } from '../hooks/useImages'
import ImageCard from '../components/ImageCard'
import ImageModal from '../components/ImageModal'
import { FiImage } from 'react-icons/fi'

export default function ImagesPage() {
  const {
    filteredImages,
    recentImages,
    openImage,
    closeModal,
    selectedImage,
    isModalOpen,
  } = useImages()

  const resultCount = filteredImages.length
  const gridImages = useMemo(() => filteredImages, [filteredImages])

  return (
    <div className="images-page">
      <section className="page-header">
        <h2>Images</h2>
        <button type="button" className="button button-primary">
          <FiImage />
          Add Image
        </button>
      </section>

      <section className="recent-section">
        <div className="section-heading">
          <h3>Recently viewed</h3>
        </div>
        <div className="image-grid image-grid-recent">
          {recentImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={openImage}
              variant="scroller"
            />
          ))}
        </div>
      </section>

      <section className="all-images-section">
        <div className="section-heading">
          <h3>All Image</h3>
          {resultCount === 0 ? null : <p className="search-meta">{resultCount} images found</p>}
        </div>
        {gridImages.length === 0 ? (
          <div className="empty-state">
            <h3>No images match your search.</h3>
            <p>Try a different keyword or clear the search field.</p>
          </div>
        ) : (
          <div className="image-grid">
            {gridImages.map((image) => (
              <ImageCard key={image.id} image={image} onClick={openImage} />
            ))}
          </div>
        )}
      </section>

      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  )
}
