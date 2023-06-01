import axios from "axios";
// export function getInfoMeteo(longitude: string, latitude: string) : Promise<String>{
//         return (axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
//         .then(
//             resp => {
//                 console.log(resp)
//                 return resp.data.current_weather
//             }
//         )
//     )
// }

export async function getInfoMeteo(longitude: number, latitude: number) {
    return await axios
        .get(
            "https://api.open-meteo.com/v1/forecast" +
                "?latitude=" +
                latitude +
                "&longitude=" +
                longitude +
                "&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("error = " + error);
            return null;
        });
}
