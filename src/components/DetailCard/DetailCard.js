import React from 'react';
import {Text, View, Image, Button, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({details}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: details.strMealThumb}} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{details.strMeal}</Text>
        <Text style={styles.area}>{details.strArea}</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.text}>{details.strInstructions}</Text>
      </View>
      <View style={styles.link}>
        <Button
          title="Watch on Youtube"
          color="white"
          style={styles.button}
          onPress={() => {
            Linking.openURL(details.strYoutube);
          }}></Button>
      </View>
    </View>
  );
};

export default DetailCard;
