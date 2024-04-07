export function getArgs(args) {
  const [executer, file, ...rest] = args;
  const res = {};

  for (let i = 0; i < rest.length; i++) {
    const currentElement = rest[i];

    if (currentElement.startsWith("-")) {
      if (i === rest.length - 1) {
        res[currentElement.slice(1)] = true;
      } else if (rest[i + 1].charAt(0) !== "-") {
        res[currentElement.slice(1)] = rest[i + 1];
      } else {
        res[currentElement.slice(1)] = true;
      }
    }
  }

  return res;
}
