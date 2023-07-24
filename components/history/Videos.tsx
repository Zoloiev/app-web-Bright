import { Tab } from '@headlessui/react';
import TabListsButtons from '../TabListsButtons';
import FormSearch from '../FormSearch';
import { videos } from '@/utils/videos';
import VideoSubscription from '../subscriptions/VideoSubscription';
import VideoCardDescription from '../subscriptions/VideoCardDescription';

const Videos = () => {
  return (
    <Tab.Panel>
      <Tab.Group defaultIndex={0}>
        <TabListsButtons />
        <Tab.Panels>
          <Tab.Panel>
            <FormSearch />
            <div className="mt-10 grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {videos.map((video) => (
                <VideoSubscription
                  close={true}
                  key={video.id}
                  imageUrl={video.imageUrl}
                  title={video.title}
                  avatarUrl={video.avatarUrl}
                  name={video.name}
                  views={video.views}
                  time={video.time}
                />
              ))}
            </div>
          </Tab.Panel>{' '}
          <Tab.Panel>
            <FormSearch />
            <div className="mt-10 grid grid-cols-1">
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
                  close={true}
                />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Tab.Panel>
  );
};

export default Videos;
