import Image from "next/image";
import LikeIcon from "@/public/src/svgs/like.svg";
import DislikeIcon from "@/public/src/svgs/dislike.svg";
import CommentsIcon from "@/public/src/svgs/comments.svg";
import ShareIcon from "@/public/src/svgs/share.svg";
import { convertViews } from "@/utils/utils";
import clsx from "clsx";

export interface ShortsCardProps {
  thumbnailUrl: string;
  title: string;
  avatarUrl: string;
  user: string;
  likes: number;
  dislikes: number;
  comments: number;
  onLeftClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRightClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  openModal?: () => void;
}

const ShortsDetailCard: React.FC<ShortsCardProps> = ({
  thumbnailUrl,
  title,
  avatarUrl,
  user,
  likes,
  dislikes,
  comments,
  onLeftClick,
  onRightClick,
  openModal = () => {}
}) => {
  return (
    <div className="flex h-full items-center">
      <div className="flex flex-none items-center">
        <Arrow
          left
          onClick={(e) => {
            onLeftClick ? onLeftClick(e) : null;
          }}
        />
      </div>
      <div className="flex grow flex-col">
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt={title}
            className="max-h-[75vh] max-w-full rounded-2xl"
          />
          <div className="absolute bottom-1 left-1 flex items-center md:hidden">
            <Image src={avatarUrl} width={38} height={38} alt="avatar" />
            <span className="ml-2 font-medium text-white">{user}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 hidden flex-col gap-5 rounded-2xl bg-black/50 p-4 md:flex">
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[18px] font-medium text-white">
              {title}
            </div>
            <div className="hidden justify-between md:flex">
              <div className="flex items-center">
                <Image src={avatarUrl} width={38} height={38} alt="avatar" />
                <span className="ml-2 font-medium text-white">{user}</span>
              </div>
              <button className="h-9 rounded-2xl bg-bu-purple p-2 font-medium text-white" onClick={openModal}>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-none items-center justify-around md:mt-6">
          <button className="flex flex-col items-center gap-1 md:flex-row">
            <Image src={LikeIcon} alt="like" width={28} height={28} />
            <span className="hidden md:inline">{convertViews(likes)}</span>
          </button>
          <button className="flex flex-col items-center gap-1 md:flex-row">
            <Image src={DislikeIcon} alt="dislike" width={28} height={28} />
            <span className="hidden md:inline">{convertViews(dislikes)}</span>
          </button>
          <button className="flex flex-col items-center gap-1 md:flex-row">
            <Image src={CommentsIcon} alt="comments" width={28} height={28} />
            <span className="hidden md:inline">{convertViews(comments)}</span>
          </button>
          <button className="hidden w-8 flex-col items-center md:flex md:flex-row">
            <Image src={ShareIcon} alt="share" width={28} height={28} />
          </button>
        </div>
      </div>
      <div className="flex flex-none items-center">
        <Arrow
          onClick={(e) => {
            onRightClick ? onRightClick(e) : null;
          }}
        />
      </div>
    </div>
  );
};

function Arrow(props: {
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "mx-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-bu-purple md:mx-3 md:h-8 md:w-8"
      )}
    >
      <svg
        className={clsx("h-3 w-3 fill-white md:h-[18px] md:w-[18px]")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  );
}

export default ShortsDetailCard;
