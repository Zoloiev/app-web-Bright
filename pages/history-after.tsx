import { DefaultLayout } from '@/layouts';
import { videoItemList } from '@/components/profile/videoItemList';
import ProfileVideoItem from '@/components/profile/ProfileVideoItem';
import { CustomRadio } from "@/components/settings/CustomControls";
import { useState } from "react";

export interface IndexProps { }

const HistoryAfter: React.FC<IndexProps> = () => {

  const [type, setType] = useState('watch')

  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <div className='py-6'>
            <div className='md:grid md:grid-cols-4'>
              <div className='col-span-4 md:col-span-2 lg:col-span-3 border-0 border-b-[1px] md:border-r-[1px] md:border-b-0 border-solid border-[#ECE9EC] px-8'>
                <div className='text-[20px] text-[#3D3D3D] font-bold mb-6'>Today</div>
                <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3">
                  {
                    videoItemList.map((video, index) => (
                      <ProfileVideoItem
                        {...video}
                        key={"itm" + index}
                      />
                    ))
                  }
                </div>
              </div>
              <div className='mt-4 md:mt-0 md:block md:col-span-2 lg:col-span-1 pl-8 pr-4'>
                <div>
                  <form className="col-span-0 relative hidden items-center justify-between sm:col-span-6 sm:flex">
                    <label
                      htmlFor="default-search"
                      className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                        className="block w-full rounded-2xl border border-gray-300 bg-white p-3 pr-10 pl-10 text-sm text-gray-900 outline-0 outline-offset-0 focus:border-bu-main dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                        placeholder="Search watch history..."
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className='mt-8'>
                  <CustomRadio
                    radioItems={[
                      {
                        id: 1,
                        label: "Watch History",
                        value: "watch",
                      },
                      {
                        id: 2,
                        label: "Community",
                        value: "community",
                      }
                    ]}
                    value={type}
                    onChange={(value) => setType(value)}
                  />
                </div>
                <div className='mt-10'>
                  <div className='text-[12px] font-semibold text-[#B8B5C6]'>MANAGE</div>
                  <div className='mt-4'>
                    <div className='flex items-center cursor-pointer'>
                      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <path d="M9.16667 18C9.40978 18 9.64294 17.8946 9.81485 17.7071C9.98676 17.5196 10.0833 17.2652 10.0833 17V11C10.0833 10.7348 9.98676 10.4804 9.81485 10.2929C9.64294 10.1054 9.40978 10 9.16667 10C8.92355 10 8.69039 10.1054 8.51849 10.2929C8.34658 10.4804 8.25 10.7348 8.25 11V17C8.25 17.2652 8.34658 17.5196 8.51849 17.7071C8.69039 17.8946 8.92355 18 9.16667 18ZM18.3333 6H14.6667V5C14.6667 4.20435 14.3769 3.44129 13.8612 2.87868C13.3455 2.31607 12.646 2 11.9167 2H10.0833C9.35399 2 8.65451 2.31607 8.13879 2.87868C7.62306 3.44129 7.33333 4.20435 7.33333 5V6H3.66667C3.42355 6 3.19039 6.10536 3.01849 6.29289C2.84658 6.48043 2.75 6.73478 2.75 7C2.75 7.26522 2.84658 7.51957 3.01849 7.70711C3.19039 7.89464 3.42355 8 3.66667 8H4.58333V19C4.58333 19.7956 4.87306 20.5587 5.38879 21.1213C5.90451 21.6839 6.60399 22 7.33333 22H14.6667C15.396 22 16.0955 21.6839 16.6112 21.1213C17.1269 20.5587 17.4167 19.7956 17.4167 19V8H18.3333C18.5764 8 18.8096 7.89464 18.9815 7.70711C19.1534 7.51957 19.25 7.26522 19.25 7C19.25 6.73478 19.1534 6.48043 18.9815 6.29289C18.8096 6.10536 18.5764 6 18.3333 6ZM9.16667 5C9.16667 4.73478 9.26324 4.48043 9.43515 4.29289C9.60706 4.10536 9.84022 4 10.0833 4H11.9167C12.1598 4 12.3929 4.10536 12.5648 4.29289C12.7368 4.48043 12.8333 4.73478 12.8333 5V6H9.16667V5ZM15.5833 19C15.5833 19.2652 15.4868 19.5196 15.3148 19.7071C15.1429 19.8946 14.9098 20 14.6667 20H7.33333C7.09022 20 6.85706 19.8946 6.68515 19.7071C6.51324 19.5196 6.41667 19.2652 6.41667 19V8H15.5833V19ZM12.8333 18C13.0764 18 13.3096 17.8946 13.4815 17.7071C13.6534 17.5196 13.75 17.2652 13.75 17V11C13.75 10.7348 13.6534 10.4804 13.4815 10.2929C13.3096 10.1054 13.0764 10 12.8333 10C12.5902 10 12.3571 10.1054 12.1852 10.2929C12.0132 10.4804 11.9167 10.7348 11.9167 11V17C11.9167 17.2652 12.0132 17.5196 12.1852 17.7071C12.3571 17.8946 12.5902 18 12.8333 18Z" fill="#B8B5C6" />
                      </svg>
                      <div className='text-[#B8B5C6] text-[16px] font-medium'>Clear all watch history</div>
                    </div>
                    <div className='flex items-center mt-4 cursor-pointer'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.72 14.5298V9.4698C10.72 8.9898 10.52 8.7998 10.01 8.7998H8.71C8.2 8.7998 8 8.9898 8 9.4698V14.5298C8 15.0098 8.2 15.1998 8.71 15.1998H10C10.52 15.1998 10.72 15.0098 10.72 14.5298Z" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 14.5298V9.4698C16 8.9898 15.8 8.7998 15.29 8.7998H14C13.49 8.7998 13.29 8.9898 13.29 9.4698V14.5298C13.29 15.0098 13.49 15.1998 14 15.1998H15.29C15.8 15.1998 16 15.0098 16 14.5298Z" stroke="#B8B5C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className='text-[#B8B5C6] text-[16px] font-medium'>Pause watch history</div>
                    </div>
                    <div className='flex items-center mt-4 cursor-pointer'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <g clipPath="url(#clip0_1_4610)">
                          <path d="M19.4301 12.98C19.4701 12.66 19.5001 12.34 19.5001 12C19.5001 11.66 19.4701 11.34 19.4301 11.02L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5701 5.11 19.4001 5.02 19.2201 5.02C19.1601 5.02 19.1001 5.03 19.0501 5.05L16.5601 6.05C16.0401 5.65 15.4801 5.32 14.8701 5.07L14.4901 2.42C14.4601 2.18 14.2501 2 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.51008 2.42L9.13008 5.07C8.52008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.89008 5.03 4.83008 5.02 4.77008 5.02C4.60008 5.02 4.43008 5.11 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11.02C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.66 4.57008 12.98L2.46008 14.63C2.27008 14.78 2.22008 15.05 2.34008 15.27L4.34008 18.73C4.43008 18.89 4.60008 18.98 4.78008 18.98C4.84008 18.98 4.90008 18.97 4.95008 18.95L7.44008 17.95C7.96008 18.35 8.52008 18.68 9.13008 18.93L9.51008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.4901 21.58L14.8701 18.93C15.4801 18.68 16.0401 18.34 16.5601 17.95L19.0501 18.95C19.1101 18.97 19.1701 18.98 19.2301 18.98C19.4001 18.98 19.5701 18.89 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.98ZM17.4501 11.27C17.4901 11.58 17.5001 11.79 17.5001 12C17.5001 12.21 17.4801 12.43 17.4501 12.73L17.3101 13.86L18.2001 14.56L19.2801 15.4L18.5801 16.61L17.3101 16.1L16.2701 15.68L15.3701 16.36C14.9401 16.68 14.5301 16.92 14.1201 17.09L13.0601 17.52L12.9001 18.65L12.7001 20H11.3001L11.1101 18.65L10.9501 17.52L9.89008 17.09C9.46008 16.91 9.06008 16.68 8.66008 16.38L7.75008 15.68L6.69008 16.11L5.42008 16.62L4.72008 15.41L5.80008 14.57L6.69008 13.87L6.55008 12.74C6.52008 12.43 6.50008 12.2 6.50008 12C6.50008 11.8 6.52008 11.57 6.55008 11.27L6.69008 10.14L5.80008 9.44L4.72008 8.6L5.42008 7.39L6.69008 7.9L7.73008 8.32L8.63008 7.64C9.06008 7.32 9.47008 7.08 9.88008 6.91L10.9401 6.48L11.1001 5.35L11.3001 4H12.6901L12.8801 5.35L13.0401 6.48L14.1001 6.91C14.5301 7.09 14.9301 7.32 15.3301 7.62L16.2401 8.32L17.3001 7.89L18.5701 7.38L19.2701 8.59L18.2001 9.44L17.3101 10.14L17.4501 11.27ZM12.0001 8C9.79008 8 8.00008 9.79 8.00008 12C8.00008 14.21 9.79008 16 12.0001 16C14.2101 16 16.0001 14.21 16.0001 12C16.0001 9.79 14.2101 8 12.0001 8ZM12.0001 14C10.9001 14 10.0001 13.1 10.0001 12C10.0001 10.9 10.9001 10 12.0001 10C13.1001 10 14.0001 10.9 14.0001 12C14.0001 13.1 13.1001 14 12.0001 14Z" fill="#B8B5C6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_4610">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className='text-[#B8B5C6] text-[16px] font-medium'>Manage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HistoryAfter;