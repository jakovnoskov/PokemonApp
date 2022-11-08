import { StyleSheet, Platform, Dimensions } from "react-native"

export default StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  card__spacing: {
    flex: 1,
    padding: 5,
    width: '90%',
    backgroundColor: "#e7ebf4",
    borderRadius: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  card__name: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    textAlignVertical: "center",
    textAlign: "center",
    textTransform: 'capitalize'
  },
})