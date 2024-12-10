"use client";
import { IoHomeOutline } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";
// import SignUpModal from "../AllModals/SignUpModal";
import DarkLightModeHandler from "../DarkLightModeHandler";
import NavItem from "./NavItem";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
// import getUsers from "@/app/actions/getUsers";
// import useSignUp from "@/app/hooks/useSignUp";
import Button from "../input/Button";
import Image from "next/image";
import { useCallback } from "react";
import { Session } from "next-auth";
import useSignUp from "@/app/hooks/useSignUp";

interface HeaderProps {
  title: string;
  session?: Session | null;
}

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    label: "About",
    href: "/about",
    icon: BiInfoCircle,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: CgWorkAlt,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: BiPhoneCall,
  },
];

const Header: React.FC<HeaderProps> = ({ title, session: serverSession }) => {
  const session = useSession();
  const signUpStore = useSignUp();
  const handleClick = useCallback(() => {
    signUpStore.setOpen(true);
    return;
    if (!session?.data?.user?.email || !session?.data?.user?.image) {
      signIn("github", { redirectTo: "/" });
    } else {
      console.log("logout");
      signOut();
    }
  }, [session?.data?.user?.email, session?.data?.user?.image]);

  console.log("session", session?.data?.user?.name);
  return (
    <div className="h-auto bg-gradient-to-b from-sky-400 dark:from-sky-900 to-sky-400 dark:to-sky-900 flex justify-between items-center px-4 py-2 border-sky-600 dark:border-sky-400/50 border-sky-400/50 border-b-2">
      <div className="px-4 py-1 flex flex-row justify-between items-center w-full">
        <div className="flex dark:text-white text-medium text-gray-900 text-2xl ">
          {title}
        </div>
        <div className="flex items-center flex-row">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <DarkLightModeHandler />

          <Button
            title={!session?.data?.user?.name ? "signUp" : "Logout"}
            onClick={handleClick}
            isLoading={session?.status === "loading"}
            secondary
          />
          {/* {!session?.data?.user?.email ? (
            <div
              className="flex flex-row gap-2 items-center"
              onClick={() =>
                signIn("github  ", { redirect: false, redirectTo: "/" })
              }
            >
              Signin
            </div>
          ) : (
            <div
              className="flex flex-row gap-2 items-center"
              onClick={() => signOut()}
            >
              logout
            </div>
          )} */}
          {session?.data?.user?.image && (
            <Image
              src={session?.data?.user?.image as string}
              alt="dev"
              width={20}
              height={20}
              className="rounded-full object-contain w-10 h-10 "
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
