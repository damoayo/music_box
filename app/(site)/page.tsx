import { sleep } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  return <div className="min-h-[600px]">HomePage
    <div className="h-[500px] bg-neutral-700">Homepage</div>
    <div className="h-[500px] bg-neutral-700">Homepage</div>
    <div className="h-[500px] bg-neutral-700">Homepage</div>
    <div className="h-[500px] bg-neutral-700">Homepage</div>
  </div>;
}
