import 'keen-slider/keen-slider.min.css';
import TrendingCarousel from './TrendingCarousel';
import CustomSlider from './CustomSlider';
import VideoCard from './VideoCard';
import Image from 'next/image';

export default function Trending() {
  return (
    <>
      <TrendingCarousel />
      <CustomSlider title="Latest">
        <VideoCard
          imageUrl="/src/placeholders/placeholder1.png"
          title="My Go-To Eyeshadow Look"
          avatarUrl="/src/placeholders/avatar1.png"
          name="Tifani Bringt"
          views={1300000}
        />
        <VideoCard
          imageUrl="/src/placeholders/placeholder2.png"
          title="Soft Glitter Makeup for Wedding"
          avatarUrl="/src/placeholders/avatar2.png"
          name="Ann Walker"
          views={24300}
        />
        <VideoCard
          imageUrl="/src/placeholders/placeholder3.png"
          title="Natural Glam Makeup Tutorial"
          avatarUrl="/src/placeholders/avatar3.png"
          name="Jean Watts"
          views={19345}
        />
        <VideoCard
          imageUrl="/src/placeholders/placeholder1.png"
          title="My Go-To Eyeshadow Look"
          avatarUrl="/src/placeholders/avatar1.png"
          name="Tifani Bringt"
          views={1300000}
        />
        <VideoCard
          imageUrl="/src/placeholders/placeholder2.png"
          title="Soft Glitter Makeup for Wedding"
          avatarUrl="/src/placeholders/avatar2.png"
          name="Ann Walker"
          views={24300}
        />
        <VideoCard
          imageUrl="/src/placeholders/placeholder3.png"
          title="Natural Glam Makeup Tutorial"
          avatarUrl="/src/placeholders/avatar3.png"
          name="Jean Watts"
          views={19345}
        />
      </CustomSlider>
      <CustomSlider title="Popular">
        {new Array(8).fill(null).map((el, i) => (
          <div key={i} className="keen-slider__slide cursor-pointer mb-4">
            <Image
              src="/src/placeholders/placeholder3.png"
              width={167}
              height={237}
              alt=""
              className='w-full h-auto'
            />
          </div>
        ))}
      </CustomSlider>
    </>
  );
}
