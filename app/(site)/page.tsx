import { sleep } from "@/lib/utils";
import Image from "next/image";
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default async function Home() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
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
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title="새로운 앨법"
          subTitle="케이시"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title="컴뮤니티 제공"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title="커버 및 리믹스"
        />
      </div>
    </PagePadding>
  );
}
