import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {API_DETAIL} from '../../common';
import DetailCard from '../../components/DetailCard/DetailCard';

const Detail = ({route, onPress}) => {
  const {idMeal} = route.params;

  const {loading, data, error} = useFetch(`${API_DETAIL}=${idMeal}`);

  renderDetail = ({item}) => <DetailCard details={item} />;

  const renderKey = item => item.idMeal;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        keyExtractor={renderKey}
        renderItem={renderDetail}
      />
    </View>
  );
};

export default Detail;
