import { Tabs } from 'expo-router';
import {
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const TabLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Defualt"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={28} color="gray" />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="human-greeting-variant" size={28} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarked"
        options={{
          title: 'MyList',
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name="bookmark" size={28} color="gray" />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
