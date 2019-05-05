# Gopherdon App

A beautiful client for the Gopherdon network, built from Hyperspace

![Screenshot](screenshot.png)

The Gopherdon apps are the official means of accessing the Gopherdon network at Goucher College. Built from [Hyperspace](https://github.com/hyperspacedev/hyperspace), it aims to provide a beautiful and easy-to-use interface for any Mastodon instance, including Gopherdon.

Changes that overall benefit Hyperspace will be made upstream, and Gopherdon will be in-sync with upstream changes from Hyperspace.

## Build instrictions

### Prerequisites

To develop Gopherdon, you'll need the following tools and packages:

* Node.js 8 or later
* (Optional) Visual Studio Code

### Installing dependencies

First, clone the repository from GitHub:

```bash
git clone https://github.com/gopherdonapp/app
```

Then, in the app directory, run the following command to install all of the package dependencies:

```npm
npm install
```

### Pulling changes from upstream (hyperspacedev/hyperspace)

It is recommended that you make these changes to both the `upstream` and `master` branches, accordingly.

Run the following commands to copy the latest Hyperspace code to Gopherdon in `upstream`:

```bash
git fetch upstream
git checkout upstream
git merge upstream/master
```

If any conflicts arise, check the files and review the changes before fully merging. After merging, make a pull request to the `master` branch to apply the upstream changes.

> Note: Do **not** delete the upstream branch. This is necesary to get changes from Hyperspace and to submit new changes to Hyperspace itself.

### Testing changes

Before testing Gopherdon, make the following change in `config.json`:

```json
    "location": "https://localhost:3000"
```

This is necessary to test Gopherdon locally and will need to be reverted after testing or before releasing to `master`/`release`.

To run a development version of Gopherdon, either run the `start` task from VS Code or run the following in the terminal:

```npm
npm start
```

The site will be hosted at `https://localhost:3000`, where you can sign in and test Gopherdon.

### Building a release

To build a release, run the following command:

```npm
npm build
```

The built files will be available under `build` as static files. These files should get hosted to a web server.

If you are aiming to make an update to the official Gopherdon site, just push your changes to either the `master` (unstable) or `release` (stable) branches.

## Contributing

Gopherdon is currently adopting the [contribution guidelines](.github/contributing.md) and [Code of Conduct](.github/code_of_conduct.md) from the main Hyperspace project.
