import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_CATEGORY} from '../../common';
import styles from './Categories.style';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(`${API_CATEGORY}`);

  const handleCategorySelect = strCategory => {
    navigation.navigate('FoodPage', {strCategory});
  };

  const renderCategory = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}></CategoriesCard>
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderCategory}></FlatList>
    </SafeAreaView>
  );
};

export default Categories;
