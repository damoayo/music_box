import clsx from "clsx";
import React from "react";

interface PageProps {
  searchParams: {
    list: string;
  };
}

const page = (props: PageProps) => {
  return <div>playlist {props.searchParams.list}</div>;
};

export default page;
