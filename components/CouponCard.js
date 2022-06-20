import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import { FONTS, COLORS, SIZES, images } from "../constants";

const CouponCard = ({ couponItem }) => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
                backgroundColor: COLORS.bgc
            }}
        >
            <ImageBackground
                source={images.coupon}
                resizeMode="stretch"
                style={{
                    width: '100%',
                    height: 120,
                    backgroundColor: COLORS.bgc
                }}
            >
                <View style={{ flexDirection: 'row', }}>
                    <View
                        style={{
                            width: (SIZES.width - (2 * SIZES.padding)) * 0.45,
                            height: 120,
                            alignItems: 'center',
                            justifyContent: 'center',
                            //backgroundColor: COLORS.white
                        }}
                    >
                        <Image
                            source={couponItem.image}
                            style={{
                                width: 90,
                                height: 90,
                                //backgroundColor: COLORS.white

                            }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', marginLeft: SIZES.radius, }}>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkbrown }}>{couponItem.name}</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.lightbrown }}>{couponItem.discountPercent}% Off</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.black }}>{couponItem.description}</Text>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default CouponCard;