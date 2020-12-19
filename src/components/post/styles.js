
import {StyleSheet,  Dimensions, S} from 'react-native';

const styles = StyleSheet.create({
    video:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right:0,
    },
   
    container:{
        width: '100%',
        height: Dimensions.get('screen').height-45,
        
    },
    pauseButton:{
        padding: 20,
    },
    UIcontainer:{
        height:'100%',
        justifyContent:'flex-end',
        
       // backgroundColor:'red',
    },
   
    bottomContainer:{
        padding:13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    handle:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description:{
        color:'#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow:{
        flexDirection: 'row',
        alignItems: "center"
    },
    songName:{
        color:'#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songImage:{
        width:55,
        height:55,
        borderRadius: 50,
        bottom: -30,
      
    },
    songImagef:{
        width:35,
        height:35,
        borderRadius: 50,
        top: -15,
      
    },
    Disk:{
        flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'
    },
    //Right container
    rightContainer:{
        alignSelf:'flex-end',
        height:300,
        justifyContent: 'space-between',
        paddingRight: 5,
        alignItems: 'center'
    },
   
    iconContainer:{
        alignItems:'center',
       
    },

    statsLabel:{
        color:'#fff',
        fontSize:16,
    },
    profilePictureContainer:{

    },
    profilePicture:{
        width:55,
        height:55,
        borderRadius: 50,
        borderWidth:2,
        borderColor: '#fff'
    },
})

export default styles;