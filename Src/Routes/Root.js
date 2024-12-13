import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterNames} from './../Config/index';

import {
  AdvangedSearch,
  ForAppointment,
  ListScreen,
  SearchScreen,
  SeeAll,
  Splash,
  Login,
  CardDetail,
  Notifications,
  AppointmentDetails,
  HomePage,
  Agenda,
  Calendar,
} from './../Screens/index';

import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomNavigation} />
      <Stack.Screen
        name={RouterNames.NOTIFICATIONS}
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
      {/**top stack */}
      <Stack.Screen
        name={RouterNames.ADVANCED_SEARCH}
        component={AdvangedSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.APPOINTMENT_DETAILS}
        component={AppointmentDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.CARD_DETAIL}
        component={CardDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={RouterNames.HOMEPAGE}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={RouterNames.FOR_APPOINTMENT}
        component={ForAppointment}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.LIST_SCREEN}
        component={ListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.SEE_ALL}
        component={SeeAll}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.SPLASH}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.AGENDA}
        component={Agenda}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouterNames.CALENDAR}
        component={Calendar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Root;
