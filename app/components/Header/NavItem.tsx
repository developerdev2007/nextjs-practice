"use client";
import Link from "next/link";

import { IconType } from "react-icons";

interface INavProps {
  label: string;
  icon: IconType;
  href: string;
}
const NavItem: React.FC<INavProps> = ({ href, icon: Icon, label }) => {
  console.log();
  return (
    <Link
      href={href}
      className="mr-4 w-auto hidden sm:flex flex-row items-center gap-2"
    >
      <Icon className="" size={25} />
      <div className={`text-gray-900 dark:text-slate-50 font-normal 1 ${""}`}>
        {label}
      </div>
    </Link>
  );
};
export default NavItem;
