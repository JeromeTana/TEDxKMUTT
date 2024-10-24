import React from "react";

interface Props {
    thumbnail: ImageMetadata;
    categories: string[];
    title: string;
    content: string;
    author: string;
    pubDate: string;
}

const BlogItem: React.FC<Props> = ({ thumbnail, categories, title, content, author, pubDate }) => {
    return (
        <div className="">
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    src={thumbnail.src}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bg-black opacity-80 w-full h-full top-0"></div>
                <div className="absolute bg-primary-500 w-full h-full top-0 mix-blend-overlay"></div>
            </div>
            <div className="p-4 space-y-4">
                <div className="flex space-x-2">
                </div>
                <h1 className="font-bold text-2xl text-gray-800">{title}</h1>
                <p className="text-gray-600">{content}</p>
                <div className="flex items-center space-x-2">
                    <img
                        src="/images/avatar.png"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                    <div>
                        <p className="text-gray-800">{author}</p>
                        <p className="text-gray-600 text-xs">{pubDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;