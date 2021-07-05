export interface StudyInterface{
    id:number;
    name:string;
    title:string;
    currentNumber:number;
    maxNumber:number;
    date:Date;
    tags:string[]
}

export interface ArticleInterface{
    id:number;
    title:string;
    author:string;
    recommendation:number;
    isBookmark:boolean;
}