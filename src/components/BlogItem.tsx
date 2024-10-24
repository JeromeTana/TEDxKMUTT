import React from "react";

interface Props {
  thumbnail: {
    src: string;
    alt?: string;
  };
  categories: string[];
  title: string;
  content: string;
  author: string;
authorAvatar: string;
  pubDate: string;
}

const BlogItem: React.FC<Props> = ({ thumbnail, categories, title, content, author, authorAvatar, pubDate }) => {
    return (
      <div className="bg-black text-white p-4 rounded-lg space-y-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={thumbnail.src} alt={thumbnail.alt} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">{categories.join(', ')}</span>
          <div className="flex items-center space-x-2">
            <img src={authorAvatar} className="w-8 h-8 object-cover rounded-full" alt={`${author}'s avatar`} />
            <div className="text-sm">
              <p>{author}</p>
              <p className="text-xs text-gray-500">{pubDate}</p>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-gray-400">{content}</p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Share</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Bookmark</button>
        </div>
      </div>
    );
  };
  
  export default BlogItem;