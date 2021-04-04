## React Native Template With Typescript

For run this template is very easy, in fact.

Steps:
 - Clone this repository and just type yarn for install all necessary dependecies.

## React Native CLI changes, so you need to know...

For run the application on your emulator you should create a simple file inside de android folder called local.properties. Like this:

![Screenshot_20210321_234229](https://user-images.githubusercontent.com/39891863/111934057-75758000-8a9f-11eb-9ac5-1e0b0681dfe9.png)

Done? Ok, now what is it? Inside of this file you need put your Android SDK path, is crucial.

In this [link](https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil) you can check how this configuration is made.

But for turn this step more easy, you just must know where is android sdk path's. In normal situation the normal is:

* For Linux Users:

  `sdk.dir = /home/YOURUSERNAME/Android/Sdk`

* For Windows Users:

  ` sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
`

* For MacOS Users:

  `sdk.dir = /Users/USERNAME/Library/Android/sdk
`

## MacOS Users:

If you use iPhone Emulator, is very simple. In fact, is not long required install the `pod install` for `@react-navigation/native or /stack` or another library in this template.

1. Just clone this project
2. Tap yarn for install the dependecies
3. Run `yarn ios` for start the emulator

# ADB Port Reverse

Is very important thing for a Android Developers knowing that. We need setting up the adb reverse for avoiding any trouble with internet connection

`adb reverse tcp:3333 tcp:3333`

What techs we used on this template?

- [x] React Navigation v6
- [x] Styled Components
- [x] Axios
- [x] Formik
- [x] React Hooks
- [x] Typescript
- [x] Eslint
- [ ] Jest(soon)
- [x] Yup
- [x] Prettier
- [x] Editor Config
- [x] Google Fonts
- [x] Lint Commit
- [ ] Storybook(soon)
- [x] Context API
- [x] React Native v.0.63

Yeah! For now, that's it! Soon we gonna have a couple new things working on this template!

