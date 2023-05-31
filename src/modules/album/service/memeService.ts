import axios from "axios";

export async function getMemes(): Promise<any> {
    return await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => JSON.parse(JSON.stringify(res.data.data.memes)))
        .catch((err) => console.log(err));
}
