import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Camera } from "./pages/Camera";
import { Main } from "./pages/main";
import {Feather} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon: ({color}) => <Feather name={"home"} color={color} size={20}/>}} name="Main" component={Main} />
        <Tab.Screen options={{tabBarIcon: ({color}) => <Feather name={"camera"} color={color} size={20}/>}} name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  )

}