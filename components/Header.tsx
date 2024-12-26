import React from "react";
import Image from "next/image";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1680552396773-2a942321e750?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="빌딩들 속의 빨간 이층버스"
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-30 w-full "></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full "></div>
        </div>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
