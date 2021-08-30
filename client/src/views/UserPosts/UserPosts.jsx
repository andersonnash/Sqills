import { Link } from "react-router-dom";

export default function Foods(props) {
  const { posts, handleDelete, currentUser } = props;

  return (
    <div className="md:container md:mx-auto px-20 flex flex-wrap items-start my-16 ">
      <div className="lg-w-1/4 w-full lg:pr-3">
        <h2 className="text-6xl font-bold mb-2">Your Activities</h2>
        <Link to="/posts/new">
            <button className=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-lg text-gray-900 font-bold transition duration-300 my-6 ">Create</button>
          </Link>
        <div className=" rounded-xl relative">
          {posts?.map((post) => (
            <div key={post.id}>
              {currentUser?.id === post.user_id && (
                <div>
                  <Link to={`/posts/${post.id}`}>
                    <p>{post?.title}</p>
                  </Link>
                  <Link to={`/posts/${post?.id}/edit`}></Link>
                  <img
                    src={post?.image_url}
                    alt={post.title}
                    class="object-cover w-full rounded-xl"
                  />
                  <p className="flex text-lg font-bold justify-center text-gray-800 leading-relaxed mb-6">
                    {post?.description}
                  </p>
                  <Link to={`/edit/${post.id}`}>
                  <button className=" inline-block m-4 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-xl text-gray-900 font-bold transition duration-300 my-6">Edit</button>
                </Link>
                  <button className=" inline-block w-1/3  bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-xl text-gray-900 font-bold transition duration-300" onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
