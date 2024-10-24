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
    <div className="text-white p-4 rounded-lg space-y-3">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={thumbnail.src} alt={thumbnail.alt} className="w-full h-52 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex items-center">
        
        {
            categories.map((category, index) => (
                <span key={index} className="bg-[#46000C] mt-6 mb-2 text-red-600 rounded-full text-sm px-3 py-1 mr-2">{category.toUpperCase()}</span>
            ))
        }
        
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-400 text-md">{content}</p>
      <div className="flex items-center space-x-1 space-y-4">
          <img src={authorAvatar} className="w-8 h-8 object-cover rounded-full mr-2" alt={`${author}'s avatar`} />
          <div className="text-sm">
            <p>{author}</p>
            <p className="text-xs text-gray-400">{pubDate}</p>
          </div>
        </div>
    </div>
  );
};

export default BlogItem;