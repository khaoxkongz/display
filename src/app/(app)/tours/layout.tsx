export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-4">{children}</div>
    </div>
  )
}
