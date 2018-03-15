/*标签数据*/
export class TagData {
    title: string;
    tags: Array<Tags>;
}

export class Tags {
    id: number;
    tagName: string;
    url:string;
}

/*list 数据*/
export class ListData {
    id:number;
    title:string;
    url:string;
    userName:string;
    createDate:string;
    listener:number;
    content:string;
    music:Array<MusicData>;
}

/* 音乐数据 */
export class MusicData {
    id:number;
    micName:string;
    src:string;
    singer:string;
    album:string;
    time:string;
}

/*导航数据*/
export class NavData {
    navName:string;
    navUrl:string;
}

/* 榜单数据 */
export class RankData {
    rankName:string;
    rankImg:string;
    musiclist:Array<MusicData>;
}

/*播放数据*/
export class PlayData {
    Index:number;
    IsPlaying:boolean;
    MicName:string;
    Style:number;
    Current:number;
    Data:number;
    percent?:any;
}