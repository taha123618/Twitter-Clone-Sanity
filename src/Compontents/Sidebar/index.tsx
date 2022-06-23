import React from "react";
import { NextPage } from "next";
import SidebarRow from "./SidebarRow";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  // for login
  const { data: session } = useSession();
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start ">
      {/* https://Links.papareact.com/ */}
      <img className=" m-3 h-10 w-10" src="" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={BellIcon} title="Explore" />
      <SidebarRow Icon={MailIcon} title="Home" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="Home" />
      <SidebarRow Icon={CollectionIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Home" />
      <SidebarRow Icon={BookmarkIcon} title="Home" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"}
      />
    </div>
  );
};

export default Sidebar;
