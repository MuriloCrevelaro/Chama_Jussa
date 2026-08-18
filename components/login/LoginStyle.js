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
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 10,
    marginBottom: 100 
  },
  container3: {
    width: "100%",
    backgroundColor: '#fff'
  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    fontSize: "20px"
  },
  subTytle: {
    opacity: 0.3,
  },
  TextInput: {
    width: '100%',
    height: 35,
    backgroundColor: '#c1c1c1',
    borderColor: '#7e7e7e',
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    opacity: 0.5
  },
  button:{
    borderRadius:5 ,
    backgroundColor: "#10B981",
    height: 40,
    width: '100%',
    justifyContent: "center",
    alignItems:"center",
    color: "#fff",
    fontWeight: 'bold',
    fontFamily:'Montserrat, sans-serif',
    fontSize:"14px"
  }
});