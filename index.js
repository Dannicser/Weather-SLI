import { getArgs } from "./helpers/args.js";
import { LogService } from "./services/log.service.js";
import { StorageService, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { ApiWeatherService } from "./services/api.weather.service.js";

function initSli() {
  const args = getArgs(process.argv);

  if (args.h) {
    return LogService.printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  return getForcast();
}

initSli();

async function getForcast() {
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

async function saveToken(token) {
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

async function saveCity(city) {
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
