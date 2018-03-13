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
    singer:string;
    album:string;
    time:string;
}