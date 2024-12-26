import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const page = (props: PageProps) => {
  return <div>channel/[{props.params.id}]</div>;
};

export default page;
