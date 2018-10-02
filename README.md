# Twitch Popout Player

This is a super rudimentary Popout player for Twitch that I put together to watch the international.

## Downloads

Check the releases section of this repo for precompiled installer downloads. 


## To build from Source

### Requirements:
* Node.js installed locally.

### Installing Node node_modules
Once node is installed, execute `npm install`, which will install all required package dependencies inside node_modules.

### Building the client
Having installed the required node modules, the client can be built from source with `npm package-win` on windows, `npm package-mac` on macos, or `npm package-linux` for Linux clients. Once built, installers can be generated and the client can be run from the command line.

#### Running the client

The client can be run on any system with `npm run start`, once build (see above). The client can be run from an executable, or installed into the System application tray, depending on the system in use.

##### macos Installer

The macos installer (.dmg) can be generated once the client has been built. The macos installer generates with `npm create-installer-mac`. Note that building the macos installer on Windows will not work.


##### Windows Installer

The windows installer builds seperately, via `npm create-installer-win`. Note that the windows installer will not build on macos or Linux. Note that the windows installer will not build on macos or Linux.


##### Linux installer

No Linux installer has yet been implemented, if anyone fancies doing one do submit a pull request.
