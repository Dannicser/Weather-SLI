import { getArgs } from "./helpers/args.js";
import { LogService } from "./services/log.service.js";
import { StorageService } from "./services/storage.service.js";

function initSli() {
  const args = getArgs(process.argv);

  if (args.h) {
    LogService.printHelp();
  }

  if (args.s) {
    StorageService.saveKeyValue("city", args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }
}

initSli();

async function saveToken(token) {
  try {
    await StorageService.saveKeyValue("token", token);
    LogService.printSuccess("Token has been set");
  } catch (error) {
    LogService.printError(error.message);
  }
}
