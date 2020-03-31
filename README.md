![Gopherdon Beta](./public/gopher/glogo.svg)

A beautiful client for the Gopherdon network, built from Hyperspace

![Screenshot](gopherdon.png)

The Gopherdon apps are the official means of accessing the Gopherdon network at Goucher College. Built from [Hyperspace](https://github.com/hyperspacedev/hyperspace), it aims to provide a beautiful and easy-to-use interface for any Mastodon instance, including Gopherdon.

Changes that overall benefit Hyperspace will be made upstream, and Gopherdon will be in-sync with upstream changes from Hyperspace.

## Build instructions

### Prerequisites

To develop Gopherdon, you'll need the following tools and packages:

-   Node.js v10 or later

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

> Note: Do **not** delete the upstream branch. This is necessary to get changes from Hyperspace and to submit new changes to Hyperspace itself.

### Testing changes

Run any of the following scripts to test:

-   `npm start` - Starts a local server hosted at https://localhost:3000.
-   `npm run electrify` - Builds a copy of the source code and then runs the app through Electron. Ensure that the `location` key in `config.json` points to `"desktop"` before running this.
-   `npm run electrify-nobuild` - Similar to `electrify` but doesn't build the project before running.

The location key in config.json can take the following values during testing:

- https://localhost:3000: Most suitable for running npm start or running via react-scripts.
- desktop: Most suitable for when testing the desktop application.

> Note: Gopherdon v1.1.0-beta3 and older versions require the location field to be changed to "https://localhost:3000" before running.


To run a development version of Gopherdon, either run the `start` task from VS Code or run the following in the terminal:

```
npm start
```

### Building a release

To build a release, run the following command:

```npm
npm build
```

The built files will be available under `build` as static files. These files should get hosted to a web server.

If you are aiming to make an update to the official Gopherdon site, just push your changes to either the `master` (unstable) or `release` (stable) branches.

#### Building desktop releases

You can run any of the following commands to build a release for the desktop:

-   `npm run build-desktop`: Builds the desktop apps for all platforms (eg. Windows, macOS, Linux). Will run `npm run build` before building.
-   `npm run build-desktop-win`: Builds the desktop app for Windows without running `npm run build`.
-   `npm run build-desktop-darwin`: Builds the desktop apps for macOS (eg. disk image, Mac App Store) without running `npm run build`. See the details below for more information on building for macOS.
-   `npm run build-desktop-linux`: Builds the desktop apps for Linux (eg. Debian package, AppImage, and Snap) without running `npm run build`.
-   `npm run build-desktop-linux-select`: Builds the desktop app for Linux without running `npm run build`. _Target is required as a parameter._

The built files will be available under `dist` that can be uploaded to your app distributor or website.

#### Building for macOS

More recent version of macOS require that the Gopherdon desktop app be both digitally code-signed and notarized (uploaded to Apple to check for malware). Gopherdon includes the tools necessary to automate this process when building the macOS version either by `npm run build-desktop` or by `npm run build-desktop-darwin`.

Make sure you have your provisioning profiles for the Mac App Store (`embedded.provisionprofile`) and standard distribution (`nonmas.provisionprofile`) in the `desktop` directory. These provision profiles can be obtained through Apple Developer. You'll also need to create entitlements files in the `desktop` directory that list the following entitlements for your app:

-   `com.apple.security.app-sandbox`
-   `com.apple.security.files.downloads.read-write`
-   `com.apple.security.files.user-selected.read-write`
-   `com.apple.security.allow-unsigned-executable-memory`
-   `com.apple.security.network.client`

For the child ones (inherited `entitlements.mas.inherit.plist`):

-   `com.apple.security.app-sandbox`
-   `com.apple.security.inherit`
-   `com.apple.security.files.downloads.read-write`
-   `com.apple.security.files.user-selected.read-write`
-   `com.apple.security.allow-unsigned-executable-memory`
-   `com.apple.security.network.client`

> ⚠️ Note that the inherited permissions are the same as that of the parent. This is due to an issue where the hardened runtime fails to pass down the inherited properties (see [electron/electron#20560](https://github.com/electron/electron/issues/20560#issuecomment-546110018)). This might change in future versions of macOS.

It is also recommended to add the `com.apple.security.applications-groups` entry with your bundle's identifier. You'll also need to create an `info.plist` in the `desktop` directory containing the team identifier and application identifier and install the developer certificates on the Mac you plan to build from.

You'll also want to modify the `notarize.js` file to change the details from the default to your App Store Connect account details and app identifier.

> ⚠️ **Warning**: The package.json file also includes the `build-desktop-darwin-nosign` script. This script is specifically intended for automated systems that cannot run notarization (Azure Pipelines, GitHub Actions, etc.). _Do not use this command to build production-ready versions of Hyperspace_.

## Licensing and Credits

Gopherdon is licensed under the [Non-violent Public License v4+](LICENSE.txt), a permissive license under the conditions that you do not use this for any unethical purposes and to file patent claims. Please read what your rights are as a Gopherdon user/developer in the license for more information.

Gopherdon has been made possible by the React, TypeScript, Megalodon, and Material-UI projects and our contributors on GitHub.

The Gopher icon used for Gopherdon is registered property of Goucher College.

## Contributing

Gopherdon is currently adopting the [contribution guidelines](.github/contributing.md) and [Code of Conduct](.github/code_of_conduct.md) from the main Hyperspace project.
