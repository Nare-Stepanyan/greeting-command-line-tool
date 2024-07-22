const { format } = require("date-fns");
const args = process.argv.slice(2);

const defaultValues = {
  language: 'en'
};

const greetings = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  it: "Ciao",
  ru: "Привет",
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
    case '--language':
    case '-lang':
      defaultValues.language = args[i + 1];
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

if (!greetings.hasOwnProperty(defaultValues.language)) {
  console.error(`Error: The language "${defaultValues.language}" is not supported. Please specify one of the following languages: en, es, fr, de, it, ru`);
  process.exit(1);
}

const greeting = (name, level, greeting, language) => {
  const greetingMessage = greeting ? greeting : (greetings[language] || greetings["en"]);
  if (level === "1") {
    console.log(`${greetingMessage} ${name}.`);
  } else if (level === "2") {
    console.log(
      `${greetingMessage} ${name}! (Date and Time: ${format(
        new Date(),
        "yyyy-MM-dd HH:mm:ss"
      )})`
    );
  } else {
    console.log('Invalid verbosity level. Please use "1" or "2".');
  }
};

greeting(defaultValues.name, defaultValues.level, defaultValues.greeting, defaultValues.language);
