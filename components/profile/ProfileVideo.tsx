import { videoItemList } from './videoItemList';
import ProfileVideoItem from './ProfileVideoItem';


const ProfileVideo = () => {
  return (
    <div className="mt-[38px] grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videoItemList.map((video, index) => (
        <ProfileVideoItem
          {...video}
          key={"itm" + index}
        />
      ))}
    </div>
  )
}

export default ProfileVideo;