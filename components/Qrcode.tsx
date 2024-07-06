import { View, Text } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import tw from 'twrnc'

const Qrcode = () => {
  return (
    <View style={tw`w-full flex items-center justify-center my-5 h-64`}>
        <QRCode value='https:nexalink.co.' size={200} />
    </View>
  )
}

export default Qrcode