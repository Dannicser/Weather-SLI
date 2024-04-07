import axios from "axios";

import { StorageService, TOKEN_DICTIONARY } from "../services/storage.service.js";

export class ApiWeatherService {
  static async getWeather() {
    const token = process.env.TOKEN || (await StorageService.getKeyValue(TOKEN_DICTIONARY.TOKEN));
    const city = process.env.CITY || (await StorageService.getKeyValue(TOKEN_DICTIONARY.CITY));

    if (!token) {
      throw Error("No token");
    }

    if (!city) {
      throw Error("No city");
    }

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    });

    return data;
  }
}
