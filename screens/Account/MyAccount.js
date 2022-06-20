import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {
    Header,
    IconButton,
    TextButton,
    InfoItem
} from "../../components"
import { COLORS, SIZES, icons } from "../../constants"

const MyAccount = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title="MY ACCOUNT"
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
                    <TextButton
                        label="Edit"
                        labelStyle={{
                            color: COLORS.black
                        }}
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        onPress={() => navigation.navigate("MyAccountEdit")}
                    />
                }
            />
        )
    }

    function renderSectionOne() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="Full Name"
                    value="Ahmad"
                />

                <InfoItem
                    label="Phone Number"
                    value="054-2393633"
                />

                <InfoItem
                    label="User ID"
                    value="1111 2222"
                    withDivider={false}
                />
            </View>
        )
    }

    function renderSectionTwo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="ID Card"
                    value="207889288"
                />

                <InfoItem
                    label="Date of Birth"
                    value="04/08/1999"
                />

                <InfoItem
                    label="Gender"
                    value="Male"
                />

                <InfoItem
                    label="Joined"
                    value="March 2017"
                />

                <InfoItem
                    label="Email"
                    value="gnaiemahmad99@gmail.com"
                />

                <InfoItem
                    label="Address"
                    value="Baqa Al Garbih "
                    withDivider={false}
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

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
            >
                {renderSectionOne()}
                {renderSectionTwo()}
            </ScrollView>
        </View>
    )
}

export default MyAccount;