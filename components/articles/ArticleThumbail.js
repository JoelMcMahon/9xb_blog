import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleThumbail = ({ article }) => {
  return (
    <Link href={`/posts/${article.id}`}>
      <div className="my-2 flex flex-col cursor-pointer relative hover:drop-shadow-lg">
        <Image
          width={"1000"}
          height={"1000"}
          src={article.image}
          alt=""
          className="rounded mb-5 drop-shadow-lg"
        />
        <div className="flex justify-between items-center">
          <p className="my-1 font-cutive text-md text-gray-500">
            {article.category}
          </p>
          <p className="my-1 font-poppins text-md text-gray-700">
            {article.publishedAt.slice(0, 10)}
          </p>
        </div>
        <h3 className="my-1 font-paytone text-2xl">{article.title}</h3>
      </div>
    </Link>
  );
};

export default ArticleThumbail;
