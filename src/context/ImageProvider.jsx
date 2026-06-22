import { useMemo, useReducer } from 'react'
import { ImageContext } from './ImageContext'
import { imageData } from '../data/images'

const initialState = {
  images: imageData,
  searchQuery: '',
  selectedImage: null,
  isModalOpen: false,
}

function imageReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
      }
    case 'OPEN_IMAGE':
      return {
        ...state,
        selectedImage: action.payload,
        isModalOpen: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedImage: null,
        isModalOpen: false,
      }
    default:
      return state
  }
}

export function ImageProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, initialState)

  const filteredImages = useMemo(() => {
    const search = state.searchQuery.trim().toLowerCase()
    if (!search) {
      return state.images
    }
    return state.images.filter((image) => image.name.toLowerCase().includes(search))
  }, [state.images, state.searchQuery])

  const recentImages = useMemo(() => {
    return [...state.images]
      .sort(
        (a, b) =>
          new Date(b.lastOpenedAt).getTime() - new Date(a.lastOpenedAt).getTime(),
      )
      .slice(0, 8)
  }, [state.images])

  const setSearchQuery = (value) => {
    dispatch({ type: 'SET_SEARCH', payload: value })
  }

  const openImage = (image) => {
    dispatch({ type: 'OPEN_IMAGE', payload: image })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <ImageContext.Provider
      value={{
        ...state,
        filteredImages,
        recentImages,
        setSearchQuery,
        openImage,
        closeModal,
      }}
    >
      {children}
    </ImageContext.Provider>
  )
}
