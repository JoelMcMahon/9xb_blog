export const getPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.org/posts/${id}`);
  let post = await res.json();
  return post;
};
