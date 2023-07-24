import { DefaultLayout } from "@/layouts";
import React from "react";

export interface ClosedProps {}
const ClosedPage: React.FC<ClosedProps> = ({}) => {
  return (
    <DefaultLayout sidebarVariant="closed">
      <div className="mx-4 my-2 flex w-full items-center justify-center rounded-3xl bg-gray-100 text-4xl font-bold text-gray-800">
        Placeholder
      </div>
    </DefaultLayout>
  );
};

export default ClosedPage;
