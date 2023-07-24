import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import clsx from "clsx";
import Image from "next/image";
import { KeenSliderResizePlugin } from "@/utils/utils";

export default function TrendingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(instance) {
        setLoaded(true);
      },
    },
    [KeenSliderResizePlugin]
  );

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider max-h-[350px] rounded-2xl">
          {new Array(3).fill(null).map((el, i) => (
            <div key={i} className="keen-slider__slide relative">
              <Image
                src="/src/placeholders/trending1.png"
                width={764}
                height={357}
                alt="trending"
                className="w-full"
              />
              <div className="absolute bottom-3 left-3 flex gap-3 md:bottom-6 md:left-9">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile photo"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    Helen_Streamer
                  </span>
                  <span className="text-xs text-white opacity-40">
                    243,000 subscribles
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full md:h-12 md:w-12",
        props.left ? "left-2" : "right-2",
        props.disabled ? "bg-[#616e72]" : "bg-[#4A5458]"
      )}
    >
      <svg
        className={clsx(
          "h-[18px] w-[18px]",
          props.disabled ? " fill-[#ffffff80]" : "fill-white"
        )}
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
