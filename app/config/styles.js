import { Platform, Text } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
