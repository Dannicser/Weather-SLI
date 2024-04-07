import chalk from "chalk";

export class LogService {
  static printError(message) {
    console.error(chalk.bgRed("Error:") + " " + message);
  }

  static printSuccess(message) {
    console.error(chalk.bgGreen("Success:") + " " + message);
  }

  static printHelp() {
    console.log(
      chalk.bgRed(" HELP "),
      `
    -s [CITY] - set city
    -h - help
    -t - save token
    `
    );
  }
}
