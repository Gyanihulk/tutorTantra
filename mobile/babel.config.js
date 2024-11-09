module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@components": "./src/components",
          "@theme": "./src/theme",
          "@screens": "./src/screens",
          "@layouts": "./src/layouts",
          "@utils": "./src/utils",
          "@navigation": "./src/navigation",
          "@assets": "./src/assets",
          "@stores": "./src/stores",
        }
      }
    ],
    "react-native-reanimated/plugin"
  ]
};
