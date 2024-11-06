export interface Talk {
    title: string;
    description: string;
    event: any;
    speaker: {
        name: string;
        bio: string;
    };
    thumbnail: {
        src: any;
        alt?: string;
    };
    url: string;
    relatedTalks?: any[];
}
