/* eslint-disable prettier/prettier */
// Home Page

import React, {useEffect} from 'react';
import {Text, View,FlatList, Dimensions} from 'react-native';
import Post from '../../components/post/index';
//import posts from '../../../data/posts';
import V1 from '../../Videos/V1.mp4'
import {API, graphqlOperation} from  'aws-amplify';
import { listPosts } from '../../../graphql/queries';
import { useState } from 'react';

const Home = () => {

  const [posts, setPosts ] = useState ([]);
  useEffect(()=>{
    const fetchPosts = async () => {
      //fetch all the posts
      try{
        const responce = await API.graphql(graphqlOperation(listPosts));
        //console.log(responce);
        setPosts (responce.data.listPosts.items)
      }
      catch(e){
        console.error(e);
      }
    };

    fetchPosts();
  }, [])
 // console.warn('home')
  return (
    <View>
      <FlatList
          data= {posts}
          renderItem={({item}) => <Post post={item}/>} 
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('screen').height-45}
          snapToAlignment={"center"}
          decelerationRate={'normal'}
          
      />
    </View>
  );
};

export default Home;
