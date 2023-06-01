import axios from "axios";

export async function getShops(): Promise<any[]> {
    return await axios
        .get("https://www.cheapshark.com/api/1.0/stores")
        .then((res) => res.data)
        .catch((err) => console.log(err));
}
