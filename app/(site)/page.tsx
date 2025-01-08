import { sleep } from "@/lib/utils";
import Image from "next/image";
import Category from "@/app/(site)/components/Category"; // Adjust the import path as necessary

export default async function Home() {
  return <div className="min-h-[600px]">
    <div className="mt-9"></div>
    <Category />
    HomePage
  </div>;
}
