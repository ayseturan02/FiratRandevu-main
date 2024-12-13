import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterNames} from './../Config/index';
import {
  HomePage,
  Takvimim,
  Profile,
  MSettings,
  Agenda,
  Calendar,
} from './../Screens/index';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import {
  setting,
  user,
  calendar1,
  home,
  plus,
  calendar,
} from './../Assets/icons/index';
import {bottom} from './../Assets/images/index';
import styles from './styles';

const Tab = createBottomTabNavigator();
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const CustomTabBar = ({state, descriptors, navigation, isKeyboardVisible}) => {
  if (isKeyboardVisible) {
    return null; // Klavye açıldığında tabbar tamamen gizlenecek
  }

  return (
    <View style={styles.tabContainer}>
      <Image
        source={bottom}
        style={{
          width: windowWidth * 1,
          height: windowWidth * 0.2,
          position: 'absolute',
          bottom: 0,
        }}
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name === RouterNames.CALENDAR1) {
            return;
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          if (route.name !== RouterNames.CALENDAR) {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          }
        };

        const iconSource = () => {
          switch (route.name) {
            case RouterNames.HOMEPAGE:
              return home;
            case RouterNames.SETTİNGS:
              return setting;
            case RouterNames.AGENDA:
              return calendar;
            case RouterNames.CALENDAR1:
              return calendar1;
            case RouterNames.CALENDAR:
              return calendar;
            case RouterNames.PROFILE:
              return user;
            default:
              return home;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}>
            <Image
              source={iconSource()}
              style={{
                ...styles.icon,
                tintColor:
                  route.name === RouterNames.CALENDAR1
                    ? 'rgba(0,0,0,0)'
                    : isFocused
                    ? '#7C1241'
                    : '#808080',
              }}
            />
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          bottom: windowHeight * 0.12,
          width: windowWidth,
          alignItems: 'center',
          position: 'absolute',
        }}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => navigation.navigate(RouterNames.CALENDAR)}
          style={styles.plusButton}>
          <Image source={plus} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BottomNavigation = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <CustomTabBar {...props} isKeyboardVisible={isKeyboardVisible} />
      )}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouterNames.HOMEPAGE} component={HomePage} />
      <Tab.Screen name={RouterNames.SETTİNGS} component={MSettings} />
      <Tab.Screen name={RouterNames.CALENDAR1} component={Calendar} />
      <Tab.Screen name={RouterNames.AGENDA} component={Agenda} />
      <Tab.Screen name={RouterNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
