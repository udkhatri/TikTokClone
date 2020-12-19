/* eslint-disable prettier/prettier */
//Post page

import {Storage} from 'aws-amplify'
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableWithoutFeedback, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import V1 from '../../Videos/V1.mp4';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Post = (props) => {

  const [post, setPost] = useState(props.post);
  //const {post} = props;
  const [paused, setPaused] = useState(false);
  const [isliked, setIsliked] = useState (false)
  const [videoUri, setVideoUri] = useState (''); 
  const onPlayPause = () => {
    setPaused(!paused);
  }

  const onLikePost=  () =>{
    const likesToAdd= isliked ? -1: 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
     })
    setIsliked(!isliked)
  }

  const getVideoUri = async () => {
    if (post.videoUri.startsWith('http')) {
      setVideoUri(post.videoUri);
      return;
    }
    setVideoUri(await Storage.get(post.videoUri));
  };
  useEffect(()=>{
    getVideoUri();
    console.log(videoUri);
  },[]);

  return (
    <View style={ styles.container}>
    <TouchableWithoutFeedback onPress={onPlayPause} style={ styles.videoPlayButton}> 
    
    <Video
        source={{uri: videoUri}}
        style= {styles.video}
        resizeMode={'cover'}
        onError={(e) => console.log(e)}
        repeat={true} 
        paused={paused}  
        muted
      />

      </TouchableWithoutFeedback>
   
      <View style={styles.UIcontainer}>

        <View style={styles.rightContainer}>
        
          <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={{uri: post.user.imageUri }} />
          </View> 
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress= {onLikePost}>
               <AntDesign name={'heart'} size={40} color={isliked ? 'red' : 'white'} />
               </TouchableOpacity>
               <Text style={styles.statsLabel}>{post.likes}</Text>
            </View>
            <View style={styles.iconContainer}>
               <FontAwesome name={'commenting'} size={40} color='white' />
               <Text style={styles.statsLabel}>{post.comments}</Text>
            </View>
            <View style={styles.iconContainer}>
            <FontAwesome name={'share'} size={40} color='white' style={styles.dropShadow} />
               <Text style={styles.statsLabel}>{post.share}</Text>
            </View>
            
         </View>
      
      
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>@{post.user.username}</Text>
              <Text style={styles.description}>{post.description}</Text>
              
              <View style={styles.songRow}>
                {/* icon */}
                <Entypo name={'beamed-note'} size={24} color='white'/>
                {/* icon */}
                <Text style={styles.songName}>{post.song.name}</Text>
              </View>
            </View>
            <View style={styles.Disk}>
              <Image style={styles.songImage} source={{uri: 'https://w7.pngwing.com/pngs/98/38/png-transparent-phonograph-record-lp-record-music-others-miscellaneous-album-disc-jockey-thumbnail.png' }} />
              <Image style={[styles.songImagef,  {
                  transform: [
                    { rotate: "45deg" },
                  ]
                }]}
                 source={{uri: post.song.imageUri }} />
            </View>
            
            </View> 
          </View>   
          
        </View>
  );
};

export default Post;
