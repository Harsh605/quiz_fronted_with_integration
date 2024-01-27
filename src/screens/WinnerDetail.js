import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { base_url } from './Base_url';
import AsyncStorage from "@react-native-async-storage/async-storage";



const WinnerDetail = ({ navigation }) => {
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(1)

    const [mydata, setMydata] = useState([])


    const leadershipApi = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `${await AsyncStorage.getItem("token")}`);
            myHeaders.append("Content-Type", "application/json");

            console.log(`${await AsyncStorage.getItem("g_id")}`);

            var raw = JSON.stringify({
                "gameId": `${await AsyncStorage.getItem("g_id")}`
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${base_url}/quiz-leadership`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success == true) {
                        console.log(result.data.gameLeadership)
                        setMydata(result.data.gameLeadership)

                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {

        }
    }

    useEffect(() => {
        leadershipApi();
    }, [])


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }} >
            <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />

            <View style={{ height: responsiveHeight(7), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 15 }}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', alignSelf: 'center', marginTop: 15, marginLeft: '24%' }}>Winner Details</Text>
                </View>
            </View>

            <View
                style={{
                    height: responsiveHeight(8.1),
                    flexDirection: "row",
                    width: responsiveWidth(95),
                    alignSelf: "center",
                    marginTop: 20,
                    borderRadius: 10,
                    backgroundColor: "#6A5AE0",
                }}
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        height: responsiveHeight(5.5),
                        width: responsiveWidth(70),
                        borderRadius: 10,
                        justifyContent: "center",
                        marginTop: 10,
                        flexDirection: "row",
                        marginHorizontal: 20,
                    }}
                >
                    <View
                        style={{
                            flex: 0.15,
                            justifyContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <Image
                            source={require("../images/search.png")}
                            style={{
                                tintColor: "#C0C0C0",
                                height: responsiveHeight(3),
                                width: responsiveWidth(6),
                                marginLeft: 10,
                            }}
                        />
                    </View>

                    <View
                        style={{ flex: 0.8, justifyContent: "center", alignSelf: "center" }}
                    >
                        <TextInput
                            require
                            placeholder="Search here.."
                            placeholderTextColor={"#000"}
                            style={{
                                color: "#000",
                                marginLeft: 15,
                                fontWeight: "400",
                                fontSize: 17,
                                fontFamily: "Jaldi-Regular",
                            }}
                        />
                    </View>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <Image
                        source={require("../images/calender.png")}
                        style={{
                            tintColor: "#fff",
                            height: responsiveHeight(4),
                            width: responsiveWidth(8),
                            marginLeft: 10,
                        }}
                    />
                </View>
            </View>

            <View
                style={{
                    height: responsiveHeight(42),
                    width: responsiveWidth(95),
                    marginBottom: 10,
                    paddingHorizontal: 20,
                    backgroundColor: "#fff",
                    alignSelf: "center",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: responsiveHeight(6),
                        width: responsiveWidth(90),
                        borderRadius: 2,
                        marginTop: 10,
                        backgroundColor: "#fff",
                        alignSelf: "center",
                    }}
                >
                    <Text
                        style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
                    >
                        Rank
                    </Text>

                    <Text
                        style={{
                            alignSelf: "center",
                            color: "#000",
                            fontWeight: "500",
                            marginLeft: 10,
                            marginRight: 30
                        }}
                    >
                        Name
                    </Text>

                    <Text
                        style={{
                            alignSelf: "center",
                            color: "#000",
                            fontWeight: "500",
                            marginRight: 10,
                        }}
                    >
                        Id
                    </Text>


                    <Text
                        style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
                    >
                        Point
                    </Text>
                </View>

                {
                    mydata?.map((res) => {
                        return (
                            <>
                            {
                                
                            }
                                
                            </>
                        )
                    })
                }






            </View>

        </SafeAreaView>
    )
}

export default WinnerDetail