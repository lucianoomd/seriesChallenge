import { Alert, AppState } from 'react-native';
import { Container, FavoriteContainer, FlatList, ItemSeparator, SerieItemContainer, Text } from './styles';
import React, { useEffect, useState } from 'react';

import Icon from '../../components/Icon/Icon';
import Loader from '../../components/Loader/Loader';
import SearchInput from '../../components/SearchInput/SearchInput';
import Serie from '../../beans/Serie';
import SerieService from '../../services/SerieService'

const Home = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  const serieService = new SerieService()
  
  const navigateToSerieDetails = (serie) => (navigation.navigate('Serie Details', { title: serie.name, serie, handleFavorite, handleChangeAppState }))

  const keyExtractor = (item, index) => (item + index)

  useEffect(() => {
    AppState.addEventListener('change', handleChangeAppState)
    serieService.getFavoriteSeriesLocally()
    .then(response => {
      if (!response.error && response.data) {
        setFavoriteSeries(response.data)
      }
    })
  
    return () => {
      AppState.removeEventListener('change', handleChangeAppState)
    }
  }, []);
  
  const handleChangeAppState = (newState) => {
    if (newState !== "active") { // TODO: save data locally
      serieService.saveFavoriteSeriesLocally(favoriteSeries)
    }
  }

  const getSeries = async () => {
    setIsLoading(true)
    const response = await serieService.getSeries(searchText)

    let series = []
    if (response.error) {
      Alert.alert('Error', response.error)
    } else {
      series = response.data
    }
    setIsLoading(false)
    setSeries(series)
  };

  const getFavoriteSerieIndex = (series: Serie[], serieId: number) => {
    let serieIndexFound = -1
    series.forEach((serie, index) => {
      if (serie.id === serieId) serieIndexFound = index
    })
    return serieIndexFound
  }

  const removeFavoriteSerie = (serieIndex) => {
    const newFavoriteSeries = JSON.parse(JSON.stringify(favoriteSeries))
    newFavoriteSeries.splice(serieIndex, 1)
    setFavoriteSeries(newFavoriteSeries)
  }

  const addFavoriteSerie = (serie) => {
    const newFavoriteSeries = JSON.parse(JSON.stringify(favoriteSeries))
    newFavoriteSeries.push(serie)
    setFavoriteSeries(newFavoriteSeries)
  }

  const handleFavorite = (item: Serie) => {
    const favoriteSerieIndex = getFavoriteSerieIndex(favoriteSeries, item.id)
    if (favoriteSerieIndex === -1) addFavoriteSerie(item)
    else removeFavoriteSerie(favoriteSerieIndex)
  }

  const renderListItem = ({ item, index }) => {
    const handleSerieItem = () => navigateToSerieDetails(item)
    const handleFavoriteSerieItem = () => handleFavorite(item)
    const isFavorite = getFavoriteSerieIndex(favoriteSeries, item.id) !== -1

    return (
      <SerieItemContainer onPress={handleSerieItem}>
        <FavoriteContainer onPress={handleFavoriteSerieItem}>
          {isFavorite ? <Icon name="star" color="#FFF" /> : <Icon name="star-outline" color="#FFF" />}
        </FavoriteContainer>
        <Text>{item.name}</Text>
        <Icon name="chevron-right" color="#FFF" />
      </SerieItemContainer>
    )
  }

  return (
    <Container>
      {isLoading ? <Loader /> : (
        <FlatList
          ListHeaderComponent={
            <SearchInput
              text={searchText}
              changeText={setSearchText}
              placeholder="Search"
              handleSearch={getSeries}
            />
          }
          ItemSeparatorComponent={ItemSeparator}
          data={series}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
        />
      )}
    </Container>
  )
};

export default Home;