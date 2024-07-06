import React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Qrcode from '../../components/Qrcode';
import Information from '../../components/Information';

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 m-5`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        <Button text="Share my card" icon='down' iconSet="ant" />
        <Qrcode />
        <View style={tw`h-64 bg-gray-300 rounded-xl mb-12 p-4 flex gap-5`}>
          <Information icon='share' text='Share my card' iconSet='fontAwesome' />
          <Information icon='credit-card' text='Add card to wallet' iconSet='Octicons' />
          <Information icon='screen-smartphone' text='Add card to Homescreen' iconSet='SimpleLineIcons' />
          <Information icon='email-multiple-outline' text='Create email signature' iconSet='MaterialCommunityIcons' />
          <Information icon='image-outline' text='Create virtual background' iconSet='Ionicons' />
        </View>
        <Button text="Share with AirDrop" icon='wifi-tethering' iconSet="material" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
