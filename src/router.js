import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListPage from './screens/listpage'
import AddList from './screens/addlist'
import UpdateList from './screens/updatelist'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ListPage'>

                <Stack.Screen 
                name="ListPage" 
                component={ListPage} 
                options={({ navigation }) => ({ 
                    title: 'Todo List',
                    headerRight: () => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('AddList')}
                        style={{ 
                            marginRight: 25
                        }}
                        >
                            <Text style={{ fontSize: 40}}>+</Text>
                        </TouchableOpacity>
                      ),
                })}
                />
                
                 <Stack.Screen 
                name="AddList" 
                component={AddList} 
                options={{ title: 'Add Todo List'}}
                />

               <Stack.Screen 
                name="UpdateList" 
                component={UpdateList} 
                options={{ title: 'Update Todo List'}}
                />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;