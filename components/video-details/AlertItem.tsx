interface AlertItemProps {
  imgUrl: string,
  title: string,
  avatarUrl: string,
  name: string,
  length: string
}

const AlertItem:React.FC<AlertItemProps> = ({ imgUrl, avatarUrl, title, name, length }) => {
  return (
    <div className="mb-[16px] flex cursor-pointer">
      <div className="hidden xl:block relative">
        <img src={imgUrl} alt="placeholder" className="rounded-[9px] w-[92px] h-[74px]"/>
        <div className="absolute bg-black rounded-[4px] left-[6px] top-[55px] text-[7px] font-normal text-white px-[4px] py-[2px]">{length}</div>
      </div>
      <div className="ml-[12px] flex-1 flex flex-col justify-between">
        <div className="text-[14px] text-black font-light">{title}</div>
        <div className="flex items-center mt-[12px]">
          <img src={avatarUrl} alt="avatar" className="rounded-full w-[24px] h-[24px]"/>
          <div className="ml-[12px] text-[#959595] text-[14px] font-normal">{name}</div>
        </div>
      </div>
    </div>
  )
}

export default AlertItem;