import { getArgs } from "./helpers/args.js";
import { LogService } from "./services/log.service.js";

function initSli() {
  const args = getArgs(process.argv);

  if (args.h) {
    return LogService.printHelp();
  }
}

initSli();
