import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.black,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Calories and Favourite */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        source={icons.calories}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text style={{ ...FONTS.body5, color: COLORS.darkGray3 }}>{item.calories} Calories</Text>
                </View>
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isFavourite ? COLORS.lightbrown : COLORS.darkGray3
                    }}
                />
            </View>

            {/* Image */}
            <View
                style={{
                    height: 100,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    style={{ height: "100%", width: "100%" }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 10
                }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.bgc }}>{item.name}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.darkGray3, textAlign: 'center' }}>{item.description}</Text>
                <Text style={{ ...FONTS.h2, marginTop: SIZES.radius, color: COLORS.darkbrown }}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard