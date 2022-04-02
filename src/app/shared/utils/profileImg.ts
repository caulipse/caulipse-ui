export const getProfileImgs = (): string[] => {
	return importAll(require.context('@src/assets/img/profileImg', false, /\.(png|jpe?g|svg)$/));
};

export const importAll = (r: __WebpackModuleApi.RequireContext): string[] => {
	const initialAcc: string[] = [];

	return r.keys().reduce((acc, item: string) => {
		acc.push(item.replace('./', ''));
		return acc;
	}, initialAcc);
};
