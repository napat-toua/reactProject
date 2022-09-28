import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovie = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      const json = await response.json();
      setData(json.movies)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovie();
  }, [])

  const _renderItem = ({ item }) => {
    let urlToImage = (item.urlToImage !== null)
      ? item.urlToImage
      : 'https://via.placeholder.com/150';
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
          <Image
            resizeMode='cover'
            source={{ uri: urlToImage }}
            style={{ flex: 1, width: '100%', height: '100%' }}
          />
          <View style={{ width: 200, margin: 5 }}>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>{item.title}</Text>
            <Text style={{ fontSize: 10 }}>{item.source.name}</Text>
            <Text style={{ fontSize: 10, color: 'green' }}>Publish: {item.publishedAt}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({item}) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )
      }
    </View>
  );
}

export default App
