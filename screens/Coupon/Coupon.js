import React from "react"
import {
    View,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native"

import {
    Header,
    IconButton,
    TextButton,
    CouponCard
} from "../../components"
import { COLORS, SIZES, icons, images, dummyData } from "../../constants"

const Coupon = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = React.useState("available")
    const [coupons, setCoupons] = React.useState(dummyData.availableCoupons)

    function renderHeader() {
        return (
            <Header
                title="MY COUPON"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.black,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <TouchableOpacity
                        onPress={() => console.log('Account')}
                    >
                        <Image
                            source={images.profile}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                }
            />
        )
    }

    function renderTabButtons() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        borderRadius: SIZES.radius,
                        backgroundColor: (selectedTab == 'available') ? COLORS.darkbrown : COLORS.categorycolor
                    }}
                    label="Available"
                    labelStyle={{
                        color: (selectedTab == 'available') ? COLORS.white : COLORS.black,
                    }}
                    onPress={() => {
                        setSelectedTab("available")
                        setCoupons(dummyData.availableCoupons)
                    }}
                />

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        marginLeft: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: (selectedTab == 'used') ? COLORS.darkbrown : COLORS.categorycolor
                    }}
                    label="Used"
                    labelStyle={{
                        color: (selectedTab == 'used') ? COLORS.white : COLORS.black,
                    }}
                    onPress={() => {
                        setSelectedTab("used")
                        setCoupons(dummyData.usedCoupons)
                    }}
                />


            </View>
        )
    }

    function renderCoupons() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    data={coupons}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CouponCard couponItem={item} />
                    )}
                    ListFooterComponent={
                        <View style={{ height: 50 }} />
                    }
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.bgc
            }}
        >
            {renderHeader()}
            {renderTabButtons()}
            {renderCoupons()}
        </View>
    )
}

export default Coupon