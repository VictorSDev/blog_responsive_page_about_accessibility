/* eslint-disable @typescript-eslint/no-explicit-any */
import routes from '@/routes/config/config-navigation'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface SideBarProps {
  sidebarOpen: boolean
  setSidebarOpen: (sidebarOpen: boolean) => void
}
export default function SideBar({ sidebarOpen, setSidebarOpen }: SideBarProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sidebarOpen) {
      menuRef?.current?.focus()
    }
  }, [sidebarOpen])

  return (
    <>
      <Transition show={sidebarOpen}>
        <Dialog
          ref={menuRef}
          className="relative z-50 lg:hidden"
          tabIndex={-1}
          onClose={setSidebarOpen}
          id="menuOculto"
        >
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel
                role="dialog"
                aria-labelledby="Menu"
                aria-describedby="MenuNavigation"
                className="relative mr-16 flex w-full max-w-xs flex-1 bg-[#141920]"
              >
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <div
                  className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2 "
                  id="Menu"
                >
                  <div
                    role="banner"
                    className="flex h-16 shrink-0 items-center"
                  >
                    <a
                      className="text-white"
                      aria-label="Voltar ao inicio"
                      href="/"
                    >
                      <svg
                        width="40"
                        height="361"
                        viewBox="0 0 438 361"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M116 0.804343C167.577 0.82949 218.66 -0.0149319 271.07 1.5443C266.702 4.28164 262.927 3.6701 259.594 3.87698C236.52 5.3088 214.91 12.5933 193.301 19.9149C181.946 23.762 170.696 27.9174 159.341 31.7661C155.157 33.1844 154.316 34.7593 156.164 39.3159C159.528 47.6085 164.465 50.0784 173.579 49.9794C221.069 49.4639 268.571 49.6988 316.065 50.1148C322.98 50.1753 326.714 47.8987 329.508 41.8752C332.935 34.4879 336.61 27.1879 340.941 20.2411C344.542 14.4638 349.643 11.7317 356.337 11.7306C378.169 11.7268 400.001 11.7287 421.833 11.7387C422.831 11.7392 423.837 11.7765 424.826 11.9044C433.034 12.9667 434.765 15.8968 430.662 23.0509C413.75 52.5381 397.772 82.536 381.783 112.521C346.428 178.825 308.127 243.494 272.682 309.746C264.353 325.316 255.999 340.872 247.612 356.411C246.693 358.113 246.005 360.079 244.293 360.961C242.536 360.91 242.13 359.767 241.596 358.736C213.706 304.894 186.09 250.907 157.842 197.253C129.595 143.601 100.728 90.2747 72.0984 36.8237C68.7171 30.5106 65.0368 24.3578 61.6533 18.0458C58.8151 12.7514 59.4341 11.7631 65.4443 11.712C107.435 11.3549 149.427 11.0248 191.418 10.7001C197.737 10.6512 203.771 9.12374 209.866 7.479C206.28 5.18539 202.357 5.3698 198.528 5.35754C154.198 5.21535 109.867 5.21532 65.537 4.97997C45.7109 4.87475 25.8869 4.33385 6.0625 3.96142C4.27502 3.92782 2.41187 4.08105 0.802368 1.74374C39.0349 1.43172 77.2674 1.11974 116 0.804343ZM249.122 171.66C249.122 177.326 249.122 182.992 249.122 188.658C249.825 188.779 250.529 188.9 251.233 189.022C276.289 145.924 298.113 101.105 321.864 55.8545C269.402 55.8545 218.178 55.8545 165.961 55.8545C189.39 100.444 212.572 144.262 237.707 187.37C238.673 179.893 238.781 172.604 238.652 165.318C238.299 145.324 239.556 125.365 239.948 105.388C240.173 93.9182 241.085 82.4617 241.689 70.9992C241.791 69.0557 241.867 67.0942 244.465 65.9507C245.886 68.787 245.922 71.6139 246.005 74.374C246.489 90.3495 246.854 106.329 247.361 122.303C247.874 138.439 248.507 154.571 249.122 171.66Z"
                          fill="currentColor"
                        />
                        <path
                          d="M75.6773 57.3698C102.999 107.654 124.694 160.268 150.851 210.709C145.438 207.373 56.8965 30.8402 56.3528 20.6082C62.7353 32.7537 69.1179 44.8992 75.6773 57.3698Z"
                          fill="currentColor"
                        />
                        <path
                          d="M379.015 141.077C397.128 101.717 416.424 63.3641 436.384 24.6689C438.275 27.3134 436.85 29.2511 436.065 30.9789C430.075 44.1696 424.27 57.4565 417.842 70.433C403.499 99.383 388.888 128.201 374.258 157.007C369.055 167.251 363.49 177.312 358.06 187.439C357.135 189.164 356.224 190.94 354.039 191.838C361.737 174.737 371.199 158.513 379.015 141.077Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <nav id="MenuNavigation" className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {routes.map((item) => (
                            <li key={`sd-nav-${item.name}`}>
                              <a
                                aria-label={`Acessar ${item.path}`}
                                href={item.path}
                                className={classNames(
                                  item.path === pathname
                                    ? 'bg-[#d7d7d7] text-[#154e7c]'
                                    : 'text-gray-200 hover:bg-[#d7d7d7] hover:text-[#154e7c]',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.path === pathname
                                      ? 'text-[#154e7c]'
                                      : 'text-gray-100 group-hover:text-[#154e7c]',
                                    'h-6 w-6 shrink-0',
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-800 bg-[#141920] px-6">
          <div role="banner" className="flex h-16 shrink-0 items-center">
            <a className="text-white" aria-label="Voltar ao inicio" href="/">
              <svg
                width="40"
                height="361"
                viewBox="0 0 438 361"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M116 0.804343C167.577 0.82949 218.66 -0.0149319 271.07 1.5443C266.702 4.28164 262.927 3.6701 259.594 3.87698C236.52 5.3088 214.91 12.5933 193.301 19.9149C181.946 23.762 170.696 27.9174 159.341 31.7661C155.157 33.1844 154.316 34.7593 156.164 39.3159C159.528 47.6085 164.465 50.0784 173.579 49.9794C221.069 49.4639 268.571 49.6988 316.065 50.1148C322.98 50.1753 326.714 47.8987 329.508 41.8752C332.935 34.4879 336.61 27.1879 340.941 20.2411C344.542 14.4638 349.643 11.7317 356.337 11.7306C378.169 11.7268 400.001 11.7287 421.833 11.7387C422.831 11.7392 423.837 11.7765 424.826 11.9044C433.034 12.9667 434.765 15.8968 430.662 23.0509C413.75 52.5381 397.772 82.536 381.783 112.521C346.428 178.825 308.127 243.494 272.682 309.746C264.353 325.316 255.999 340.872 247.612 356.411C246.693 358.113 246.005 360.079 244.293 360.961C242.536 360.91 242.13 359.767 241.596 358.736C213.706 304.894 186.09 250.907 157.842 197.253C129.595 143.601 100.728 90.2747 72.0984 36.8237C68.7171 30.5106 65.0368 24.3578 61.6533 18.0458C58.8151 12.7514 59.4341 11.7631 65.4443 11.712C107.435 11.3549 149.427 11.0248 191.418 10.7001C197.737 10.6512 203.771 9.12374 209.866 7.479C206.28 5.18539 202.357 5.3698 198.528 5.35754C154.198 5.21535 109.867 5.21532 65.537 4.97997C45.7109 4.87475 25.8869 4.33385 6.0625 3.96142C4.27502 3.92782 2.41187 4.08105 0.802368 1.74374C39.0349 1.43172 77.2674 1.11974 116 0.804343ZM249.122 171.66C249.122 177.326 249.122 182.992 249.122 188.658C249.825 188.779 250.529 188.9 251.233 189.022C276.289 145.924 298.113 101.105 321.864 55.8545C269.402 55.8545 218.178 55.8545 165.961 55.8545C189.39 100.444 212.572 144.262 237.707 187.37C238.673 179.893 238.781 172.604 238.652 165.318C238.299 145.324 239.556 125.365 239.948 105.388C240.173 93.9182 241.085 82.4617 241.689 70.9992C241.791 69.0557 241.867 67.0942 244.465 65.9507C245.886 68.787 245.922 71.6139 246.005 74.374C246.489 90.3495 246.854 106.329 247.361 122.303C247.874 138.439 248.507 154.571 249.122 171.66Z"
                  fill="currentColor"
                />
                <path
                  d="M75.6773 57.3698C102.999 107.654 124.694 160.268 150.851 210.709C145.438 207.373 56.8965 30.8402 56.3528 20.6082C62.7353 32.7537 69.1179 44.8992 75.6773 57.3698Z"
                  fill="currentColor"
                />
                <path
                  d="M379.015 141.077C397.128 101.717 416.424 63.3641 436.384 24.6689C438.275 27.3134 436.85 29.2511 436.065 30.9789C430.075 44.1696 424.27 57.4565 417.842 70.433C403.499 99.383 388.888 128.201 374.258 157.007C369.055 167.251 363.49 177.312 358.06 187.439C357.135 189.164 356.224 190.94 354.039 191.838C361.737 174.737 371.199 158.513 379.015 141.077Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {routes.map((item) => (
                    <li key={`sd-nav-${item.name}`}>
                      <a
                        aria-label={`Acessar ${item.path}`}
                        href={item.path}
                        className={classNames(
                          item.path === pathname
                            ? 'bg-[#d7d7d7] text-[#154e7c]'
                            : 'text-gray-200 hover:bg-[#d7d7d7] hover:text-[#154e7c]',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.path === pathname
                              ? 'text-[#154e7c]'
                              : 'text-gray-100 group-hover:text-[#154e7c]',
                            'h-6 w-6 shrink-0',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                  <span aria-hidden="true">Nome Usuario</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
