export interface ProfileVideo {
    videos: video[],
    message: string,
}

interface video {
    videoId: number,
    userId: string,
    title: string,
    description: string,
    url: string,
    uploadDate: Date,
    views: number,
    likes: number,
    dislikes: number,
    videoCategoryId: number,
    duration: number,
    thumbnail: null,
    user: null,
    videoCategory: null,
    meta: null,
    tags: null,
    analytics: null,
    comments: null,
}

export interface ProfileChannel {
    channels: channel[],
    message: string,
}

interface channel {
    channelId: number,
    userId: string,
    title: string,
    description: string,
    url: null,
    creationDate: Date,
    subscribers: number,
    views: number,
    thumbnail: null,
    user: null,
    videos: null,
    playlists: null,
}