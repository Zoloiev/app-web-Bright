import ProfileChannelItem from './ProfileChannelItem';
import { channelItemList } from './channelItemList';

const ProfileChannel = () => {
  return (
    <div className='mt-[20px]'>
      <div className='mb-[15px] flex items-center justify-between'>
        <div className='text-[#3D3D3D] font-medium text-[14px]'>Subscriptions</div>
        <div className='cursor-pointer text-[13px] font-medium text-[#C400C4]'>View More</div>
      </div>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          channelItemList.map((itm, index) => {
            return (
              <ProfileChannelItem {...itm} key={"itm" + index}></ProfileChannelItem>
            )
          })
        }
      </div>
      <div className='mb-[15px] flex items-center justify-between'>
        <div className='text-[#3D3D3D] font-medium text-[14px]'>Featured Channels</div>
        <div className='cursor-pointer text-[13px] font-medium text-[#C400C4]'>View More</div>
      </div>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          channelItemList.map((itm, index) => {
            return (
              <ProfileChannelItem {...itm} key={"itm" + index}></ProfileChannelItem>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProfileChannel;