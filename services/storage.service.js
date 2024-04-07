import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

export const TOKEN_DICTIONARY = {
  TOKEN: "token",
  CITY: "city",
};

export class StorageService {
  static async saveKeyValue(key, value) {
    let data = {};

    if (await this.isExist(filePath)) {
      const file = await promises.readFile(filePath);
      data = JSON.parse(file);
    }

    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data));
  }

  static async getKeyValue(key) {
    if (await this.isExist(filePath)) {
      const file = await promises.readFile(filePath);
      const data = JSON.parse(file);

      return data[key];
    }

    return undefined;
  }

  static async isExist(path) {
    try {
      await promises.stat(path);

      return true;
    } catch (error) {
      return false;
    }
  }
}
