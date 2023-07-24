import { useMenu } from "@/utils/context";
import { useMenuStore } from "@/utils/store";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import React, { Fragment } from "react";
// hooks
import useAuth from "../hooks/useAuth";
// import Sidebar from "./Sidebar";
// import ClosedSidebar from "./sidebar/ClosedSidebar";
import { useWindowSize } from "@/hooks/useWindowSize";
import ClosedSidebarAfter from "./sidebar/ClosedSidebarAfter";

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { menuProps, setMenuProps } = useMenuStore();
  const { variant } = useMenu();
  const windowSize = useWindowSize();

  const { logout } = useAuth();

  return (
    <div className="relative mx-auto grid grid-cols-10 items-center px-4 py-3 sm:px-6 lg:px-8">
      <div className="col-span-5 flex items-center space-x-2 sm:col-span-2">
        <div className="flex-shrink-0">
          <button
            type="button"
            className="rounded-md text-black hover:underline focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => {
              menuProps.variant === "closed"
                ? setMenuProps("open")
                : setMenuProps("closed");
            }}
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
          {windowSize.width && windowSize.width <= 768 && (
            <ClosedSidebarAfter />
          )}
        </div>
        <Link href="/">
          <div className="flex-shrink-0">
            <img className="h-12 w-36" src="/src/svgs/logo.svg" alt="logo" />
          </div>
        </Link>
      </div>
      <form className="col-span-0 relative hidden items-center justify-between sm:col-span-6 sm:flex">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative ml-[15px] w-full">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0Z"
                fill="#959595"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-2xl border border-gray-300 bg-white p-3 pr-10 text-sm text-gray-900 outline-0 outline-offset-0 focus:border-bu-main dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Search..."
            required
          />
        </div>
      </form>
      <div className="col-span-5 ml-4 flex items-center justify-end sm:col-span-2 md:ml-6">
        <button
          type="button"
          className="rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none"
        >
          <span className="sr-only">View notifications</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.33497 4.72727V5.25342C6.64516 6.35644 4.76592 9.97935 4.83412 13.1192L4.83409 14.8631C3.45713 16.6333 3.53815 19.2727 6.9735 19.2727H9.33497C9.33497 19.996 9.61684 20.6897 10.1186 21.2012C10.6203 21.7127 11.3008 22 12.0104 22C12.72 22 13.4005 21.7127 13.9022 21.2012C14.404 20.6897 14.6858 19.996 14.6858 19.2727H17.0538C20.4826 19.2727 20.5323 16.6278 19.1555 14.8576L19.1938 13.1216C19.2631 9.97811 17.3803 6.35194 14.6858 5.25049V4.72727C14.6858 4.00396 14.404 3.31026 13.9022 2.7988C13.4005 2.28734 12.72 2 12.0104 2C11.3008 2 10.6203 2.28734 10.1186 2.7988C9.61684 3.31026 9.33497 4.00395 9.33497 4.72727ZM12.9022 4.72727C12.9022 4.74573 12.9017 4.76414 12.9006 4.78246C12.6101 4.74603 12.3142 4.72727 12.014 4.72727C11.7113 4.72727 11.413 4.74634 11.1203 4.78335C11.1192 4.76474 11.1186 4.74603 11.1186 4.72727C11.1186 4.48617 11.2126 4.25494 11.3798 4.08445C11.547 3.91396 11.7739 3.81818 12.0104 3.81818C12.2469 3.81818 12.4738 3.91396 12.641 4.08445C12.8083 4.25494 12.9022 4.48617 12.9022 4.72727ZM11.1186 19.2727C11.1186 19.5138 11.2126 19.7451 11.3798 19.9156C11.547 20.086 11.7739 20.1818 12.0104 20.1818C12.2469 20.1818 12.4738 20.086 12.641 19.9156C12.8083 19.7451 12.9022 19.5138 12.9022 19.2727H11.1186ZM17.0538 17.4545C17.8157 17.4545 18.2267 16.5435 17.7309 15.9538C17.49 15.6673 17.3616 15.3028 17.3699 14.9286L17.4106 13.0808C17.4787 9.99416 15.0427 6.54545 12.014 6.54545C8.98598 6.54545 6.55028 9.99301 6.61731 13.0789L6.65748 14.9289C6.66561 15.303 6.53726 15.6674 6.29639 15.9538C5.80054 16.5435 6.21158 17.4545 6.9735 17.4545H17.0538Z"
              fill="#959595"
            />
          </svg>
        </button>

        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex items-center space-x-2 rounded-full text-sm focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="ABCD"
              />
              <ChevronDownIcon className="h-4 w-4" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={clsx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/settings"
                    className={clsx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                    className={clsx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
