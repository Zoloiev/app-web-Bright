import { Tab } from '@headlessui/react';
import CategorySvg from './Svg/CategorySvg';
import PaperSvg from './Svg/PaperSvg';

const TabListsButtons = () => {
  return (
    <Tab.List className="mb-[25px] flex items-center justify-between">
      <h4 className="text-bu-secondaryoutline-none mr-8 text-xl font-bold">
        Today
      </h4>
      <div>
        <Tab id="category-button" className="mr-4 text-[#959595]">
          <CategorySvg />
        </Tab>
        <Tab id="paper-button" className="text-[#959595]">
          <PaperSvg />
        </Tab>
      </div>
    </Tab.List>
  );
};

export default TabListsButtons;
