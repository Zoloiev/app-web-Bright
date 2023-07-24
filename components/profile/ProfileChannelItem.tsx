interface ChannelItemProps {
  avatarUrl: string,
  name: string,
  views: string,
  subscribed: boolean
}

const ProfileChannelItem: React.FC<ChannelItemProps> = ({ avatarUrl, name, views, subscribed }) => {
  return (
    <div className="rounded-[19px] border-[1px] border-solid border-[#ECE9EC] bg-[#FFFDFD] flex flex-col items-center justify-center py-4 mb-4">
      <img src={avatarUrl} className="w-[50px] h-[50px] rounded-full" alt="avatar" />
      {
        subscribed ?
          <div className="rounded-[32px] bg-[#959595] w-[86px] h-[28px] text-[11px] font-bold my-[9px] text-white flex justify-center items-center">
            Subscribed
          </div> :
          <div className="rounded-[32px] bg-[#C400C4] w-[86px] h-[28px] text-[11px] font-bold my-[9px] text-white flex justify-center items-center cursor-pointer">
            Subscribe
          </div>
      }
      <div className="flex items-center justify-between">
        <div className="text-[13px] font-semibold text-[#263238]">Emily Ups</div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-1">
          <circle cx="7" cy="7" r="7" fill="#C400C4" />
          <path d="M10.9142 4.20575C10.8599 4.15108 10.7954 4.10768 10.7243 4.07807C10.6533 4.04845 10.577 4.0332 10.5 4.0332C10.423 4.0332 10.3468 4.04845 10.2757 4.07807C10.2046 4.10768 10.1401 4.15108 10.0858 4.20575L5.74001 8.55742L3.91417 6.72575C3.85787 6.67136 3.7914 6.6286 3.71857 6.59989C3.64574 6.57119 3.56797 6.55712 3.48969 6.55847C3.41142 6.55982 3.33418 6.57658 3.26239 6.60779C3.19059 6.63899 3.12565 6.68403 3.07126 6.74034C3.01687 6.79664 2.9741 6.86311 2.9454 6.93594C2.9167 7.00877 2.90262 7.08654 2.90397 7.16481C2.90533 7.24309 2.92209 7.32033 2.95329 7.39212C2.9845 7.46392 3.02954 7.52886 3.08584 7.58325L5.32584 9.82325C5.38007 9.87793 5.44459 9.92132 5.51567 9.95094C5.58675 9.98055 5.663 9.9958 5.74001 9.9958C5.81701 9.9958 5.89326 9.98055 5.96434 9.95094C6.03543 9.92132 6.09994 9.87793 6.15417 9.82325L10.9142 5.06325C10.9734 5.00863 11.0206 4.94233 11.053 4.86854C11.0853 4.79475 11.102 4.71506 11.102 4.6345C11.102 4.55394 11.0853 4.47426 11.053 4.40047C11.0206 4.32667 10.9734 4.26038 10.9142 4.20575Z" fill="white" />
        </svg>
      </div>
      <div className="flex items-center my-[6px] justify-between">
        <div className="font-bold text-[13px] text-[#263238]">{views}</div>
        <div className="font-normal text-[13px] text-[#959595] mx-[2px]">Subscriber</div>
      </div>
    </div>
  )
}

export default ProfileChannelItem;