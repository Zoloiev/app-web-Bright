import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface CommunityItemProps {
  avatarUrl: string,
  isEnd: boolean,
  lastViewed: string,
  name: string
}

const CommunityItem: React.FC<CommunityItemProps> = ({ avatarUrl, isEnd, lastViewed, name }) => {
  return (
    <div className="mb-8">
      <div className="flex">
        <img src={avatarUrl} alt="avatar" className="w-[30px] h-[30px] rounded-full mr-3" />
        <div className="w-0 flex-1 flex items-center justify-between">
          <div>
            <div className='mb-2 font-medium text-[14px] text-black'>Opened <span className='font-bold'>Post</span> by <span className='text-[#C400C4]'>{name}</span></div>
            <div className='text-[#B8B5C6] text-[13px] font-medium'>{lastViewed}</div>
          </div>
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
                          <path d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18.85 9.13965L18.2 19.2096C18.09 20.7796 18 21.9996 15.21 21.9996H8.78999C5.99999 21.9996 5.90999 20.7796 5.79999 19.2096L5.14999 9.13965" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.33 16.5H13.66" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9.5 12.5H14.5" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#B8B5C6] px-2">Delete</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {
        !isEnd && <div className='mt-[20px] w-full h-0 border-t-[1px] border-solid border-[#ECE9EC]'></div>
      }
    </div>
  )
}

export default CommunityItem;