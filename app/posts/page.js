import ArticleThumbail from "@/components/articles/ArticleThumbail";
import { getAllPosts } from "@/lib/getAllPosts";
import React from "react";

const Posts = async () => {
  const allPosts = await getAllPosts();
  return (
    <>
      <main className="py-8 px-5 md:px-10 2xl:px-32 flex min-h-screen flex-col">
        <h2 className="my-2 font-paytone text-3xl lg:text-4xl">All Posts</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {allPosts.map((post) => {
            return (
              <div key={post.id} className="my-2">
                <ArticleThumbail article={post} />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Posts;
