import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const CartQuantityButton = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.bgc,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icons.cart}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    top: -9,
                    right: -5,
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.darkbrown,
                }}
            >
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.body5,
                        lineHeight: 0,
                        fontSize: 15,
                    }}
                >
                    {quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartQuantityButton;