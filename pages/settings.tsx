import AccountSettings from "@/components/settings/AccountSettings";
import AdvancedSettings from "@/components/settings/AdvancedSettings";
import DownloadsSettings from "@/components/settings/DownloadsSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import PaymentsSettings from "@/components/settings/PaymentsSettings";
import PerformanceSettings from "@/components/settings/PerformanceSettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import { DefaultLayout } from "@/layouts";
import { Tab } from "@headlessui/react";

export default function Settings() {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="w-full flex-1 overflow-hidden flex flex-col">
        <div>
          <Tab.Group defaultIndex={0}>
            <Tab.List className="h-13 flex items-center gap-11 overflow-auto border-b border-bu-borderColor px-3 md:px-6 thin-scroll">
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Account
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Notifications
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Performance
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Downloads
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Privacy
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Payments
              </Tab>
              <Tab
                className="pb-3 text-[15px] font-medium leading-[18px] text-bu-lightGrey outline-none
                  ui-selected:border-0 lg:ui-selected:border-b-[3px] ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-darkGrey2"
              >
                Advanced
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-7 flex-1 overflow-auto">
              <Tab.Panel>
                <AccountSettings />
              </Tab.Panel>
              <Tab.Panel>
                <NotificationSettings />
              </Tab.Panel>
              <Tab.Panel>
                <PerformanceSettings />
              </Tab.Panel>
              <Tab.Panel>
                <DownloadsSettings />
              </Tab.Panel>
              <Tab.Panel>
                <PrivacySettings />
              </Tab.Panel>
              <Tab.Panel>
                <PaymentsSettings />
              </Tab.Panel>
              <Tab.Panel>
                <AdvancedSettings />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </DefaultLayout>
  );
}
