//npm install @react-navigation/native
//npm install @react-navigation/native-stack
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './UI/IconButton';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
     <StatusBar style='dark'/>
     <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
          headerStyle: {
          backgroundColor: Colors.primary500,

        },    
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerTitle: 'Your Favorite Places',
        headerLeft: null,
        }}
        >
        <Stack.Screen name="ALLPlaces" component={AllPlaces} 
         options={({navigation})=>({
          //  title: 'Your Favorite Places',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          // headerTitleAlign: 'center',
          // headerTitle: 'Your Favorite Places',
          // headerLeft: null,
          headerRight: ({tintColor}) => 
          //   (
          //   <View style={{marginRight: 10}}>
          //     <Text style={{color: '#fff', fontSize: 18}}>Add</Text>
          //   </View>
          // )
          <IconButton  icon="add" 
          size={24} color={tintColor}
          onPress={() => navigation.navigate('AddPlace')}
          />
         })}
        />
        <Stack.Screen name="AddPlace" component={AddPlace} 
       options={{
        headerStyle: {
          backgroundColor: Colors.primary500,

        },    
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerTitle: 'Add a new place',
        headerLeft: null,
        }}
        />
      </Stack.Navigator>
     </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
