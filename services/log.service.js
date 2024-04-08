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
      chalk.bgGreen(` Weather in ${name} `),
      `
    ${weather[0].description} - ${main.temp_min}
    ${"feels like"} - ${main.feels_like}
    ${"pressure"} - ${main.pressure}
    ${"humidity"} - ${main.humidity}
    ${"wind"} - ${wind.speed}
    ${"visibility"} - ${visibility}
    `
    );
  }
}
