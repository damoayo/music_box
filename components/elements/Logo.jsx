"use client";

import IconButton from "./IconButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;