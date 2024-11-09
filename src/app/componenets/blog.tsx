"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
const heebo = Heebo({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <div id="blog" className="bg-recentBackground my-16 h-auto flex flex-col justify-evenly">
      <div className="w-full max-w-[1030px] p-6 mx-auto flex justify-between">
        <h2 className={`text-[22px] font-medium ${heebo.className}`}>
          Blog Page
        </h2>
        <Link href={"/"} className={`text-[22px] text-myPink ${heebo.className}`}>
          Home
        </Link>
      </div>
      <div className="bg-white w-full max-w-[1030px] h-auto flex flex-col items-center mx-auto p-6">
        <div className="w-full max-w-[800px]">
          <h1 className={`font-bold text-[26px] mb-4 ${heebo.className}`}>
            Blog Title
          </h1>
          <div className="w-full flex justify-between mb-4">
            <p className={`text-[18px] font-medium text-black/70 ${heebo.className}`}>
              6 Oct 2024
            </p>
            <p className={`text-[18px] font-medium text-black/70 ${heebo.className}`}>
              ABDUL SALAM
            </p>
          </div>
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt metus a mi convallis, sit amet sollicitudin lorem
            interdum. Donec egestas, nisi ut tempus facilisis, mi purus
            sollicitudin risus, sed dapibus augue erat a nunc. Sed lacinia,
            tortor id interdum gravida, dolor ipsum venenatis felis, non
            fringilla ligula eros et augue. Vivamus euismod, orci ut varius
            malesuada, nunc velit dapibus ex, vitae laoreet nunc risus a quam.
            Sed eget ultrices risus.
          </p>
          <p className="leading-relaxed text-gray-700 mt-4">
            Proin nec interdum nulla. Curabitur id dolor nulla. Integer commodo
            dapibus nulla id fringilla. Fusce volutpat dui eget felis
            consectetur, sit amet hendrerit est blandit. Pellentesque a varius
            lacus, ut accumsan risus. Vivamus dapibus, arcu ac scelerisque
            aliquam, elit nunc cursus libero, at ullamcorper velit neque sed
            libero. Suspendisse potenti. Ut lacinia leo at metus laoreet, id
            varius erat viverra. Etiam eget convallis nisi. Praesent sed
            condimentum ligula.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default BlogPage;
