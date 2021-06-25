import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',

  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  modal: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.secondary100,
    textAlign: 'center'
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
})