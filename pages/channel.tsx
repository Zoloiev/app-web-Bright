import { DefaultLayout } from '@/layouts';
import ProfileChannelItem from '@/components/profile/ProfileChannelItem';
import { channelItemList } from '@/components/profile/channelItemList';
import Pagination from '@/components/pagination';
// import { videoItemList } from '@/components/profile/videoItemList';
import ProfileVideoItem from '@/components/profile/ProfileVideoItem';
import { useProfileVideo } from '@/api/get/Profile';

export interface IndexProps { }

const Channel: React.FC<IndexProps> = () => {
  const { data } = useProfileVideo();
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <div className='py-6'>
            <div className='text-[20px] text-[#3D3D3D] font-bold mb-6'>Channels</div>
            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                channelItemList.map((itm, index) => {
                  return (
                    <ProfileChannelItem {...itm} key={"itm" + index}></ProfileChannelItem>
                  )
                })
              }
            </div>
            <div className='mt-8 flex items-center'>
              <Pagination curPage={1} totalPage={3} isLeft={false}/>
            </div>
          </div>
          <div className='py-6'>
            <div className='text-[20px] text-[#3D3D3D] font-bold mb-6'>Featured Videos</div>
            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                data?.videos?.map((itm, index) => {
                  return (
                    <ProfileVideoItem 
                    imgUrl={itm.url}
                    title={itm.title}
                    name=""
                    views={itm.views}
                    avatarUrl=""
                    hasLength={false}
                    length=""
                    key={"itm" + index}></ProfileVideoItem>
                  )
                })
              }
            </div>
            <div className='mt-8 flex items-center'>
              <Pagination curPage={1} totalPage={3} isLeft={false}/>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Channel;