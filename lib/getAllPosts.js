export const getAllPosts = async () => {
  const res = await fetch("https://jsonplaceholder.org/posts");
  let posts = await res.json();
  return posts;
};
