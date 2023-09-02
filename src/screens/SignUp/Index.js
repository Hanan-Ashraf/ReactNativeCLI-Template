import React from 'react';
import Main from '../../components/Auth/Main';

const Index = ({navigation}) => {
  return (
    <Main
      mainTxt={'Start Your Native Journey!'}
      descTxt={'Sign Up Screen'}
      btnTitle={'Go to Log In'}
      onPress={() => navigation.navigate('LogIn')}
    />
  );
};

export default Index;
