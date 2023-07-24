import Image from "next/image";
import LikeIcon from "@/public/src/svgs/like.svg";
import DislikeIcon from "@/public/src/svgs/dislike.svg";
import CommentsIcon from "@/public/src/svgs/comments.svg";
import ShareIcon from "@/public/src/svgs/share.svg";
import { convertViews } from "@/utils/utils";
import clsx from "clsx";

export interface ShortsPreviewCardProps {
  isLeft: boolean;
  thumbnailUrl: string;
  avatarUrl: string;
  user: string;
}

const ShortsPreviewCard: React.FC<ShortsPreviewCardProps> = ({
  isLeft,
  thumbnailUrl,
  avatarUrl,
  user,
}) => {
  return (
    <div
      className={clsx(
        "relative flex rounded-2xl",
        isLeft ? "justify-end" : "justify-start"
      )}
    >
      <Image
        src={thumbnailUrl}
        alt="short"
        width={558}
        height={706}
        className="filter-50 w-1/2 rounded-2xl"
      />
      <div
        className={clsx(
          "absolute top-1/2 -translate-y-2/4",
          isLeft ? "right-1/4 translate-x-2/4" : "left-1/4 -translate-x-2/4"
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <Image
            src={avatarUrl}
            width={80}
            height={80}
            alt="avatar"
            className="h-10 w-10 md:h-20 md:w-20"
          />
          <span className="mt-2 text-center text-xl font-medium text-white md:text-2xl">
            {user}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShortsPreviewCard;
