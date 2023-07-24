import Trending from "@/components/home/Trending";
import { DefaultLayout } from "@/layouts";
import { Tab } from "@headlessui/react";
import VerticalCards, { CardInterface } from "@/components/home/VerticalCards";

export interface IndexProps {}

const recommendations: CardInterface[] = [
  {
    imageUrl: "/src/placeholders/recommendation1.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
  {
    imageUrl: "/src/placeholders/recommendation2.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
  {
    imageUrl: "/src/placeholders/recommendation3.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
];

const favorites: CardInterface[] = [
  {
    imageUrl: "/src/placeholders/favorites1.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
  {
    imageUrl: "/src/placeholders/favorites2.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
  {
    imageUrl: "/src/placeholders/favorites3.png",
    title: "Summertime",
    name: "Tifani Bringt",
    views: 24300,
  },
];

const IndexPage: React.FC<IndexProps> = ({}) => {
  return (
    <DefaultLayout sidebarVariant="open">
      <div className="flex flex-1 justify-between">
        <div className="w-0 flex-1 px-4 pb-4">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="mb-[25px]">
              <Tab className="mr-8 text-xl font-medium text-bu-lightGrey2 outline-none ui-selected:font-bold ui-selected:text-bu-secondary">
                Trending
              </Tab>
              <Tab className="mr-8 text-xl font-medium text-bu-lightGrey2 outline-none ui-selected:font-bold ui-selected:text-bu-secondary">
                News
              </Tab>
              <Tab className="mr-8 text-xl font-medium text-bu-lightGrey2 outline-none ui-selected:font-bold ui-selected:text-bu-secondary">
                Prom
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Trending />
              </Tab.Panel>
              <Tab.Panel></Tab.Panel>
              <Tab.Panel></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="hidden w-80 border-l border-bu-borderColor px-12 lg:block">
          <VerticalCards title="Recommendation" cards={recommendations} />
          <div className="mt-[30px]">
            <VerticalCards title="Favorites" cards={favorites} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
