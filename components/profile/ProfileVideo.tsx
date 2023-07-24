import ProfileVideoItem from './ProfileVideoItem';
import { useProfileVideo } from '@/api/get/Profile';


const ProfileVideo = () => {
  const { data } = useProfileVideo();
  return (
    <div className="mt-[38px] grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.videos?.map((video, index) => (
        <ProfileVideoItem
          imgUrl={video.url}
          title={video.title}
          name=""
          views={video.views}
          avatarUrl=""
          hasLength={false}
          length=""
          key={"itm" + index}
        />
      ))}
    </div>
  );
};

export default ProfileVideo;