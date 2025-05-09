import { ReactNode } from "react"

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="bg-background min-h-svh font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-5xl py-4">{children}</div>
    </div>
  )
}
