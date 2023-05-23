import axios from 'axios';

async function getData(id) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    posts: posts.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    })),
  };

  return userData;
}

export default getData;
