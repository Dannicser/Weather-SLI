import { getArgs } from "./helpers/args.js";
import { LogService } from "./services/log.service.js";
import { StorageService } from "./services/storage.service.js";
import { ApiWeatherService } from "./services/api.weather.service.js";

function initSli() {
  const args = getArgs(process.argv);

  if (args.h) {
    return LogService.printHelp();
  }

  if (args.s) {
    return StorageService.saveKeyValue("city", args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  ApiWeatherService.getWeather();
}

initSli();

async function saveToken(token) {
  if (!token.length) {
    return LogService.printError("no token");
  }

  try {
    await StorageService.saveKeyValue("token", token);
    LogService.printSuccess("Token has been set");
  } catch (error) {
    LogService.printError(error.message);
  }
}
