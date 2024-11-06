export interface Event {
    title: string;
    date: string;
    thumbnail: {
        src: string;
        alt?: string;
    };
    description: string;
    url: string;
    location: string;
}
