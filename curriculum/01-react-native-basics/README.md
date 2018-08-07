![cf](http://i.imgur.com/7v5ASc8.png) React Native
===

## Learning Objectives
* Students will understand native application development
* Students will understand device specific features
* Students will understand device UI/UX Concerns
* Students will be able to construct and deliver a React Native Application

## Resources
* Read [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started)

## Dependencies
* Mac Laptop!
* [X-Code](https://developer.apple.com/xcode/)
* [Android Studio](https://developer.android.com/studio/)
* create-react-native-app (`npm install -g create-react-native-app`)
* react native cli (`npm install -g react-native-cli`)
* watchman (`brew install watchman`)
* [Expo](https://expo.io/) Account and app installed on your device(s)


## Outline
* :05 **General Introduction**
* :45 **Native Apps vs Web Apps**
  * Ecosystem / Dev Environments
  * Where does React Native fit in
* Break
* :50 **Demo**
  * Build a simple create-react-native-app
  * Eject and add contacts access
  * Add access to the calendar (native component)
  * Discuss iOS and Android requirments
* :50 **Workshop**
  * Students recreate the demo


* **Warning:** *AS takes a long time to get setup and adjustments are also non-obvious.  You'll need get pretty good at googling errors and will learn a bit more about Java than you probably intended ;)*

## Non-Native App Development

- **[Cordova](https://cordova.apache.org/), [Sencha](https://www.sencha.com/), etc**
  - Pure HTML/CSS/JS applications
  - Basic access to device (vibrate, gps, contacts, filesystem, etc)
  - Non-Native code (wrapped in a WebView)
    - Performance and Security issues

- **WebView** - safari-like component environment.  
  - Think of it as a "full screen" iframe with no chrome or controls. 
  - Has local storage, sql-lite, cookies, etc.
  

## Running in EZ mode with Expo

**[EXPO](https://expo.io/)** is a development environment for react apps.

- Lets you focus on the code and not the wiring
- Similar to Cordova in that its a "Runner" environment that subsumes your app
- Many device APIs built-in
- Creates distributable files for both the app store and google play
- Has a "detach" mode that creates a truly standalone natively deployable app
- https://docs.expo.io/versions/latest/introduction/project-lifecycle.html

- **Create an app** `create-react-native-app foobar`
- **Run** `npm run start` to start a dev server
- **Edit** `App.js` as your entry point
- **Interact** with the dev server from the command line.
  - open up an emulator
  - launch on your actual device

## Ejecting and working like a boss

Most companies won't work in Expo beyond the POC stage, unless they are bought into the ecosystem, plugins, apis, etc.  Generally, you will be working down in the weeds with an "Ejected" application.

**Ejected Applications** are like a webpack built React App.  You don't get the nice tight wrappers and ease of use, but you do get to roll up your sleeves and get into the configuration and deep setup.

You will be in charge of setting up native components, plugging into X-Code and the Android studio (i.e. Objective-C and Java) at a pretty hands on level. 

- **Create an app** `react-native-init appname`
- **Run Dev Server** `npm run start`
  - This needs to be running during your simulation/dev cycle
  - This serves the dynamic JS bundle to the app runner
- **Edit** `App.js` as your entry point
- **In a 2nd Terminal Window open your simulator**
  - **Run in the IOS Simulator** 
    - From the command line - `react-native run-ios`
    - From Xcode - Open ios/[projectname].xcodeproj in Xcode and hit the "Run" button
  - **Run in the Android Simulator** 
    - Start an android emulator from Android Studio or connect a device
    - From the command line - `react-native run-android`
    - Potential Issues:
      - You might need to create  "local.properties" file in your "android" folder with the following line in it:
        - `sdk.dir = /Users/YOURUSERNAME/Library/Android/sdk`
      - Check in Android studio in the SDK Manager that you have the latest `cmake`, `lldb`, and `NDB` installed
      - Gradle might be old (an issue with new modules).  [Update Instructions](https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395)

## Native Modules

## Adding Native Device Features via 3rd Party Library
- [Contacts](https://github.com/joshuapinter/react-native-unified-contacts) `react-native-unified-contacts`
  - Requires an eject so you can dig into security
  - Requires Security access from the user
    - info.plist: 	
      `<key>NSContactsUsageDescription</key>`
      `<string>To display them in a test app</string>`
  - Set swift to version 4.1 in Xcode
  - Add the project to Xcode
  
- Rolling Your own ...

**Install the Create Native Module Library** `npm install -g react-native-create-library`
  
  ### iOS
  - `react-native-create-library iCal`
  - `cd iCal`
  - `npm install`
  - `cd ..`
  - `npm i iCal`
  


