export const getRecentPosts = async () => {
  const res = await fetch("https://jsonplaceholder.org/posts");
  let posts = await res.json();
  let topPosts = posts.slice(0, 3);
  return topPosts;
};
