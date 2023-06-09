export default interface StoreInfo {
	storeID: string;
	storeName: string;
	isActive: number;
	images: {
		banner: string;
		logo: string;
		icon: string;
	};
}
