import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "#ffd33d", headerStyle: {backgroundColor: "#25292e"}, headerShadowVisible: false, headerTintColor: "#fff", tabBarStyle: {backgroundColor: "#25292e"}}}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color, focused}) =>(<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}  />) }} />
      <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />)  }} />
      <Tabs.Screen name="contact" options={{title: 'Contact', tabBarIcon: ({color, focused}) => (<MaterialIcons name={focused ? 'support-agent' : 'support-agent'}  color={color} size={24}/>)}} />
    </Tabs>
  );
}
