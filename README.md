# Hello World Lambda App With TypeScript

## Local Dev Setup

Guild utilizes homebrew on Mac to get up and running. Win and Linux packages are also avalible for the required tools.

### AWS Sam Framework

AWS Sam framework for emulating the Lamba environment on our machine.

```sh
brew install aws-sam-cli
```

### Docker

Docker is needed to run the SAM emulation:

```sh
brew install --cask docker
```

### Node + Yarn

Actual Node version shouldn't matter too much, as the app is run inside of the SAM emulation, but lts v14 is probable the safest bet.
Yarn is used just because I like it, npm should have no trouble running the commands.

```sh
brew install nvm yarn

# install node v14
nvm install --lts
```

### Install Dependencies

```sh
# cd into function dir
cd function

# Install Dependencies
yarn install
```

## Using the project

### Basic Structure

- `template` - AWS Lambda manifest config.
- `./function` - source code for the app.
- `./function/dist` - output for compiled js.

### Scripts

- `test` - Run Mocha/chai test suite
- `build` - compile typescript to `./dist` folder
- `postbuild` - copies `package.json` into `./dist` and installs prod dependancies.
- `start` - runs `build` + `postbuild` then builds and runs SAM emulator with the compiled code.

Run `yarn start` and curl or browse to `http://127.0.0.1:3000/hello` to confirm that the environment is working.
