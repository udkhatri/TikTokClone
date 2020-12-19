import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles'
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Storage, API, graphqlOperation, Auth} from 'aws-amplify'
import {useRoute, useNavigation} from '@react-navigation/native'
import {v4 as uuidv4} from 'uuid';
import {createPost} from '../../../graphql/mutations'

const CreatePost = () => {
    const [description, setDescription] = useState('');
    const [videoKey, setVideoKey] = useState(null);
  
    const route = useRoute();
    const navigation = useNavigation();
  
    const uploadToStorage = async (imagePath) => {
      try {
        const response = await fetch(imagePath);
  
        const blob = await response.blob();
  
        const filename = `abcd.mp4`;
        const s3Response = await Storage.put(filename, blob);
  
        setVideoKey(s3Response.key);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      uploadToStorage(route.params.videoUri);
    }, []);
  
    const onPublish = async () => {
      // create post in the database (API)
      if (!videoKey) {
        console.warn('VIdeo is not yet uploaded');
        return;
      }
  
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
  
        const newPost = {
          videoUri: videoKey,
          description: description,
          userID: userInfo.attributes.sub,
          songID: '89e08c09-4d66-4c08-b283-003fa7f1e368',
        };
  
        const response = await API.graphql(
          graphqlOperation(createPost, {input: newPost}),
        );
        navigation.navigate("Home", { screen: "Home" });
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          value={description}
          onChangeText={setDescription}
          numberOfLines={5}
          placeholder={'Description'}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={onPublish}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Publish</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default CreatePost;