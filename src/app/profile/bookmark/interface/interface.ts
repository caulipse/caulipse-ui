import { ReactSVG } from "react";

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

export interface EmptyComponentInterface{
    title:string;
    description:string;
    buttonText:string;
    buttonColor?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
}