import { convertViews } from '@/utils/utils';
import Image from 'next/image';
import CrossSvg from '../Svg/CrossSvg';

interface VideoSubscriptionProps {
  imageUrl: string;
  title: string;
  name: string;
  avatarUrl: string;
  views: number;
  time: string | React.ReactNode;
  close?: boolean;
}

const VideoSubscription: React.FC<VideoSubscriptionProps> = ({
  imageUrl,
  title,
  name,
  avatarUrl,
  views,
  time,
  close,
}) => {
  return (
    <div className="relative mb-7 flex cursor-pointer flex-col gap-2">
      <picture className="relative">
        <Image
          src={imageUrl}
          width={242}
          height={156}
          alt="preview"
          className="w-full rounded-2xl object-cover"
        />
        <p className="absolute bottom-3 left-4 rounded-md bg-black px-[6px] py-[2px] text-xs text-white">
          {time}
        </p>
      </picture>
      <span className="text-sm font-semibold text-black">{title}</span>
      <div className="flex items-center">
        <Image src={avatarUrl} width={24} height={24} alt="avatar" />
        <span className="ml-2 text-xs text-bu-darkgrey">
          {name} | {convertViews(views)} views
        </span>
      </div>
      {close && (
        <button className="absolute top-3 right-3">
          <CrossSvg />
        </button>
      )}
    </div>
  );
};

export default VideoSubscription;
