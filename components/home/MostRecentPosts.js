import { getRecentPosts } from "@/lib/getRecentPosts";
import Link from "next/link";
import React from "react";
import ArticleThumbail from "../articles/ArticleThumbail";

const MostRecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <>
      <section className="flex flex-col items-start justify-center">
        <div className="flex justify-between items-end w-full">
          <h2 className="my-2 font-paytone text-3xl lg:text-4xl">Top Posts</h2>
          <Link
            className="font-semibold text-lg text-blue-500  hover:text-sky-400"
            href="/posts"
          >{`View All Posts >`}</Link>
        </div>
        <hr className="bg-blue-300 w-full my-3"></hr>
      </section>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => {
          return <ArticleThumbail key={post.id} article={post} />;
        })}
      </div>
    </>
  );
};

export default MostRecentPosts;
