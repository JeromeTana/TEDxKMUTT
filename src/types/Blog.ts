interface Blog {
    slug: string;
    data: {
        thumbnail: {
            src: string;
            alt?: string;
        };
        categories: string[];
        title: string;
        author: {
            id: string;
        };
        pubDate: Date;
    };
    body: string;
}
