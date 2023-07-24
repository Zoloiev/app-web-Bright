import { DefaultLayout } from "@/layouts";
import { Tab } from "@headlessui/react";
import ProfileAbout from '@/components/profile/ProfileAbout';
import ProfileChannel from '@/components/profile/ProfileChannel';
import ProfileDiscussion from '@/components/profile/ProfileDiscussion';
import ProfileDonate from '@/components/profile/ProfileDonate';
import ProfilePlayList from '@/components/profile/ProfilePlayList';
import ProfileVideo from '@/components/profile/ProfileVideo';

export default function Profile() {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex w-full flex-1 flex-col">
        <div className="bg-[#F3DEE1]">
          <img src="/src/placeholders/profile.png" className="w-[500px] h-[260px]" alt="profile"/>
        </div>
        <div className="md:flex items-center justify-between px-[42px] my-2">
          <div className="flex items-center justify-between md:justify-start">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full border-[5px] border-solid border-white w-[98px] h-[98px] mt-[-21px]"
              alt="avatar"
            />
            <div className="mx-[15px]">
              <div className="flex items-center">
                <span className="font-bold text-[22px] mr-[15px]">Jessica Adeline</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#C400C4" />
                  <path d="M15.5917 6.00822C15.5142 5.93011 15.4221 5.86811 15.3205 5.82581C15.219 5.7835 15.11 5.76172 15 5.76172C14.89 5.76172 14.7811 5.7835 14.6796 5.82581C14.578 5.86811 14.4858 5.93011 14.4084 6.00822L8.20004 12.2249L5.59171 9.60822C5.51127 9.53052 5.41632 9.46942 5.31227 9.42842C5.20823 9.38742 5.09713 9.36731 4.98531 9.36924C4.87349 9.37118 4.76315 9.39512 4.66058 9.43969C4.55802 9.48427 4.46524 9.54862 4.38754 9.62905C4.30984 9.70949 4.24875 9.80444 4.20774 9.90848C4.16674 10.0125 4.14663 10.1236 4.14856 10.2354C4.1505 10.3473 4.17444 10.4576 4.21902 10.5602C4.2636 10.6627 4.32794 10.7555 4.40837 10.8332L7.60837 14.0332C7.68584 14.1113 7.77801 14.1733 7.87956 14.2156C7.98111 14.2579 8.09003 14.2797 8.20004 14.2797C8.31005 14.2797 8.41897 14.2579 8.52052 14.2156C8.62207 14.1733 8.71424 14.1113 8.79171 14.0332L15.5917 7.23322C15.6763 7.15518 15.7438 7.06047 15.79 6.95506C15.8361 6.84964 15.86 6.7358 15.86 6.62072C15.86 6.50563 15.8361 6.39179 15.79 6.28638C15.7438 6.18096 15.6763 6.08625 15.5917 6.00822Z" fill="white" />
                </svg>
              </div>
              <span className="font-normal text-[14px]">@jessica_adeline</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 sm:mt-0">
            <div className="xl:mx-[45px] lg:mx-[30px] mx-[15px]">
              <div className="font-semibold text-[18px]">1.42M</div>
              <div className="font-normal text-[13px] text-[#959595]">Subscriber</div>
            </div>
            <div className="xl:mx-[45px] lg:mx-[30px] mx-[15px]">
              <div className="font-semibold text-[18px]">5</div>
              <div className="font-normal text-[13px] text-[#959595]">Playlist</div>
            </div>
            <div className="xl:mx-[45px] lg:mx-[30px] mx-[15px]">
              <div className="font-semibold text-[18px]">123</div>
              <div className="font-normal text-[13px] text-[#959595]">Videos</div>
            </div>
          </div>
          <div>
            <button className='h-10 w-[130px] rounded-[32px] flex items-center justify-center text-white font-semibold hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 px-2 bg-bu-purple mt-2 md:mt-0'>
              Subscribe
            </button>
          </div>
        </div>
        <div className="my-6 px-[42px]">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="h-13 flex items-center gap-11 overflow-auto border-b border-bu-borderColor px-3 md:px-6 thin-scroll">
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Videos
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Playlist
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Channel
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Discussion
              </Tab>
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
                Donate
              </Tab>
            </Tab.List>
            <Tab.Panels className="flex-1">
              <Tab.Panel>
                <ProfileVideo />
              </Tab.Panel>
              <Tab.Panel>
                <ProfilePlayList />
              </Tab.Panel>
              <Tab.Panel>
                <ProfileChannel />
              </Tab.Panel>
              <Tab.Panel>
                <ProfileDiscussion />
              </Tab.Panel>
              <Tab.Panel>
                <ProfileAbout />
              </Tab.Panel>
              <Tab.Panel>
                <ProfileDonate />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </DefaultLayout>
  );
}
