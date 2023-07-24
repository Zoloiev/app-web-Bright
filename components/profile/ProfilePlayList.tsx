import { videoItemList } from './videoItemList';
import ProfilePlayListItem from './ProfilePlayListItem';


const ProfilePlayList = () => {
  return (
    <div className="mt-[38px] grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videoItemList.map((video, index) => (
        <ProfilePlayListItem
          {...video}
          key={"itm" + index}
        />
      ))}
    </div>
  )
}

export default ProfilePlayList;