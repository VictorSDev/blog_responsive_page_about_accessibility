import { paths } from '@/routes/paths'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(paths.base.root)
}
