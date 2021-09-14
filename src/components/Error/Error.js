import React from 'react';
import LottieView from 'lottie-react-native';

function Error() {
  return (
    <LottieView
      source={require('../../assets/Error.json')}
      autoPlay></LottieView>
  );
}

export default Error;
