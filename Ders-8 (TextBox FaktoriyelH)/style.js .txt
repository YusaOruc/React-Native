import { StyleSheet } from 'react-native'
export const styles=StyleSheet.create({
    container:{
      flex:1,
      alignContent:'flex-start',
      justifyContent:'space-between',
      //backgroundColor:"#f00",
      //flexDirection:"row"
    },
    textStyle:{color:"#fff",textAlign:"center",fontSize:24,},

    
    Header:{
        flex:2,
        backgroundColor:"#f10",
        alignContent:'center',
        justifyContent:'center',
    },
    Main:{
        flex:5,
        backgroundColor:"#f30",
        alignContent:'center',
        justifyContent:'center',
        flexDirection:"row",
    },
    Side:{
        flex:2,
        backgroundColor:"#f60",
        alignContent:'center',
        justifyContent:'center',
        
    },
    Content:{
        flex:5,
        backgroundColor:"#f80",
        alignContent:'center',
        justifyContent:'center',
        
    },
    Footer:{
        flex:1,
        backgroundColor:"#f40",
        alignContent:'center',
        justifyContent:'center',
    }

  })
  