import { DefaultLayout } from '@/layouts';
import { Tab } from '@headlessui/react';
import Videos from '@/components/history/Videos';
import HistoryTabList from '@/components/history/HistoryTabList';
import Shorts from '@/components/history/Shorts';

export interface IndexProps {}

const Subscription: React.FC<IndexProps> = () => {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <Tab.Group defaultIndex={0}>
            <HistoryTabList />
            <Tab.Panels>
              <Videos />
              <Shorts />
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Subscription;
