# Hades Example Bot

This is an example bot using [Hades](https://github.com/dustinlacewell/hades), the Discord bot framework.

To get started, clone this repo and run `npm i` to install the dependencies.

## Configuration

Copy `config/default.template.json` to `config/default.json`

```json
{
    "discordToken": "your bot token here",
}
```

## Running the Bot

```sh
$ ts-node src/index.ts
```