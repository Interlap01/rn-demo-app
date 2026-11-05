# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Demo React Native app for testing [ios-builder](https://github.com/MobAI-App/ios-builder) - a CLI tool enabling iOS development from non-Mac platforms via GitHub Actions.

## Build Commands

```bash
npm start                      # Start Metro bundler
npm run ios                    # Run on iOS simulator
npm run android                # Run on Android emulator
npm run lint                   # Run ESLint
npm test                       # Run Jest tests
```

### ios-builder (Remote iOS Builds)
```bash
builder auth github            # Authenticate with GitHub
builder init                   # Initialize ios-builder
builder ios build              # Build iOS remotely (IPA -> ./dist/)
```

## Architecture

- **React Native 0.83** with TypeScript and New Architecture enabled
- **Entry point**: `index.js` → `App.tsx`
- **iOS**: Uses CocoaPods (`ios/Podfile`), workspace at `ios/RnDemoTemp.xcworkspace`
- **Android**: Gradle-based (`android/`)
- **Testing**: Jest with `react-test-renderer`
