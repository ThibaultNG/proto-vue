export default interface Shop {
	storeID: string;
	storeName: string;
	isActive: number;
	images: {
		banner: string;
		logo: string;
		icon: string;
	};
}
