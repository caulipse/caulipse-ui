export enum CategoryDepthEnum {
	MAIN = 'MAIN',
	SUB = 'SUB',
}

// TODO
// categoryCode 데이터 추가
export interface ICategoryType {
	categoryDepth: CategoryDepthEnum;
	label: string;
}
