import { Container, FlatList, HeaderListButton, Image, ItemSeparator, SerieItemContainer, Text } from './styles';
import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import Episode from '../../beans/Episode';
import Icon from '../../components/Icon/Icon';
import Loader from '../../components/Loader/Loader';
import Serie from '../../beans/Serie';
import SerieService from '../../services/SerieService'

const SerieDetails = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [showEpisodes, setShowEpisodes] = useState(undefined);
  const serie: Serie = route.params.serie
  
  const serieService = new SerieService()
  
  const navigateToEpisodeDetails = (episode: Episode) => (
    navigation.navigate('Episode Details', {
      title: `S${episode.season}E${episode.number}${episode.name}`,
      episode
    })
  )
  
  const keyExtractor = (item, index) => `${item.id}${item.index}`

  const getEpisodes = async () => {
    setIsLoading(true)
    const response = await serieService.getEpisodes(serie.id)

    let episodes = []
    if (response.error) {
      Alert.alert('Error', response.error)
    } else {
      episodes = response.data
    }
    setIsLoading(false)
    setEpisodes(episodes)
  };

  const renderListItem = ({ item, index }) => {

    const handleEpisodeItem = () => {
      navigateToEpisodeDetails(item)
    }

    return (
      <SerieItemContainer onPress={handleEpisodeItem}>
        <Text>{item.name}</Text>
        <Icon name="chevron-right" color="#FFF" />
      </SerieItemContainer>
    )
  }

  const toggleShowEpisodes = () => setShowEpisodes(!showEpisodes)

  const handleShowEpisodes = () => {
    if (showEpisodes === undefined) {
      getEpisodes()
    }
    toggleShowEpisodes()
  }

  return (
    <FlatList
      ListHeaderComponent={
        <Container>
          {isLoading ? <Loader /> : null}
          <Image source={{uri: serie.poster ? serie.poster : 'https://www.rajnathsingh.in/wp-content/uploads/2016/09/noImg.png'}} />
    
          <Text>Rating: {serie.ratingAverage ? serie.ratingAverage : 'none'}</Text>
          <Text>Schedule: {serie.schedule}</Text>
          <Text>Summary: {serie.summary ? serie.summary : 'not available'}</Text>

          <HeaderListButton onPress={handleShowEpisodes}>
            <Text>EPISODES</Text>
            {showEpisodes ? <Icon name="chevron-down" /> : <Icon name="chevron-up" />}
          </HeaderListButton>

        </Container>
      }
      ItemSeparatorComponent={ItemSeparator}
      data={showEpisodes ? episodes : []}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
    />
  )
};

export default SerieDetails;