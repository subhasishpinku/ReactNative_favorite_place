//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//expo install expo-image-picker
//npm install expo-cli
//npm install -g expo-cli
//expo upgrade 51.0.0
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
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
         options={(
          {navigation})=>({
          headerRight: ({tintColor}) => 
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

});
