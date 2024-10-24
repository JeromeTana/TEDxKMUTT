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
    <div className="bg-gray-800 text-white p-4 rounded-lg space-y-4">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={thumbnail.src} alt={thumbnail.alt} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">{categories.join(', ')}</span>
        <div className="flex items-center space-x-2">
          <img src={authorAvatar} className="w-8 h-8 object-cover rounded-full" alt={`${author}'s avatar`} />
          <div className="text-sm">
            <p>{author}</p>
            <p className="text-xs text-gray-400">{pubDate}</p>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default BlogItem;