import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import ImagesPage from './pages/ImagesPage'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/file-manager/dashboard" replace />} />
      <Route path="/file-manager" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="images" element={<ImagesPage />} />
        <Route path="videos" element={<PlaceholderPage title="Video Folder" />} />
        <Route path="documents" element={<PlaceholderPage title="Document Folder" />} />
        <Route path="all-files" element={<PlaceholderPage title="All Files" />} />
        <Route path="trash" element={<PlaceholderPage title="Trash" />} />
      </Route>
      <Route path="*" element={<Navigate to="/file-manager/dashboard" replace />} />
    </Routes>
  )
}

export default App
