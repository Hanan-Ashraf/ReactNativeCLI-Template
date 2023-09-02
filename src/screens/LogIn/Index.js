import React from 'react';
import Main from '../../components/Auth/Main';

export default function Index({navigation}) {
  return (
    <Main
      mainTxt={'Welcome!'}
      descTxt={'Log In Screen'}
      btnTitle={'Go To Sing Up'}
      onPress={() => navigation.navigate('SignUp')}
    />
  );
}
