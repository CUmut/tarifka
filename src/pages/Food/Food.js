import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import FoodCard from '../../components/FoodCard/FoodCard';
import {API_MEALS} from '../../common';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

const Food = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {loading, data, error} = useFetch(`${API_MEALS}=${strCategory}`);

  const renderKey = item => item.idMeal;

  const handleFoodSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  renderFood = ({item}) => (
    <FoodCard meals={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      {data && (
        <FlatList
          data={data.meals}
          keyExtractor={renderKey}
          renderItem={renderFood}
        />
      )}
    </SafeAreaView>
  );
};

export default Food;
