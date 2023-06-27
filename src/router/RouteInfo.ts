/* 
	These interfaces define the links within <MainNavBar/>
	The "Group" is what expands, revealing the "Items" which are the links
*/

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
