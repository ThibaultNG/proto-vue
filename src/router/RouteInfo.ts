export default interface RouteGroupInfo {
	groupName: string;
	groupIcon: string;
	itemList: RouteItemInfo[];
}

export interface RouteItemInfo {
	name: string;
	link: string;
	icon: string;
}
