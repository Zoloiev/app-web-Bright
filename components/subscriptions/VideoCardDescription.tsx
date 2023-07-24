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
  description?: string;
}

const VideoCardDescription: React.FC<VideoSubscriptionProps> = ({
  imageUrl,
  title,
  name,
  avatarUrl,
  views,
  time,
  close,
  description,
}) => {
  return (
    <div className="relative mb-7 flex cursor-pointer flex-col gap-2 sm:flex-row">
      <picture className="relative sm:h-40 sm:w-2/3 lg:h-48 lg:w-96">
        <Image
          src={imageUrl}
          width={242}
          height={156}
          alt="preview"
          className="w-full rounded-2xl object-cover"
        />
        <p className="absolute bottom-3 left-4 rounded-md bg-black px-[6px] py-[2px] text-xs text-white sm:bottom-0 md:bottom-3 lg:bottom-9 xl:bottom-3">
          {time}
        </p>
      </picture>
      <div className="w-full">
        <h4 className="text-xl font-semibold text-black">{title}</h4>
        {description && (
          <p className="my-3 text-sm text-gray-700 opacity-50">{description}</p>
        )}

        <div className="mt-5 flex items-center">
          <Image src={avatarUrl} width={24} height={24} alt="avatar" />
          <span className="ml-2 text-xs text-bu-darkgrey">
            {name} | {convertViews(views)} views
          </span>
        </div>
      </div>
      {close && (
        <button className="absolute right-0 -top-6 sm:top-0">
          <CrossSvg />
        </button>
      )}
    </div>
  );
};

export default VideoCardDescription;
