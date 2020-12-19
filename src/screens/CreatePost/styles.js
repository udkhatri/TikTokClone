import {StyleSheet, StatusBar} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
         //paddingTop: 30,
         padding:5,
         justifyContent: 'space-between',
    },
    preview: {
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#ff4747',
         alignSelf : 'center',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center', 
        height: 50,
        width: 150,
        borderRadius: 5,
        flexDirection: 'row'
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textInput:{
        margin: 10,
        backgroundColor:'#fff'
    }
    
});

export default styles;