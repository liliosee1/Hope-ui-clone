export default function PlaceholderPage({ title }) {
  return (
    <div className="py-10">
      <div className="rounded-lg bg-white p-10 text-[#7f8ba3]">
        <h2 className="m-0 mb-2 text-2xl font-medium text-[#020b26]">{title}</h2>
        <p className="m-0">This page is a placeholder for the dashboard shell layout.</p>
      </div>
    </div>
  )
}
