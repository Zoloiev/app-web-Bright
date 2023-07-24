interface WatchItemProps {
  imgUrl: string,
  title: string,
  name: string,
  views: string,
  avatarUrl: string,
  hasLength?: boolean,
  length?: string,
}

const ProfileVideoItem: React.FC<WatchItemProps> = ({ title, name, avatarUrl, imgUrl, views, hasLength = false, length }) => {
  return (
    <div className="mb-4 relative">
      <img src={imgUrl} className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-60" alt="background"/>
      <div className="my-[8px] font-semibold text-[14px] text-black">
        {title}
      </div>
      <div className="flex items-center">
        <img src={avatarUrl} className="w-[24px] h-[24px] rounded-full mr-2" alt="avatar"/>
        <div className="font-normal text-[12px] text-[#959595]">
          {name}  |  {views}
        </div>
      </div>
      {
        hasLength && <div className="absolute left-[12px] bottom-[70px] flex w-[38px] h-[17px] justify-center items-center bg-black rounded-[5px]">
          <div className="text-[12px] font-normal text-white">{length}</div>
        </div>
      }
    </div>
  )
}

export default ProfileVideoItem;