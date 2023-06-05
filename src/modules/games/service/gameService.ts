import axios from "axios";
import type Shop from "../models/shop";

export async function getShops(): Promise<Shop[]> {
	return await axios
		.get("https://www.cheapshark.com/api/1.0/stores")
		.then((res) => res.data)
		.catch((err) => console.log(err));
}
