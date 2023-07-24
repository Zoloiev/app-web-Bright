import { convertViews } from "@/utils/utils";
import Image from "next/image";

interface VideoCardProps {
  imageUrl: string;
  title: string;
  name: string;
  avatarUrl: string;
  views: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  imageUrl,
  title,
  name,
  avatarUrl,
  views,
}) => {
  return (
    <div className="keen-slider__slide flex cursor-pointer flex-col gap-2">
      <Image
        src={imageUrl}
        width={242}
        height={156}
        alt="preview"
        className="w-full"
      />
      <span className="text-sm font-semibold text-black">{title}</span>
      <div className="flex items-center">
        <Image src={avatarUrl} width={24} height={24} alt="avatar" />
        <span className="ml-2 text-xs text-bu-darkgrey">
          {name} | {convertViews(views)} views
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
