interface Blog {
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