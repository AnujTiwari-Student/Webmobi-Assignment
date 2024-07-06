import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonProps {
  text: string;
  icon: any;
  iconSet?: 'ant' | 'material';
}

const Button: React.FC<ButtonProps> = ({ text, icon, iconSet = 'ant' }) => {
  return (
    <TouchableOpacity>
      <View style={tw`h-12 w-full bg-orange-500 rounded-3xl flex justify-center items-center flex-row gap-x-2`}>
        {iconSet === 'ant' && <AntDesign name={icon} size={18} color="white" />}
        {iconSet === 'material' && <MaterialIcons name={icon} size={24} color="white" />}
        <Text style={tw`text-white text-base font-bold`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
