import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
   input: {
    width: 'auto',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  actionBar: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'cyan',
  },
  button: {
    width: '50%',
    paddingHorizontal: 10,
  },
})

export default Style;
