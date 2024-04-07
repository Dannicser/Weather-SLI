import chalk from "chalk";

export class LogService {
  static printError(message) {
    console.error(chalk.bgRed("Error") + " " + message);
  }

  static printSuccess(message) {
    console.error(chalk.bgGreen("Success") + " " + message);
  }

  static printHelp() {
    console.log(
      chalk.bgRed(" HELP "),
      `
    -s [CITY] - set city
    -t - set token
    -h - help
    `
    );
  }

  static printWeather({ name, weather, main, wind, visibility }) {
    console.log(
      chalk.bgYellowBright(`Weather in ${name}`),
      `
    ${chalk.bgBlue(weather[0].description)} - ${chalk.bgBlue(main.temp_min)}
    ${chalk.bgYellowBright("feels like")} - ${chalk.bgYellowBright(main.feels_like)}
    ${chalk.bgBlue("pressure")} - ${chalk.bgBlue(main.pressure)}
    ${chalk.bgYellowBright("humidity")} - ${chalk.bgYellowBright(main.humidity)}
    ${chalk.bgBlue("wind")} - ${chalk.bgBlue(wind.speed)}
    ${chalk.bgYellowBright("visibility")} - ${chalk.bgYellowBright(visibility)}
    `
    );
  }
}
