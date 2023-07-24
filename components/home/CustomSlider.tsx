import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import clsx from "clsx";
import { KeenSliderResizePlugin } from "@/utils/utils";

interface CustomSliderProps {
  title: string;
  children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ title, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 1,
      },
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1500px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [KeenSliderResizePlugin]
  );

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <span className="h-[30px] text-xl font-bold text-bu-secondary">
          {title}
        </span>
        {loaded && instanceRef.current && (
          <div className="flex">
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
                instanceRef.current.track.details.maxIdx ===
                instanceRef.current.track.details.abs
              }
            />
          </div>
        )}
      </div>
      <div>
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
      </div>
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-bu-borderColor"
      )}
    >
      <svg
        className={clsx(
          "h-[8px] w-[8px] fill-black",
          props.disabled ? "opacity-50" : ""
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

export default CustomSlider;
