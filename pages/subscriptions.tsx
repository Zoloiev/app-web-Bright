import { DefaultLayout } from '@/layouts';
import { Tab } from '@headlessui/react';
import VideoSubscription from '@/components/subscriptions/VideoSubscription';
import VideoCardDescription from '@/components/subscriptions/VideoCardDescription';
import TabListsButtons from '@/components/TabListsButtons';
import { videos } from '@/utils/videos';

export interface IndexProps {}

const Subscription: React.FC<IndexProps> = () => {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <Tab.Group defaultIndex={0}>
            <TabListsButtons />
            <Tab.Panels>
              <Tab.Panel className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {videos.map((video) => (
                  <VideoSubscription
                    key={video.id}
                    imageUrl={video.imageUrl}
                    title={video.title}
                    avatarUrl={video.avatarUrl}
                    name={video.name}
                    views={video.views}
                    time={video.time}
                  />
                ))}
              </Tab.Panel>
              <Tab.Panel className="grid grid-cols-1">
                {videos.map((video) => (
                  <VideoCardDescription
                    key={video.id}
                    imageUrl={video.imageUrl}
                    title={video.title}
                    avatarUrl={video.avatarUrl}
                    name={video.name}
                    views={video.views}
                    time={video.time}
                    description={video.description}
                  />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Subscription;
