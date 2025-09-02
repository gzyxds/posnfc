export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100 sm:p-10">
        {children}
      </div>
    </div>
  )
}
