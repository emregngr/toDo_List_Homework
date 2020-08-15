import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity 
          activeOpacity={0.8}
          onPress={props.onPress}
          style={[{ 
            backgroundColor: 'red', 
            width: '90%', 
            height: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6
            }, props.style]}>
            <Text style={{ 
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: 20}}>
              {props.text}</Text>
          </TouchableOpacity>
);

export {Button};