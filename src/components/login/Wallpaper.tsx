import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../../../assets/images/wallpaper.png';

 const Wallpaper = (props : any) => {
  return (
    <ImageBackground style={styles.picture} source={bgSrc} />
  );
}

export default Wallpaper;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    resizeMode: 'cover',
  },
});

