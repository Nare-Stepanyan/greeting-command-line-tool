# Greetings CLI Tool

## Overview

This CLI tool allows you to generate personalized greeting messages. You can specify the name of the person, the verbosity level of the message, and a custom greeting. If a custom greeting is not provided, default value is used.

## Features

- Greet a person with a customizable message.
- Choose between different verbosity levels.
- Set a custom greeting message or use the default.

## Installation

To use this CLI tool, you need to have [Node.js](https://nodejs.org/) installed. Clone the repository and install the required dependencies.

```bash
 git clone https://github.com/Nare-Stepanyan/greeting-command-line-tool.git
 cd greeting-command-line-tool
 npm install
```

## Usage

You can run the script from the command line with various options. Here are the available options:

#### Options
- --name, -n (required): Specify the name of the person to greet.
- --level, -l (required): Specify the verbosity level (1 or 2).
- --greeting, -g (optional): Provide a custom greeting message.

## Examples

- Default greeting and verbosity level 1

```bash
 node index.js -n Nare -l 1
```
Output:

```plaintext
 Hello Nare.
```
- Custom greeting and verbosity level 2

```bash
 node index.js -n Nare -l 2 -g "Hi"
```
Output:

```plaintext
 Hi Nare! (Date and Time: YYYY-MM-DD HH:mm:ss)
```

- Missing required arguments

```bash
 node index.js -n Nare
```
Output: 

```plaintext
 Error: --name or -n and --level or -l are required.
```

## Error Handling
- If --name or -n and --level, or -l are not provided, an error message will be shown and the script will exit with a non-zero status.
- If an invalid verbosity level is provided (anything other than "1" or "2"), an error message will be shown.

## License
ISC

## Author

[Nare](https://github.com/Nare-Stepanyan)
