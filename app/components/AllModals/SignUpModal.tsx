"use client";

import useSignUp from "@/app/hooks/useSignUp";
import Button from "../input/Button";
import Input from "../input/Input";
import ModalContainer from "../model/ModalContainer";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { BsGithub, BsGoogle } from "react-icons/bs";
interface ISignupModalProps {
  isOpen?: boolean;
}
const SignUpModal: React.FC<ISignupModalProps> = ({}) => {
  const isOpen = useSignUp((state) => state.open);
  const onClose = useSignUp((state) => state.setOpen);
  const session = useSession();
  if (!isOpen) return null;

  const body = (
    <>
      <div className="flex flex-col w-full px-2 py-1 ">
        <Input
          onChange={() => {}}
          value=""
          type="text"
          label="Username"
          placeholder="Enter your Username "
          required
        />
        <Input
          type="email"
          label="email"
          onChange={() => {}}
          value=""
          placeholder="Enter your Email "
          required
        />
        <div className="mt-2 px-2 w-full relative border border-t border-gray-500" />

        <div className="mt-3 lg:mt-5 flex flex-row items-center px-2">
          <Button
            isLoading={session?.status === "loading"}
            title="Github"
            icon={BsGithub}
            onClick={() => signIn("github", { redirectTo: "/" })}
          />
          <Button
            title="Google"
            isLoading={session?.status === "loading"}
            secondary
            icon={BsGoogle}
            onClick={() => signIn("google", { redirectTo: "/" })}
          />
        </div>
      </div>
    </>
  );
  return (
    <ModalContainer
      title={"Developerdev2007"}
      body={body}
      footer={
        <>
          <div className="w-full flex flex-row justify-around">
            <div className="w-full text-blue-500">developerdev2007</div>
            <div className="">EMAIL</div>
          </div>
        </>
      }
      onClose={() => onClose(false)}
    />
  );
};
export default SignUpModal;
