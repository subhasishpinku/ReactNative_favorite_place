import {FlatList ,StyleSheet , View, Text} from 'react-native';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';
function PlacesList({places}){
  if(!places || places.length === 0){
    return(
     <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
            No places added yet - start adding some!</Text>
    </View>
    );
  }

    return (
    <FlatList 
    data={places} 
    keyExtractor={(item) => item.id}
     renderItem={({item}) => <PlaceItem  place={item}/>}
        />
    );
}

export default PlacesList;
const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        padding: 20,
       },
       fallbackText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        color: Colors.primary200
       }
  });
