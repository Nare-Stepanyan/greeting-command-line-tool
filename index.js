const { format } = require("date-fns");
const args = process.argv.slice(2);

const defaultValues = {
  greeting: "Hello",
};

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case "--name":
    case "-n":
      defaultValues.name = args[i + 1];
      i++;
      break;
    case "--level":
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

if (!defaultValues.name || !defaultValues.level) {
  console.error("Error: --name or -n and --level or -l are required.");
  process.exit(1);
}

const greeting = (name, level, greeting) => {
  if (level === "1") {
    console.log(`${greeting} ${name}.`);
  } else if (level === "2") {
    console.log(
      `${greeting} ${name}! (Date and Time: ${format(
        new Date(),
        "yyyy-MM-dd HH:mm:ss"
      )})`
    );
  } else {
    console.log('Invalid verbosity level. Please use "1" or "2".');
  }
};

greeting(defaultValues.name, defaultValues.level, defaultValues.greeting);
