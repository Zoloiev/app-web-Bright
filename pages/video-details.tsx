import { DefaultLayout } from '@/layouts';
import { CustomSwitch } from '@/components/settings/CustomControls';
import React, { useState } from 'react';
import { detailList } from '@/components/profile/videoItemList';
import { alertList } from '@/components/video-details/alertList';
import ProfileVideoItem from '@/components/profile/ProfileVideoItem';
import AlertItem from '@/components/video-details/AlertItem';
import { Tab } from "@headlessui/react";
import VideoDetailsAbout from '@/components/video-details/VideoDetailsAbout';
import VideoDetailsComment from '@/components/video-details/VideoDetailsComment';

export interface IndexProps { }

const VideoDetails: React.FC<IndexProps> = () => {

  const [autoPlay, setAutoPlay] = useState(true)

  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <div className='py-6'>
            <div className='md:grid md:grid-cols-4'>
              <div className='xl:col-span-3 col-span-2'>
                <video className='w-full rounded-[16px]' controls>
                  <source src="/src/video.mp4" />
                </video>
                <div className='my-[20px]'>
                  <div className='block lg:flex justify-between items-center'>
                    <div className='text-[18px] text-[#3D3D3D] font-semibold'>Glamorous Eye Makeup Ideas & Eye Shadow Tutorials</div>
                    <div className='text-[#F56E83] text-[18px] font-medium'>#1 ON TRENDING</div>
                  </div>
                  <div className='mt-[16px] block lg:flex justify-between items-center border-0 border-b-[1px] border-solid border-[#DDDDDD]'>
                    <div className='text-[14px] font-normal text-[#3D3D3D]'>576,969 views . Oct 17, 2022</div>
                    <div className='flex items-center'>
                      <div>
                        <div className='flex justify-between items-center'>
                          <div className='flex justify-between items-center'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.8817 18.5H16.9999C16.4476 18.5 15.9999 18.0523 15.9999 17.5C15.9999 16.9477 16.4476 16.5 16.9999 16.5H19.4999C19.5589 16.5 19.6167 16.5051 19.6729 16.5149C19.8009 16.116 19.9199 15.6969 20.0297 15.2575C20.0947 14.9976 20.1528 14.7451 20.2042 14.5H17.9999C17.4476 14.5 16.9999 14.0523 16.9999 13.5C16.9999 12.9477 17.4476 12.5 17.9999 12.5H20.4853C20.5073 12.1103 20.5044 11.7492 20.4766 11.4169C20.4334 10.8986 20.0002 10.5 19.4801 10.5H9.99985C8.89528 10.5 7.99985 9.60457 7.99985 8.5V5.25C7.99985 4.83579 7.66406 4.5 7.24985 4.5C6.7458 4.5 6.31894 4.87168 6.2496 5.37093L4.46433 18.2249C4.45167 18.316 4.44531 18.408 4.44531 18.5C4.44531 19.6046 5.34074 20.5 6.44531 20.5H16.5847C17.2571 20.5 17.8844 20.1621 18.2545 19.6007C18.4765 19.264 18.6856 18.8971 18.8817 18.5ZM22.4697 11.2506C22.5747 12.5087 22.4049 14.0029 21.97 15.7425C21.4736 17.7281 20.7945 19.3815 19.9243 20.7015C19.1842 21.8243 17.9294 22.5 16.5847 22.5H6.44531C4.23617 22.5 2.44531 20.7091 2.44531 18.5C2.44531 18.3159 2.45802 18.1321 2.48334 17.9497L4.26861 5.09579C4.47528 3.60777 5.74755 2.5 7.24985 2.5C8.76863 2.5 9.99985 3.73122 9.99985 5.25V8.5H19.4801C21.0403 8.50003 22.34 9.69587 22.4697 11.2506Z" fill="#3D3D3D" />
                            </svg>
                            <span className='text-[14px] text-[#3D3D3D] font-bold ml-[6px]'>1.7K</span>
                          </div>
                          <div className='flex justify-between items-center ml-[20px]'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.11834 6.5H7.00015C7.55243 6.5 8.00015 6.94772 8.00015 7.5C8.00015 8.05228 7.55243 8.5 7.00015 8.5H4.50015C4.44112 8.5 4.38329 8.49489 4.32707 8.48508C4.19911 8.88398 4.08014 9.30313 3.97029 9.74254C3.90532 10.0024 3.84716 10.2549 3.79576 10.5H6.00015C6.55243 10.5 7.00015 10.9477 7.00015 11.5C7.00015 12.0523 6.55243 12.5 6.00015 12.5H3.51473C3.49266 12.8897 3.49565 13.2508 3.52336 13.5831C3.56659 14.1014 3.99984 14.5 4.51988 14.5H14.0002C15.1047 14.5 16.0002 15.3954 16.0002 16.5V19.75C16.0002 20.1642 16.3359 20.5 16.7502 20.5C17.2542 20.5 17.6811 20.1283 17.7504 19.6291L19.5357 6.77514C19.5483 6.68397 19.5547 6.59204 19.5547 6.5C19.5547 5.39543 18.6593 4.5 17.5547 4.5H7.41533C6.74295 4.5 6.11556 4.83787 5.74549 5.39926C5.52351 5.73602 5.31438 6.10292 5.11834 6.5ZM1.53028 13.7494C1.42534 12.4913 1.59509 10.9971 2.03001 9.25746C2.52639 7.27191 3.20552 5.61851 4.07566 4.29851C4.81578 3.17573 6.07056 2.5 7.41533 2.5H17.5547C19.7638 2.5 21.5547 4.29086 21.5547 6.5C21.5547 6.68408 21.542 6.86794 21.5167 7.05027L19.7314 19.9042C19.5247 21.3922 18.2525 22.5 16.7502 22.5C15.2314 22.5 14.0002 21.2688 14.0002 19.75V16.5H4.51987C2.95971 16.5 1.65997 15.3041 1.53028 13.7494Z" fill="#3D3D3D" />
                            </svg>
                            <span className='text-[14px] text-[#3D3D3D] font-bold ml-[6px]'>632</span>
                          </div>
                        </div>
                        <div className="h-1 w-full bg-[#3D3D3D] mt-[5px]">
                          <div className="h-1 bg-[#C400C4] w-[80%]"></div>
                        </div>
                      </div>
                      <div className='flex items-center mt-[-10px] ml-[24px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_226_2619)">
                            <path d="M16.1107 12.2225C15.4807 12.223 14.8602 12.3768 14.3028 12.6706C13.7455 12.9645 13.268 13.3896 12.9116 13.9091L7.4874 11.46C7.87266 10.5297 7.87416 9.4847 7.49157 8.5533L12.9082 6.09163C13.4365 6.85559 14.221 7.40493 15.1196 7.64C16.0181 7.87507 16.9712 7.7803 17.8058 7.37288C18.6405 6.96546 19.3015 6.27238 19.6689 5.41935C20.0364 4.56633 20.0859 3.60986 19.8085 2.72344C19.5312 1.83703 18.9453 1.07938 18.1572 0.587925C17.3691 0.0964738 16.4309 -0.0962275 15.5129 0.0447755C14.5948 0.185779 13.7577 0.651146 13.1534 1.35646C12.5491 2.06178 12.2176 2.96034 12.2191 3.88913C12.2226 4.10896 12.2449 4.32809 12.2857 4.54413L6.5274 7.1608C5.97435 6.64265 5.28199 6.29733 4.53538 6.16727C3.78877 6.0372 3.02043 6.12806 2.32474 6.42868C1.62906 6.7293 1.03634 7.22658 0.6194 7.85943C0.202459 8.49229 -0.0205423 9.23315 -0.0222074 9.991C-0.0238725 10.7489 0.195871 11.4907 0.610027 12.1254C1.02418 12.7601 1.61471 13.2599 2.30907 13.5636C3.00342 13.8673 3.77136 13.9615 4.51853 13.8347C5.26571 13.708 5.95958 13.3657 6.5149 12.85L12.2882 15.4566C12.2481 15.6725 12.2261 15.8913 12.2224 16.1108C12.2222 16.8801 12.4502 17.6321 12.8775 18.2718C13.3048 18.9115 13.9122 19.4101 14.6229 19.7046C15.3335 19.9991 16.1156 20.0762 16.8701 19.9261C17.6246 19.7761 18.3177 19.4057 18.8616 18.8617C19.4056 18.3177 19.776 17.6247 19.926 16.8702C20.0761 16.1157 19.999 15.3336 19.7045 14.6229C19.4101 13.9122 18.9114 13.3048 18.2718 12.8776C17.6321 12.4503 16.88 12.2223 16.1107 12.2225ZM16.1107 1.66663C16.5503 1.66646 16.9801 1.79667 17.3457 2.04078C17.7113 2.28489 17.9963 2.63194 18.1646 3.03804C18.333 3.44413 18.3771 3.89103 18.2915 4.32221C18.2058 4.75339 17.9942 5.14947 17.6834 5.46038C17.3726 5.77129 16.9766 5.98304 16.5455 6.06886C16.1143 6.15469 15.6674 6.11072 15.2612 5.94253C14.8551 5.77434 14.5079 5.48948 14.2637 5.12397C14.0194 4.75847 13.8891 4.32873 13.8891 3.88913C13.8895 3.29997 14.1237 2.73505 14.5402 2.31837C14.9567 1.90169 15.5216 1.66729 16.1107 1.66663ZM3.88907 12.2225C3.44946 12.2226 3.01969 12.0924 2.65409 11.8483C2.28849 11.6042 2.0035 11.2572 1.83515 10.8511C1.66681 10.445 1.62268 9.99807 1.70834 9.56689C1.794 9.13571 2.00561 8.73962 2.3164 8.42871C2.62719 8.11781 3.0232 7.90605 3.45434 7.82023C3.88549 7.73441 4.3324 7.77837 4.73856 7.94656C5.14471 8.11475 5.49187 8.39962 5.73612 8.76512C5.98037 9.13063 6.11074 9.56036 6.11074 9.99996C6.11007 10.5891 5.87582 11.1539 5.45934 11.5705C5.04287 11.9871 4.47817 12.2216 3.88907 12.2225ZM16.1107 18.3333C15.6712 18.3333 15.2415 18.203 14.876 17.9587C14.5105 17.7145 14.2256 17.3674 14.0574 16.9613C13.8892 16.5552 13.8452 16.1083 13.9309 15.6772C14.0167 15.2461 14.2284 14.8501 14.5392 14.5393C14.85 14.2284 15.246 14.0168 15.6771 13.931C16.1083 13.8452 16.5551 13.8893 16.9612 14.0575C17.3674 14.2257 17.7145 14.5106 17.9587 14.876C18.2029 15.2415 18.3332 15.6712 18.3332 16.1108C18.3328 16.7001 18.0985 17.2652 17.6818 17.6819C17.2651 18.0986 16.7 18.3329 16.1107 18.3333Z" fill="#3D3D3D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_226_2619">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-[20px]'>
                          <path d="M7.5 12C7.5 12.83 6.83 13.5 6 13.5C5.17 13.5 4.5 12.83 4.5 12C4.5 11.17 5.17 10.5 6 10.5C6.83 10.5 7.5 11.17 7.5 12ZM12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5ZM18 10.5C17.17 10.5 16.5 11.17 16.5 12C16.5 12.83 17.17 13.5 18 13.5C18.83 13.5 19.5 12.83 19.5 12C19.5 11.17 18.83 10.5 18 10.5Z" fill="#3D3D3D" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='block lg:flex justify-between items-center'>
                  <div className='flex items-center'>
                    <img className='rounded-full w-[45px] h-[45px]' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
                    <div className='flex flex-col justify-between ml-[12px]'>
                      <div className='text-[16px] text-[#3D3D3D] font-semibold'>Helen_Streamer</div>
                      <div className='text-[14px] text-[#959595] font-normal'>243,000 subscribes</div>
                    </div>
                  </div>
                  <button className='ml-auto lg:ml-0 mt-2 lg:mt-0 lg:text-[14px] text-[12px] rounded-[16px] flex items-center justify-center text-white  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-bu-purple lg:py-4 lg:px-8 py-1 px-2'>
                    SUBSCRIBE
                  </button>
                </div>
                <div className='mt-[20px]'>
                  <Tab.Group defaultIndex={0}>
                    <Tab.List className="h-13 flex items-center gap-11 overflow-auto border-b border-bu-borderColor px-3 md:px-6">
                      <Tab
                        className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
                      >
                        About
                      </Tab>
                      <Tab
                        className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
                      >
                        Comments
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-7 flex-1 overflow-auto">
                      <Tab.Panel>
                        <VideoDetailsAbout />
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className='p-[18px] rounded-[16px] bg-[#CACACA]/20'>
                          <VideoDetailsComment />
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
              <div className='mt-8 md:mt-0 pl-3 col-span-2 xl:col-span-1'>
                <div className='bg-[#C400C4]/[12%] h-[48px] w-full rounded-[16px] flex items-center justify-between px-4'>
                  <div className='text-[#C400C4] text-[16px] font-medium'>Auto play</div>
                  <CustomSwitch
                    checked={autoPlay}
                    label=""
                    description=""
                    onChange={(checked) => {
                      setAutoPlay(checked);
                    }}
                    className="pt-0"
                    outerClass="gap-0"
                  />
                </div>
                <div className='mt-6 rounded-[16px] bg-[#C400C4]/5 p-[16px] pb-[4px]'>
                  <div className='flex justify-between'>
                    <div className='flex-1 break-keep text-[16px] font-normal text-black'>
                      Natural Glam Makeup Full Tutorial with Jean Watts
                    </div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:opacity-60'>
                      <path d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z" fill="#C400C4" />
                      <path d="M10.2129 11.455C10.0496 11.4555 9.88787 11.4236 9.737 11.3612C9.58614 11.2987 9.44916 11.207 9.33401 11.0912L7.50003 9.25778L5.66604 11.0921C5.43294 11.3252 5.11679 11.4561 4.78714 11.4561C4.45748 11.4561 4.14133 11.3252 3.90823 11.0921C3.67513 10.859 3.54418 10.5428 3.54418 10.2132C3.54418 9.8835 3.67513 9.56735 3.90823 9.33424L5.74222 7.49997L3.90794 5.66598C3.67484 5.43288 3.54388 5.11673 3.54388 4.78708C3.54388 4.45742 3.67484 4.14127 3.90794 3.90817C4.14104 3.67507 4.45719 3.54412 4.78685 3.54412C5.1165 3.54412 5.43265 3.67507 5.66575 3.90817L7.50003 5.74216L9.33401 3.90788C9.44943 3.79246 9.58646 3.7009 9.73726 3.63844C9.88806 3.57597 10.0497 3.54382 10.2129 3.54382C10.3761 3.54382 10.5378 3.57597 10.6886 3.63844C10.8394 3.7009 10.9764 3.79246 11.0918 3.90788C11.2072 4.0233 11.2988 4.16032 11.3613 4.31112C11.4237 4.46193 11.4559 4.62356 11.4559 4.78678C11.4559 4.95001 11.4237 5.11164 11.3613 5.26245C11.2988 5.41325 11.2072 5.55027 11.0918 5.66569L9.25784 7.49997L11.0921 9.33395C11.2659 9.50773 11.3843 9.72916 11.4322 9.97022C11.4802 10.2113 11.4555 10.4611 11.3614 10.6882C11.2674 10.9152 11.108 11.1093 10.9037 11.2458C10.6993 11.3823 10.459 11.4551 10.2132 11.455H10.2129Z" fill="white" />
                    </svg>
                  </div>
                  <div className='mt-[16px] overflow-y-auto max-h-[420px]'>
                    <div>
                      {
                        alertList.map((itm, index) => {
                          return (
                            <AlertItem {...itm} key={"itm" + index} />
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <div>
                    {
                      detailList.map((itm, index) => {
                        return (
                          <ProfileVideoItem {...itm} key={"itm" + index} />
                        )
                      })
                    }
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

export default VideoDetails;