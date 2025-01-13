import { sleep } from "@/lib/utils";
import Image from "next/image";
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default async function Home() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12">
          {/* carousel */}
          <PlayListCarousel
            playlistArray={[...dummyPlaylistArray1]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon size={"lg"} />
              </div>
            }
            title="다시 듣기"
            subTitle="도도"
          />
        </div>
      </div>
    </PagePadding>
  );
}
