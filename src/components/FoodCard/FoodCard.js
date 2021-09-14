import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: meals.strMealThumb}}
            imageStyle={{borderRadius: 15}}
            style={styles.image}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {meals.strMeal}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
