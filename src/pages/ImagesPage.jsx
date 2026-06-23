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

  return (
    <div>
      <section className="mb-3 flex min-h-[52px] items-center justify-between gap-4 border-b border-[#e9ebf2] pb-3.5 max-sm:flex-col max-sm:items-start">
        <h2 className="m-0 text-[22px] font-medium text-[#020b26]">Images</h2>
        <button
          type="button"
          className="inline-flex min-h-[38px] items-center justify-center gap-2.5 rounded bg-[#3A57E8] px-5 py-2 text-white"
        >
          <FiImage />
          Add Image
        </button>
      </section>

      <section className="mb-9 mt-3">
        <div className="mb-3.5 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <h3 className="m-0 text-2xl font-medium text-[#020b26]">Recently viewed</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pb-3">
          {recentImages.map((image) => (
            <ImageCard key={image.id} image={image} onClick={openImage} />
          ))}
        </div>
      </section>

      <section className="mb-9">
        <div className="mb-3.5 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <h3 className="m-0 text-2xl font-medium text-[#020b26]">All Image</h3>
          {filteredImages.length > 0 && (
            <p className="m-0 text-sm text-[#7f8ba3]">{filteredImages.length} images found</p>
          )}
        </div>
        {filteredImages.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center text-[#7f8ba3]">
            <h3 className="m-0 mb-2 text-xl font-medium text-[#020b26]">
              No images match your search.
            </h3>
            <p className="m-0">Try a different keyword or clear the search field.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} onClick={openImage} />
            ))}
          </div>
        )}
      </section>

      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  )
}
