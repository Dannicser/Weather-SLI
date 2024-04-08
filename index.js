import { getArgs } from "./helpers/args.js";
import { AppService } from "./services/app.service.js";
import { LogService } from "./services/log.service.js";

function initSli() {
  const args = getArgs(process.argv);

  if (args.h) {
    return LogService.printHelp();
  }

  if (args.s) {
    return AppService.saveCity(args.s);
  }

  if (args.t) {
    return AppService.saveToken(args.t);
  }

  return AppService.getForcast();
}

initSli();
