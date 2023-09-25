import React from 'react';
import { View, } from 'react-native';

export const CustomContainer = ({ children, style }) => {
    return (
        <View style={[style]} onTouchStart={(e) => e.stopPropagation()}>
            {children}
        </View>
    );
};