interface ProfileDiscussiomItemProps {
  isInside: boolean,
  content: string,
  lastViewed: string,
  name: string,
  avatarUrl: string
}

const ProfileDiscussionItem: React.FC<ProfileDiscussiomItemProps> = ({ isInside, content, lastViewed, name, avatarUrl }) => {
  return (
    <div className="my-6">
      <div className="flex items-center">
        {isInside && <div className="w-[36px] h-0 border-t-[1px] border-solid border-[#ECE9EC] rotate-90 mt-[-24px]"></div>}
        <img src={avatarUrl} className="rounded-full w-[50px] h-[50px] mr-[20px]" alt="avatar" />
        <div className="w-0 flex-1">
          <div className="text-[#263238] text-[14px] font-semibold">{content}</div>
          <div className="flex items-center">
            <div className="text-[#C400C4] text-[13px] font-medium">{name}</div>
            <div className="text-[#B8B5C6] text-[13px] font-medium mx-2 mt-[5px]">{lastViewed}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDiscussionItem;