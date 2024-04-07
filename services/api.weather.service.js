import { StorageService, TOKEN_DICTIONARY } from "../services/storage.service.js";
import axios from "axios";

export class ApiWeatherService {
  static async getWeather() {
    const token = await StorageService.getKeyValue(TOKEN_DICTIONARY.TOKEN);

    if (!token) {
      throw Error("no token");
    }

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: TOKEN_DICTIONARY.CITY,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    });

    return data;
  }
}

// const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);

// url.searchParams.append("q", TOKEN_DICTIONARY.CITY);
// url.searchParams.append("appid", token);
// url.searchParams.append("lang", "ru");
// url.searchParams.append("units", "metric");

// https.get(url, (response) => {
//   try {
//     let res = "";

//     response.on("data", (chank) => {
//       res += chank;
//     });

//     response.on("end", () => console.log(res));
//   } catch (error) {}
// });
