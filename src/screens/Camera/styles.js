import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#000',
        
    },
    preview: {
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
    },
    button:{
        alignSelf: 'center',
        alignContent: 'center',
       justifyContent: 'center',
        //marginVertical: 10,
        
    },
    flipcamera:{
       
    },
    containeRecord:{
        padding:13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;