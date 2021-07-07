export interface StudyInterface{
    studyId:number;
    name:string;
    title:string;
    currentNumber:number;
    maxNumber:number;
    date:Date;
    tags:string[]
}

export interface ArticleInterface{
    articleId:number;
    title:string;
    author:string;
    recommendation:number;
    isBookmark:boolean;
}