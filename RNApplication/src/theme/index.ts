import { Theme } from "react-native-elements";

import colors from "./colors";

export const customTheme: Theme = {
    colors: {
        primary: colors.primary,
        secondary: colors.secondary
    },
    Header: {
        backgroundColor: colors.primary,
        statusBarProps: {
            backgroundColor: colors.primary,
            translucent: false
        },
        
    },
}