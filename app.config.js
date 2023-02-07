import "dotenv/config";

// upon compiling/building app add these env variables via "eas secret:create"
const API_URL = process.env.API_URL;

export default {
  "name": "InstaGrim",
  "slug": "InstaGrim",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "dark",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#121212"
  },
  "updates": {
    "fallbackToCacheTimeout": 0
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.benamager.capturize"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#121212"
    }
  },
  "web": {
    "favicon": "./assets/favicon.png"
  },
  "extra": {
    "eas": {
      "projectId": "afcd6b62-0bf2-4674-856b-03b1a8ca8a68"
    },
    apiUrl: API_URL
  }
}