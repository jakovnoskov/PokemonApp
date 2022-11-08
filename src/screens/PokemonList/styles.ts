import { StyleSheet, Platform, Dimensions } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fb",
    // padding: 10,
  },
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 5 : 0,
  },
  footer: {
    padding: 15,
  },

})