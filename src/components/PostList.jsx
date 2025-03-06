import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useJsonPlaceholder } from '../base/JsonPlaceholder';

const PostList = () => {
  const { posts, loading } = useJsonPlaceholder();

  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <AiOutlineLoading3Quarters size={40} className='animate-spin' />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <div className='text-center'>No posts available.</div>;
  }

  const DISPLAY_LIMIT = 5;

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Posts</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
        {posts.slice(0, DISPLAY_LIMIT).map((post) => (
          <li key={post.id} className='border border-slate-400 p-4 rounded-md shadow-md w-full'>
            <h4 className='font-bold text-lg mb-2'>{post.title}</h4>
            <p className='text-sm text-gray-600'>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
