import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from "next/image";
import { itemList } from './itemlist';
import WatchItem from './WatchItem';

export default function WatchLaterContent() {
  return (
    <div className="px-3">
      <div className="lg:flex items-center justify-between p-4 bg-[#F5F5F5] rounded-2xl">
        <div className='block items-center justify-between sm:flex'>
          <Image
            src="/src/placeholders/placeholder1.png"
            width={242}
            height={156}
            alt="image"
            className="rounded-2xl object-cover mr-2 w-full sm:w-[242px]"
          />
          <div className="flex items-center mt-4 sm:mt-0 justify-end sm:justify-start">
            <img
              className="w-[38px] h-[38px] rounded-full mx-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
            />
            <div className="mx-2">
              <div className="text-[20px] font-bold">Jessica Adeline</div>
              <div className="text-xs sm:block hidden">Last updated on Nov 21, 2022</div>
            </div>
            <div className="w-[33px] h-0 border-t-[1px] border-solid rotate-90 border-zinc-300 mx-1"></div>
            <div className="mx-2">
              <div className="text-[20px] font-medium">39</div>
              <div className="text-xs font-normal">Videos</div>
            </div>
            <div className="w-[33px] h-0 border-t-[1px] border-solid rotate-90 border-zinc-300 mx-1"></div>
            <div className="mx-2">
              <div className="text-[20px] font-medium">27</div>
              <div className="text-xs font-normal">Views</div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4 lg:mt-0 justify-end lg:justify-start">
          <button className='h-10 w-[130px] rounded-[32px] flex items-center justify-center text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 px-2 bg-bu-purple'>
            <svg className="w-[15px] h-[15px] mx-1" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5C1.25 10.95 4.05 13.75 7.5 13.75C10.95 13.75 13.75 10.95 13.75 7.5C13.75 4.05 10.95 1.25 7.5 1.25ZM9.1625 8.58125L8.3625 9.04375L7.5625 9.50625C6.53125 10.1 5.6875 9.6125 5.6875 8.425V7.5V6.575C5.6875 5.38125 6.53125 4.9 7.5625 5.49375L8.3625 5.95625L9.1625 6.41875C10.1937 7.0125 10.1937 7.9875 9.1625 8.58125Z" fill="white" />
            </svg>
            Play All
          </button>
          <button className="h-10 w-[130px] rounded-[32px] bg-[#B8B5C6] text-sm text-white mx-1 flex items-center justify-center hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="w-[15px] h-[15px] mx-1">
              <path d="M1.875 11.2372L3.46874 11.2434C4.03749 11.2434 4.56875 10.9622 4.88125 10.4934L8.87501 4.50597C9.18751 4.03722 9.71875 3.74971 10.2875 3.75596L13.1313 3.76847" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.875 12.4883L13.125 11.2383" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.55626 5.38761L4.88125 4.45011C4.5625 4.00636 4.04999 3.74386 3.50624 3.75011L1.875 3.75637" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.1062 9.61328L8.8687 10.5945C9.18745 11.007 9.68745 11.2508 10.2124 11.2508L13.1312 11.2383" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.125 3.7627L11.875 2.5127" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Shuffle
          </button>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center items-center text-sm hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-1" color='#959595'>
                <svg width="5" height="16" viewBox="0 0 5 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.4" cx="2.9917" cy="2" r="2" fill="#959595" />
                  <circle opacity="0.4" cx="2.9917" cy="8" r="2" fill="#959595" />
                  <circle opacity="0.4" cx="2.9917" cy="14" r="2" fill="#959595" />
                </svg>

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
              <Menu.Items className="z-10 w-max absolute right-0 mt-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-bu-purple text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12.0001 20.2697C15.5301 20.2697 18.8201 18.1897 21.1101 14.5897C22.0101 13.1797 22.0101 10.8097 21.1101 9.39973C18.8201 5.79973 15.5301 3.71973 12.0001 3.71973C8.47009 3.71973 5.18009 5.79973 2.89009 9.39973C1.99009 10.8097 1.99009 13.1797 2.89009 14.5897C5.18009 18.1897 8.47009 20.2697 12.0001 20.2697Z" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#B8B5C6] px-2">Show unavailable videos</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-bu-purple text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12H18" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 18V6" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#B8B5C6] px-2">Add videos</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-bu-purple text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12H18" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#B8B5C6] px-2">Remote watches videos</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div>
        <div className='flex items-center my-[38px]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 12H18" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 17H14" stroke="#B8B5C6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className='px-2 text-[#B8B5C6]'>Sort by</span>
        </div>
        <div>
          {
            itemList.map((e, index) => {
              return (
                <WatchItem {...e} key={"itm" + index}></WatchItem>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}