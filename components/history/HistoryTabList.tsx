import { Tab } from '@headlessui/react';

const HistoryTabList = () => {
  return (
    <Tab.List className="mb-[25px] border-b">
      <Tab className="mr-8 px-2 text-xl text-bu-darkgrey outline-none ui-selected:border-b-4 ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-purple">
        Videos
      </Tab>
      <Tab className="mr-8 px-2 text-xl text-bu-darkgrey outline-none ui-selected:border-b-4 ui-selected:border-bu-purple ui-selected:font-bold ui-selected:text-bu-purple">
        Shorts
      </Tab>
    </Tab.List>
  );
};

export default HistoryTabList;
