import { DefaultLayout } from '@/layouts';
import WatchLaterContent from '@/components/watchlater/WatchLaterContent';

export interface IndexProps {}

const WatchLater: React.FC<IndexProps> = () => {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <WatchLaterContent />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default WatchLater;