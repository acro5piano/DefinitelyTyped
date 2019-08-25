// Type definitions for react-native-repro 2.0
// Project: https://github.com/auth0/react-native-auth0
// Definitions by: Andrea Ascari <https://github.com/ascariandrea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

class Repro {
    track(eventName: string, params: { [key: string]: string | number }): void;
}

const repro: Repro;
export = repro;
