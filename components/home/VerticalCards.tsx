import { convertViews } from "@/utils/utils";
import Image from "next/image";

export interface CardInterface {
  imageUrl: string;
  title: string;
  name: string;
  views: number;
}

interface VerticalCardsProps {
  title: string;
  cards: CardInterface[];
}

const VerticalCards: React.FC<VerticalCardsProps> = ({ title, cards }) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold">{title}</span>
      <div className="mt-6 flex flex-col gap-5">
        {cards.map((card, i) => (
          <div key={i} className="flex gap-4">
            <Image src={card.imageUrl} width={78} height={93} alt="thumbnail" />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#4E4C54]">
                  {card.title}
                </span>
                <span className="text-xs text-[#4E4C54]">{card.name}</span>
              </div>
              <span className="text-xs text-[#1C1C1E] opacity-40">
                {convertViews(card.views)} views
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 h-10 rounded-[32px] bg-bu-purple text-sm text-white">
        See more
      </button>
    </div>
  );
};

export default VerticalCards;
