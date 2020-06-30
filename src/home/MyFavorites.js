import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TouchableButton from './TouchableButton';
import Message from './Message';
import MessageButton from './MessageButton';

const DEFAULT_FAVORITE_DATA = [
  {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqaS7bY6vzBozY1HFloqfKYrIBqMIQoqmOgQ&usqp=CAU',
    repository: 'ddaaac/lotto'
  },
  {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqaS7bY6vzBozY1HFloqfKYrIBqMIQoqmOgQ&usqp=CAU',
    repository: 'ddaaac/racing-car'
  },
  {
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqaS7bY6vzBozY1HFloqfKYrIBqMIQoqmOgQ&usqp=CAU',
    repository: 'ddaaac/java-black-jack'
  },
];

const MyFavorites = () => {
  const favoriteData = DEFAULT_FAVORITE_DATA;

  const convertDataToButton = (favorite) => {
    const icon = <Image style={styles.imageContainer} source={{ uri: favorite.imageUri }}/>;
    return (
      <TouchableButton
        key={favorite.repository}
        icon={icon}
      >
        {favorite.repository}
      </TouchableButton>);
  };

  return (
    <View>
      {favoriteData.length !== 0 ?
        favoriteData.map(convertDataToButton)
        :
        <View>
          <Message>
            Add favorite repositories here to have quick access at any time, without having to
            search
          </Message>
          <MessageButton>Add Favorites</MessageButton>
        </View>
      }
    </View>
  )
};

export default MyFavorites;

const styles = StyleSheet.create({
  imageContainer: {
    width: 32,
    height: 32,
  },
});
