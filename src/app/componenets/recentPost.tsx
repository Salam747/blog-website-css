import { Heebo } from "next/font/google";
import Link from "next/link";
import { RecentPostCart } from "./recentPostCart";
const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div id="recent" className="bg-recentBackground my-[66px] md:h-[502px] flex flex-col justify-evenly">
      <div className="w-[92%] md:w-[1030] p-6 mx-auto flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <h2 className={`${heebo.className} text-[22px] font-medium`}>
          Recent post
        </h2>
        <Link
          href={"/"}
          className={`${heebo.className} text-[22px] text-myPink`}
        >
          Home
        </Link></div>
        <div className=" mt-[16px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
          <RecentPostCart/>
          <RecentPostCart/>
          </div>
      </div>
    </div>
  );
};

export default RecentPost;
