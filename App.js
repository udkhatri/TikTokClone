import React,{useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Home from './src/screens/Home/Index';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/index';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth , API, graphqlOperation} from 'aws-amplify';
import {createUser} from './graphql/mutations'
import {getUser} from './graphql/queries'
//import Post from './src/components/post/index'

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]
const getRandomImage = () =>{
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};

const App = () => {

  useEffect(()=>{
    const fetchUser = async () => {
        //get currently authorised user
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
        //console.log(userInfo);

        if (!userInfo){
          return;
        }

        // check if user exist in database
        const getUserResponse = await API.graphql(
          graphqlOperation(
            getUser,
            {id: userInfo.attributes.sub}
          )
        );
        if (getUserResponse.data.getUser) {
          console.log('user exist in DB');
          return;
        }
        // if it doesn't (it's newly registerded user)
        // then, create a new user in database
        const newUser = {
          id: userInfo.attributes.sub,
          username: userInfo.username,
          email: userInfo.attributes.email,
          imageUri: getRandomImage(),
        };
        
        await API.graphql(
          graphqlOperation(
            createUser,
            {input: newUser}
          )
        )
    };
    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent  />
      <SafeAreaView style={{flex:1}} >
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App) ;
