const toFormattedCount = (count: number) => {
	if (count < 10) return `0${count}`;
	return count;
};

export default {
    toFormattedCount
}