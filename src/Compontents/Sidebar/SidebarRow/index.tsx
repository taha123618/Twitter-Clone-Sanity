import React, { SVGProps } from "react";
import { NextPage } from "next";

// passing Props in TypeScript in that Way
interface Props {
  Icon: (props: SVGProps<SVGAElement>) => JSX.Element;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div
      className="flex max-w-fit items-center cursor-pointer 
    space-x-2 rounded-full px-4 py-3 
    transition-all duration-200 hover:bg-gray-100 group  "
    >
      <Icon className="h-6 w-6" />
      <p
        className="group-hover:text-twitter hidden md:inline-flex
      text-base font-light  "
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
