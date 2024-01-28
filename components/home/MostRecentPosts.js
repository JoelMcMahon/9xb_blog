import { getRecentPosts } from "@/lib/getRecentPosts";
import Link from "next/link";
import React from "react";

const MostRecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <>
      <section className="flex flex-col items-start justify-center">
        <div className="flex justify-between items-end w-full">
          <h2 className="my-2 font-paytone text-3xl lg:text-4xl">Top Posts</h2>
          <Link
            className="font-semibold text-lg text-blue-600  hover:text-sky-400"
            href=""
          >{`View All Posts >`}</Link>
        </div>
        <hr className="bg-blue-300 w-full my-3"></hr>
      </section>
      <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4">
        <div className="row-span-2 bg-red-400">
          <div className="h-96"></div>
        </div>
        <div className="row-span-1 ">02</div>
        <div className="row-span-1 ">03</div>
      </div>
    </>
  );
};

export default MostRecentPosts;
