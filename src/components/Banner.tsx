import React from "react";

interface Props {
    tag: string;
    title: string;
    description: string;
    cover: ImageMetadata;
}

const Banner: React.FC<Props> = ({ tag, title, description, cover }) => {
    return (
        <div className="p-2">
            <div className="relative py-40 rounded-2xl md:rounded-3xl overflow-clip">
                <img
                    src={cover.src}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bg-black opacity-80 w-full h-full top-0"></div>
                <div className="absolute bg-primary-500 w-full h-full top-0 mix-blend-color"></div>

                <div className="relative max-w-[48rem] px-4 text-center m-auto space-y-4 md:space-y-6">
                    <div className="space-y-3">
                        <small className="text-primary-500">
                            <b>{tag}</b>
                        </small>
                        <h1 className="font-bold text-3xl md:text-4xl text-gray-200">
                            {title}
                        </h1>
                    </div>
                    <p className="text-sm md:text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
