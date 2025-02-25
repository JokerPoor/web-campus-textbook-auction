export const show = ref(false);
export const openAxiosLoading = () => {
	show.value = true;
};

export const closeAxiosLoading = () => {
	show.value = false;
};
