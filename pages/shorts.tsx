import { DefaultLayout } from "@/layouts";
import { KeenSliderResizePlugin } from "@/utils/utils";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import ShortsDetailCard, {
  ShortsCardProps,
} from "@/components/shorts/ShortsDetailCard";
import ShortsPreviewCard from "@/components/shorts/ShortsPreviewCard";
import ShortsModal from "@/components/shorts/ShortsModal";
import { useWindowSize } from "@/hooks/useWindowSize";

const shorts: ShortsCardProps[] = [
  {
    thumbnailUrl: "/src/placeholders/shorts.png",
    title: "Makeup mistakes that age you and how to correct them ",
    avatarUrl: "/src/placeholders/avatar1.png",
    user: "Nancy",
    likes: 1700,
    dislikes: 632,
    comments: 632,
  },
  {
    thumbnailUrl: "/src/placeholders/shorts2.jpg",
    title: "Makeup mistakes that age you and how to correct them ",
    avatarUrl: "/src/placeholders/avatar4.png",
    user: "Zozo",
    likes: 1700,
    dislikes: 632,
    comments: 632,
  },
  {
    thumbnailUrl: "/src/placeholders/shorts3.jpg",
    title: "Makeup mistakes that age you and how to correct them ",
    avatarUrl: "/src/placeholders/avatar5.png",
    user: "Zozo",
    likes: 1700,
    dislikes: 632,
    comments: 632,
  },
  {
    thumbnailUrl: "/src/placeholders/shorts3.jpg",
    title: "Makeup mistakes that age you and how to correct them ",
    avatarUrl: "/src/placeholders/avatar5.png",
    user: "Alice",
    likes: 1700,
    dislikes: 632,
    comments: 632,
  },
];

export default function Shorts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();

  const isLargeSize = windowSize.width && windowSize.width > 1200

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: isLargeSize ? 2 : 1, origin: "center", spacing: 15 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [KeenSliderResizePlugin]
  );

  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between overflow-auto">
        <div className="flex w-full items-center px-4">
          <div ref={sliderRef} className="keen-slider h-[90%]">
            {shorts.map((shortData, i) => {
              const isLeftPreview =
                currentSlide !== i &&
                !(currentSlide === shorts.length - 1 && i === 0) &&
                (i < currentSlide ||
                  (i === shorts.length - 1 && currentSlide === 0));

              return currentSlide === i ? (
                <div className="keen-slider__slide flex items-center justify-center" key={"itm" + i}>
                  <ShortsDetailCard
                    {...shortData}
                    onLeftClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      instanceRef.current?.prev();
                    }}
                    onRightClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      instanceRef.current?.next();
                    }}
                    openModal={() => setIsOpen(true)}
                  />
                  <ShortsModal closeModal={() => setIsOpen(false)} isOpen={isOpen}></ShortsModal>
                </div>
              ) : (
                <div
                  className={clsx(
                    "keen-slider__slide flex items-center",
                    isLeftPreview ? "justify-end" : "justify-start"
                  )}
                  key={"itm" + i}
                >
                  <ShortsPreviewCard {...shortData} isLeft={isLeftPreview} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
