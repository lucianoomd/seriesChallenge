import { Container, Image, Text } from './styles';

import Episode from '../../beans/Episode';
import React from 'react';

const EpisodeDetails = ({ navigation, route }) => {
  const episode: Episode = route.params.episode
  
  return (
        <Container>
          <Image source={{uri: episode.poster ? episode.poster : 'https://www.rajnathsingh.in/wp-content/uploads/2016/09/noImg.png'}} />
    
          <Text>Summary: {episode.summary ? episode.summary : 'not available'}</Text>
        </Container>
  )
};

export default EpisodeDetails;