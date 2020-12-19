import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useRef } from 'react';
import {useNavigation} from '@react-navigation/native'

const  Camera= () => {
    const [isRecording, setIsRecording] = useState(false);
    const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.front);
    const camera = useRef();

    const navigation = useNavigation();

    const onRecord = async () =>{
        if (isRecording){
            camera.current.stopRecording();
           
        }else{
            const data = await camera.current.recordAsync();
            navigation.navigate('CreatePost', {videoUri: data.uri});
        }
    }
  

    const switchCamera = () => {
        setCameraType((prevCameraType) =>
          prevCameraType === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front: RNCamera.Constants.Type.back
        );
      };

    return(
    <View style={styles.container}>
       <RNCamera
            defaultVideoQuality = {"480p"}
            useNativeZoom = {true}
            ref = {camera}
            onRecordingStart={()=> {setIsRecording(true);}}
            onRecordingEnd={()=> setIsRecording(false)}
            
            type= {cameraType}
            style={styles.preview}
       />
       <View style={styles.containeRecord}>
       <Text style={{width:30}}>'   '</Text>
        <TouchableOpacity onPress={onRecord} >
            <FontAwesome5 name={isRecording ? "stop-circle" : "circle-slice-8"} color={'#ff4343'} size={70}  style={styles.button}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={switchCamera}>
            <FontAwesome5 name={cameraType ? 'camera-rear' : 'camera-front'} color={'#fff'} size ={30} style={styles.flipcamera} />
            </TouchableOpacity>
       </View>
      
     
       
    </View>
);
    }
export default Camera;
