### React Native UI Library

1. For creating a new component, follow these steps:
    -  ```pnpm run create-component ABCDE```
    - Then install the package like this in expo-native
        ```"@rms-apps/ui-abcde": "workspace:*"```
    - Then update the tailwind.config.js file in expo-native to apply tailwind classes
        ```'../../packages/ABCDE/src/**/*.{js,jsx,ts,tsx}'```
