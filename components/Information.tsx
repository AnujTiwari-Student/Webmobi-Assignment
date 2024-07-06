import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import tw from 'twrnc'

interface InformationProps {
    text: string;
    icon: any;
    iconSet?: 'SimpleLineIcons' | 'fontAwesome' | 'Octicons' | 'MaterialCommunityIcons' | 'Ionicons';
  }

const Information: React.FC<InformationProps> = ({icon , text , iconSet}) => {
  return (
    <View style={tw`flex flex-row gap-x-5 items-center`}>
        {iconSet === 'fontAwesome' &&<FontAwesome name={icon} size={22} color="gray" />}
        {iconSet === 'Octicons' &&<Octicons name={icon} size={24} color="gray" />}
        {iconSet === 'SimpleLineIcons' &&<SimpleLineIcons name={icon} size={24} color="gray" />}
        {iconSet === 'MaterialCommunityIcons' &&<MaterialCommunityIcons name={icon} size={24} color="gray" />}
        {iconSet === 'Ionicons' &&<Ionicons name={icon} size={24} color="gray" />}
        <Text style={tw`text-gray-500 text-lg`}>{text}</Text>
    </View>
  )
}

export default Information