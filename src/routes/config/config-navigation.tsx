/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from '../paths'
import { HomeIcon } from '@heroicons/react/24/outline'

type NavProps = {
  id: number
  icon: any
  name: string
  path: string
}[]

const routes: NavProps = [
  {
    id: 0,
    icon: HomeIcon,
    name: 'Inicio',
    path: paths.base.root,
  },
  // {
  //   id: 1,
  //   icon: UsersIcon,
  //   name: 'Clientes',
  //   path: paths.customers.table,
  // },
  // {
  //   id: 2,
  //   icon: CubeIcon,
  //   name: 'Produtos',
  //   path: paths.products.table,
  // },
]

export default routes
