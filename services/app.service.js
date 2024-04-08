import { ApiWeatherService } from "./api.weather.service.js";
import { LogService } from "./log.service.js";
import { StorageService, TOKEN_DICTIONARY } from "./storage.service.js";

export class AppService {
  static async getForcast() {
    try {
      const weather = await ApiWeatherService.getWeather();

      return LogService.printWeather(weather);
    } catch (error) {
      if (error?.response?.status === 404) {
        return LogService.printError("City has not been found");
      }

      if (error?.response?.status === 401) {
        return LogService.printError("Invalide api key");
      }

      return LogService.printError(error.message);
    }
  }

  static async saveToken(token) {
    if (!token.length) {
      return LogService.printError("No token");
    }

    try {
      await StorageService.saveKeyValue(TOKEN_DICTIONARY.TOKEN, token);
      LogService.printSuccess("Token has been set");
    } catch (error) {
      LogService.printError(error.message);
    }
  }

  static saveCity(city) {
    if (!city.length) {
      return LogService.printError("No city");
    }

    try {
      StorageService.saveKeyValue(TOKEN_DICTIONARY.CITY, city);
      LogService.printSuccess(`City ${city} has been set`);
    } catch (error) {
      LogService.printError(error.message);
    }
  }
}
