import { Link } from "react-router-dom";
import "./Post.css";

const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="">
    <div className=" md:container md:mx-auto px-10 flex flex-wrap items-start my-16 lg:grid-cols-3">
      <div className=" lg-w-1/4 w-full lg:pr-3 ">
        <h2 className="text-6xl font-bold mb-2">All Activities</h2>
          <div className=" rounded-xl relative">
            <div className='postsContainer'>
          {posts?.map((post) => (
              <div className='postCard'>
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p className=" text-xl font-bold text-gray-800 leading-relaxed">{post?.title}</p>
              </Link>
              <img
                src={post?.image_url}
                alt={post.title}
                className="object-none max-w-md m-auto rounded-xl "
              />
                <p className=" flex text-lg font-bold justify-center text-gray-800 leading-relaxed ">{post?.description}</p>
            </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      </div>
      </div>

  );
};

export default Posts;
