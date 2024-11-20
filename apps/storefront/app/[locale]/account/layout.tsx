import { Breadcrumb } from '@/app/components/Breadcrumb'

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="container mx-auto mt-6 px-6 sm:px-2">
      <Breadcrumb />
      <div className="mb-1 w-full">{children}</div>
    </section>
  )
}
