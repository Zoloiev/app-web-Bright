import { useMenu } from "@/utils/context";
import { useMenuStore } from "@/utils/store";
import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import Navigation from "./Navigation";

export interface ClosedSidebarProps {}
const ClosedSidebar: React.FC<ClosedSidebarProps> = () => {
  const { menuProps, setMenuProps } = useMenuStore();
  const { variant } = useMenu();
  return (
    <Transition.Root
      // show={menuProps.variant === "open" && variant === "closed"}
      show={menuProps.variant === "open"}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10 md:hidden"
        onClose={() => setMenuProps("closed")}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full sm:pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300 transform-gpu"
                enterFrom="-translate-x-full transform-gpu"
                enterTo="translate-x-0 transform-gpu"
                leave="transform transition ease-in-out duration-300 sm:duration-300 transform-gpu"
                leaveFrom="translate-x-0 transform-gpu"
                leaveTo="-translate-x-full transform-gpu"
              >
                <Dialog.Panel className="pointer-events-auto relative max-w-full sm:max-w-xs">
                  <div className="flex h-full flex-col bg-white py-3 shadow-xl overflow-y-auto">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        <div className="flex items-center space-x-2">
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              className="rounded-md text-black hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setMenuProps("closed")}
                            >
                              <svg
                                width="23"
                                height="16"
                                viewBox="0 0 23 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_10_2966)">
                                  <path
                                    d="M17.0667 1.1733C17.0667 0.544945 16.5572 0.0355225 15.9289 0.0355225H1.13778C0.509421 0.0355225 -1.90735e-06 0.544945 -1.90735e-06 1.1733C-1.90735e-06 1.80166 0.509421 2.31108 1.13778 2.31108H15.9289C16.5572 2.31108 17.0667 1.80161 17.0667 1.1733V1.1733ZM1.13778 6.86219H21.6178C22.2461 6.86219 22.7556 7.37166 22.7556 7.99997C22.7556 8.62832 22.2461 9.13775 21.6178 9.13775H1.13778C0.509421 9.13775 -1.90735e-06 8.62832 -1.90735e-06 7.99997C-1.90735e-06 7.37166 0.509421 6.86219 1.13778 6.86219ZM1.13778 13.6889H11.3778C12.0061 13.6889 12.5156 14.1983 12.5156 14.8266C12.5156 15.4549 12.0061 15.9644 11.3778 15.9644H1.13778C0.509421 15.9644 -1.90735e-06 15.4549 -1.90735e-06 14.8266C-1.90735e-06 14.1983 0.509421 13.6889 1.13778 13.6889Z"
                                    fill="#3D3D3D"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_10_2966">
                                    <rect
                                      width="22.7556"
                                      height="16"
                                      fill="white"
                                      transform="matrix(-1 0 0 1 22.7556 0)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </div>
                          <Link href="/">
                            <div className="flex-shrink-0">
                              <img
                                className="h-12 w-36"
                                src="/src/svgs/logo.svg"
                                alt="logo"
                              />
                            </div>
                          </Link>
                        </div>
                      </Dialog.Title>
                    </div>
                    <Navigation fromDialog={true} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ClosedSidebar;
