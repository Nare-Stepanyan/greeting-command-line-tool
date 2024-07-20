const { format } = require("date-fns");
const args = process.argv.slice(2);

const defaultValues = {
  name: "guest",
  greeting: "Hello",
  level: "2",
};

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case "--name":
    case "-n":
      defaultValues.name = args[i + 1];
      i++;
      break;
    case "--level":
    case "-lvl":
    case "-l":
      defaultValues.level = args[i + 1];
      i++;
      break;
    case "--greeting":
    case "-g":
      defaultValues.greeting = args[i + 1];
      i++;
      break;
    default:
      break;
  }
}

const greeting = (
  name = defaultValues.name,
  level = defaultValues.level,
  greeting = defaultValues.greeting
) => {
  level === "1" && console.log(`${greeting} ${name}.`);
  level === "2" &&
    console.log(
      `${greeting} ${name}! (Date and Time: ${format(
        new Date(),
        "yyyy-MM-dd HH:mm:ss"
      )})`
    );
};
greeting();
