import { Link } from "react-router-dom";

const Posts = (props) => {
  const { posts, handleDelete, currentUser } = props;
  return (
    <div class="md:container md:mx-auto px-20 flex flex-wrap items-start my-16 ">
      <div class="lg-w-1/4 w-full lg:pr-3">
        <h2 class="text-6xl font-bold mb-2">All Activities</h2>
        <div class=" rounded-xl relative">
          {posts?.map((post) => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p class="text-gray-800 leading-relaxed">{post?.title}</p>
              </Link>
              <img
                src={post?.image_url}
                alt={post.title}
                class="object-cover w-full rounded-xl"
              />
                <p class="flex text-lg font-bold justify-center text-gray-800 leading-relaxed mb-32">{post?.description}</p>
            </div>
          ))}
          <Link to="/posts/new">
            <button>Create</button>
              </Link>
        </div>
      </div>
      </div>
    

  );
};

export default Posts;
