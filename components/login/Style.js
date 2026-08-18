import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 100 
  },
  title: {
    fontSize: 10,
    fontStyle: "bould"
  },
  subTytle: {
    opacity: 0.3
  },
  TextInput: {
    width: '100%',
    height: 30,
    backgroundColor: '#F3F4F6',
    borderColor: '#EBECED',
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    opacity: 0.5
  }
});