import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { useSocket } from "./Context/SocketContext";
import { disabled } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import io from 'socket.io-client';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native'
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { base_url } from "./Base_url";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';





//questionId,gameId,question,timeTaken,answer,rawPoints,rM,rC
//type:"RIGHT" or "WRONG"


const MyLeaderBoard = ({ navigation, route }) => {

  const { questionData, t, gameId } = route.params

  const [select, setSelect] = useState("");
  const [checked, setChecked] = useState("first");
  const [correct, setCorrect] = useState(0);
  const [save, setSave] = useState(false);
  const [confirm, setConfirm] = useState(0)
  const [no_qu, setno_qu] = useState(0)
  const [final,] = useState('')

  const [mysocket, setMySocket] = useState(null);

  const [modalVisible7, setModalVisible7] = useState(false);
  const openModal7 = () => setModalVisible7(true);
  const closeModal7 = () => setModalVisible7(false);

  const [modalVisible8, setModalVisible8] = useState(false);
  const openModal8 = () => setModalVisible8(true);
  const closeModal8 = () => setModalVisible8(false);

  const [seconds, setSeconds] = useState(25);
  const [initialSeconds, setInitialSeconds] = useState(25);
  const [isTimerRunning, setTimerRunning] = useState(true);

  const [activeanalysis, setActiveanalysis] = useState(false);

  const [btndisebal, setbtndisebal] = useState(false)
  const socket = useSocket();
  // const route = useRoute();

  const widthAndHeight = 150;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#6A5AE0', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

  const data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        data: [28, 45, 15, 35],
      },
    ],
  };


  // const gameid = route.params?.idgame || null;
  // const userid = route.params?.iduser || null;



  // console.log(socket, "myleaderboardsocket");

  const [left, setleft] = useState(0)
  const [question, setQuestion] = useState("");
  const [option, setoption] = useState([]);
  const [noOfQuestion, setnoOfQuestion] = useState()
  const [mainValuerl, setmainValuerl] = useState(5.5)
  const [correctvalue, setcorrectvalue] = useState(5.5)
  const [sumdata, setsumdata] = useState(0)
  const [sumdata2, setsumdata2] = useState(0)
  const [allData, setallData] = useState()

  const [getId, setGetId] = useState()
  const [mygameId, setMygameId] = useState()
  const [myanswer, setMyanswer] = useState()
  const [hindiQseon, setHindiQseon] = useState("");
  const [opsion, setOpsion] = useState([]);
  const [questionID, setquestionID] = useState("")
  const [index, setIndex] = useState(0);
  const [leftQustion, setleftQustion] = useState(0)
  const [modelVive, setmodelVive] = useState(false)
  // useEffect(async() => {
  //   const connectSockett = async () => {
  //   const socket = io('http://3.111.23.56:5059');

  //   // Event listener for connection success
  //  // Event listener for receiving messages from the server
  //   socket.on('message', (data) => {
  //     console.log('Received message from the server: kkk', data);
  //   });

  //   // Event listener for receiving questions from the server
  //   socket.on('get-question', async (questionData) => {
  //     try {
  //       await setleft(questionData.q_left)
  //       await setnoOfQuestion(questionData.noOfQuestion)
  //       let leg = await AsyncStorage.getItem("lang")
  //       if (leg == "ENGLISH") {

  //         await setQuestion(questionData.question.questionInEnglish);
  //         await setoption(questionData.question.optionsInEnglish)
  //         await setGetId(questionData.question._id)
  //         await setMygameId(questionData.question.gameId)
  //         await setMyanswer()

  //       } else {
  //         await setQuestion(questionData.question.questionInHindi);
  //         await setoption(questionData.question.optionsInHindi);
  //         await setGetId(questionData.question._id)
  //         await setMygameId(questionData.question.gameId)
  //         await setMyanswer(questionData.question.optionsInEnglish[0].id)


  //       }
  //       // Update the component state with the received question
  //       console.log('Received question from the server: jon', JSON.stringify(questionData));
  //       await setSelect("")
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   });
  // };
  // connectSockett();
  // }, []);

  const right = 5.5;
  const wrong = 3.5;

  const A = 0;
  const B = 1;
  const C = 2;
  const D = 3;
  const E = 4;
  const F = 5;
  const G = 6;
  const H = 7;
  const I = 8;
  const J = 9;


  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(interval);
          // Handle timer completion here
        }
      }, 1000);
    }

    // Clear the interval when the component unmounts or when the timer is stopped
    return () => clearInterval(interval);
  }, [seconds, isTimerRunning, index]);



  const calculation = (a, b) => {
    console.log(a, "jj", b);
    let a1 = parseFloat(a);
    let a2 = parseFloat(b);

    let sum = parseFloat(a1 + a2).toFixed(2);
    console.log(sum);
    let string = sum.toLocaleString()
    console.log("olll", string);
    let string2 = string.slice(0, 2)
    let arr = string.split(".")
    let tostr = arr[0].toString()
    let sum2 = 0;
    for (let i = 0; i < tostr.length; i++) {
      sum2 += parseInt(tostr[i])

    }


    setsumdata(parseFloat(`${sum2}.${arr[1]}`) + initialSeconds)
    // console.log(`${sum2}.${arr[1]}`)
    setsumdata2(`${sum2}.${arr[1]}`)
    console.log(parseFloat(sumdata2), `${sum2}.${arr[1]}`)
    return `${sum2}.${arr[1]}`


  }

  // console.log(initialSeconds,"initialSeconds");
  // console.log(sumdata2,"sumdata");
  var count = 0;

  const sendData = async (rcd) => {
    const socket = io('http://3.111.23.56:5059');
    if (!select) {
      return alert("select answer")
    }
    setTimeout(async () => {
      socket.emit("give_answer", {

        questionId: await questionID,
        gameId: await gameId,
        question: await hindiQseon,
        timeTaken: await initialSeconds,
        answer: await select,
        userId: await AsyncStorage.getItem("user_id"),
        rawPoints: await rcd,
        rM: await mainValuerl,
        rC: await correct
      })
    }, 1000)
    setbtndisebal(true)
    setmodelVive(true)
  }
  const savebtn = () => {
    // alert(parseFloat(parseFloat(initialSeconds)))

    let sum = parseFloat(parseFloat(sumdata2) + parseFloat(initialSeconds)).toFixed(2);
    console.log(sum);
    let string = sum.toLocaleString()
    console.log("olll", string);
    let string2 = string.slice(0, 2)
    let arr = string.split(".")
    let tostr = arr[0].toString()
    let sum2 = 0;
    for (let i = 0; i < tostr.length; i++) {
      sum2 += parseInt(tostr[i])

    }
    setallData(parseFloat(`${sum2}.${arr[1]}`).toFixed(1))
    sendData(parseFloat(`${sum2}.${arr[1]}`).toFixed(1))
    // count++;
    // if(count===1){
    //   savebtn();
    // }else return;
  }
  const handleStopTimer = async () => {
    setTimerRunning(false);
    setActiveanalysis(true)
    // Store the remaining timer value in a variable
    await setInitialSeconds(seconds);
  };
  const fetchData = async () => {
    setleftQustion(leftQustion + 1)
    try {
      console.log(index, "kkkk");
      console.log(questionData, "jalo");

      const lang = await AsyncStorage.getItem("lang");
      const currentQuestions =
        lang === "ENGLISH" ? questionData.QuestionEnglish : questionData.QuestionHindi;

      if (index < currentQuestions.length) {
        console.log(currentQuestions[index].optionH, "lohggj");
        if (lang === "ENGLISH") {
          setHindiQseon(currentQuestions[index].QuestionE);
          setquestionID(currentQuestions[index].questionId)
          setno_qu(currentQuestions[index].q_no)
        } else {
          setHindiQseon(currentQuestions[index].QuestionH);
          setquestionID(currentQuestions[index].questionId)
          setno_qu(currentQuestions[index].q_no)
        }
        console.log('====================================');
        console.log('====================================');
        setOpsion(currentQuestions[index].optionH);
        setIndex(index + 1);
        setSelect("")
        setbtndisebal(false)
        setTimerRunning(true);
        setleft(left + 1)
        setSeconds(t)
        setmodelVive(false)
        closeModal7()
        closeModal8()
        setTimeout(async () => {
          if (index == parseInt(currentQuestions.length) - 1) {
            await AsyncStorage.setItem("g_id", gameId)
            navigation.navigate("Successful")
          }
        }, 25000)
      } else {

      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [questionData]);
  useEffect(() => {
    var interval;
    if (index === 0 && questionData.length > 0) {
      fetchData();
    }
    else if (index <= no_qu) {
      interval = setInterval(() => {
        fetchData(); // Assuming fetchData is a function to fetch questions
      }, 25000);
    }

    return () => clearInterval(interval); // Clear the interval on unmount

  }, [index, questionData]);


  const upleaderboardApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "gameId": `${gameId}`
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
            console.log(result.data, "inactive leaderboard")
            openModal7()
          }
        })
        .catch(error => console.log('error', error));

    } catch (error) {
      console.log(error, "lastError");
    }
  }


  const AnalysisApi = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${await AsyncStorage.getItem('token')}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${base_url}/quiz-result`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success==true) {
            console.log(result.data)
            openModal8()
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            height: responsiveHeight(9),
            width: responsiveWidth(100),
            justifyContent: "center",
            backgroundColor: "#6A5AE0",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ justifyContent: "center", alignSelf: "center" }}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(5),
                width: responsiveWidth(40),
                borderRadius: 10,
                backgroundColor: save == true ? "#EDEAFB" : "#6A5AE0",
                justifyContent: "center",
                marginLeft: "15%",
              }}
              // onPress={() => navigation.navigate("InactiveLeaderBoard")}
              onPress={() => { upleaderboardApi() }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "500",
                  alignSelf: "center",
                  color: save == true ? "#6A5AE0" : "#fff",
                }}
              >
                Leaderboard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(4),
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 10,
                width: responsiveWidth(22),
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  alignSelf: "center",
                  fontSize: 16,
                }}
              >
                {left}/{no_qu}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <Text style={{ fontSize: 15, alignSelf: 'center' }}>receiveData : {JSON.stringify(gameid)}</Text>
        <Text style={{ fontSize: 15, alignSelf: 'center' }}>receiveData : {JSON.stringify(userid)}</Text> */}



        <View
          style={{
            height: responsiveHeight(35),
            width: responsiveWidth(90),
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 5,
            elevation: 10,

          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 17,
              fontWeight: "500",
              color: "#000",
            }}
          >
            Q.{index} {hindiQseon}
          </Text>

          {
            opsion?.map((res) => {
              return (
                <>
                  <View
                    style={{ marginTop: 10, flexDirection: "row", marginRight: 20 }}
                  >
                    <TouchableOpacity
                      style={{
                        height: responsiveHeight(3.5),
                        marginRight: 10,
                        backgroundColor: select == res.id ? "#6A5AE0" : "#fff",
                        width: responsiveWidth(7),
                        borderWidth: 1,
                        borderRadius: 100,
                        justifyContent: "center",
                      }}
                      onPress={() => setSelect(res.id)}
                    >
                      <Text
                        style={{
                          alignSelf: "center",
                          fontWeight: "600",
                          fontSize: 18,
                          color: select == res.id ? "#fff" : "#6A5AE0",
                        }}
                      >
                        {res.id}
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ alignSelf: "center", fontSize: 13 }}>
                      {res.answer}
                    </Text>
                  </View>

                </>
              )
            })
          }

        </View>

        <View
          style={{
            height: responsiveHeight(8),
            flexDirection: "row",
            width: responsiveWidth(90),
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 7,
            borderRadius: 5,
            elevation: 5,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 5,
              marginHorizontal: 20,
              height: responsiveHeight(7),
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <RadioButton
                color="#0085FF"
                uncheckedColor="#B9C3CC"
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => { setChecked("first"); setmainValuerl(5.5) }}
              />
            </View>

            <View style={{ marginLeft: 5, justifyContent: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Right</Text>
            </View>

            <Image
              source={require("../images/right2.png")}
              style={{
                height: responsiveHeight(2.6),
                width: responsiveWidth(5.2),
                alignSelf: "center",
                marginLeft: 5,
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 5,
              marginHorizontal: 20,
              height: responsiveHeight(7),
              borderRadius: 10,
            }}
          >
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <RadioButton
                color="#0085FF"
                uncheckedColor="#B9C3CC"
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => { setChecked("second"); setmainValuerl(3.5) }}
              />
            </View>

            <View style={{ marginLeft: 5, justifyContent: "center" }}>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Wrong</Text>
            </View>
            <Image
              source={require("../images/wrong.png")}
              style={{
                height: responsiveHeight(4),
                width: responsiveWidth(8),
                alignSelf: "center",
                marginTop: 4,
                marginLeft: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: responsiveHeight(15),
            width: responsiveWidth(90),
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 7,
            borderRadius: 5,
            elevation: 5,
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "500",
              color: "#000",
            }}
          >
            Correct %
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                backgroundColor: correct == 0 ? "#000" : "#fff",
                justifyContent: "center",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { calculation(mainValuerl, 0), setCorrect(0) }}
            // onPress={() => { setChecked("second"); setmainValuerl(3.5) }}

            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 0 ? "#fff" : "#000",
                }}
              >
                {A}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "setCorrectcenter",
                backgroundColor: correct == 1 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { calculation(mainValuerl, 1), setCorrect(1) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 1 ? "#fff" : "#000",
                }}
              >
                {B}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 2 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(2), calculation(mainValuerl, 2) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 2 ? "#fff" : "#000",
                }}
              >
                {C}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 3 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(3), calculation(mainValuerl, 3) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 3 ? "#fff" : "#000",
                }}
              >
                {D}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 4 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(4), calculation(mainValuerl, 4) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 4 ? "#fff" : "#000",
                }}
              >
                {E}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 5 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(5), calculation(mainValuerl, 5) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 5 ? "#fff" : "#000",
                }}
              >
                {F}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 6 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(6), calculation(mainValuerl, 6) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 6 ? "#fff" : "#000",
                }}
              >
                {G}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 7 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(7), calculation(mainValuerl, 7) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 7 ? "#fff" : "#000",
                }}
              >
                {H}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 8 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(8), calculation(mainValuerl, 8) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 8 ? "#fff" : "#000",
                }}
              >
                {I}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: responsiveHeight(3),
                justifyContent: "center",
                backgroundColor: correct == 9 ? "#000" : "#fff",
                width: responsiveWidth(6),
                borderWidth: 1,
                borderRadius: 5,
              }}
              onPress={() => { setCorrect(9), calculation(mainValuerl, 9) }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "600",
                  fontSize: 15,
                  color: correct == 9 ? "#fff" : "#000",
                }}
              >
                {J}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              height: responsiveHeight(25),
              elevation: 10,
              borderRadius: 10,
              width: responsiveWidth(55),
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                marginTop: 7,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Row point Panel
            </Text>

            <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 7,
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>M</Text>

                {checked === "first" ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {right}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {wrong}
                  </Text>
                )}
              </View>

              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>C%</Text>
                {correct == 0 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {A}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 1 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {B}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 2 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {C}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 3 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {D}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 4 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {E}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 5 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {F}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 6 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {G}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 7 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {H}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 8 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {I}
                  </Text>
                ) : (
                  <></>
                )}

                {correct == 9 ? (
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 15,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  >
                    {J}
                  </Text>
                ) : (
                  <></>
                )}
              </View>

              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>T(Time)</Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  {initialSeconds}
                </Text>
              </View>
            </View>

            <View style={{ borderBottomWidth: 0.6, padding: 4 }}></View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(11),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  {
                    correct == 0 && checked == 'first' ? <>5.5</> : <></>
                  }
                  {
                    correct == 1 && checked == 'first' ? <>6.5</> : <></>
                  }
                  {
                    correct == 2 && checked == 'first' ? <>7.5</> : <></>
                  }
                  {
                    correct == 3 && checked == 'first' ? <>8.5</> : <></>
                  }
                  {
                    correct == 4 && checked == 'first' ? <>9.5</> : <></>
                  }
                  {
                    correct == 5 && checked == 'first' ? <>1.5</> : <></>
                  }
                  {
                    correct == 6 && checked == 'first' ? <>2.5</> : <></>
                  }
                  {
                    correct == 7 && checked == 'first' ? <>3.5</> : <></>
                  }
                  {
                    correct == 8 && checked == 'first' ? <>4.5</> : <></>
                  }
                  {
                    correct == 9 && checked == 'first' ? <>5.5</> : <></>
                  }

                  {
                    correct == 0 && checked == 'second' ? <>3.5</> : <></>
                  }
                  {
                    correct == 1 && checked == 'second' ? <>4.5</> : <></>
                  }
                  {
                    correct == 2 && checked == 'second' ? <>5.5</> : <></>
                  }
                  {
                    correct == 3 && checked == 'second' ? <>6.5</> : <></>
                  }
                  {
                    correct == 4 && checked == 'second' ? <>7.5</> : <></>
                  }
                  {
                    correct == 5 && checked == 'second' ? <>8.5</> : <></>
                  }
                  {
                    correct == 6 && checked == 'second' ? <>9.5</> : <></>
                  }
                  {
                    correct == 7 && checked == 'second' ? <>1.5</> : <></>
                  }
                  {
                    correct == 8 && checked == 'second' ? <>2.5</> : <></>
                  }
                  {
                    correct == 9 && checked == 'second' ? <>3.5</> : <></>
                  }

                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(8),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(3.5),
                  justifyContent: "center",
                  width: responsiveWidth(8),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                  }}
                >
                  {initialSeconds}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                height: responsiveHeight(4),
                alignSelf: "center",
                marginTop: 15,
                justifyContent: "center",
                width: responsiveWidth(28),
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ alignSelf: "center", fontWeight: "600", fontSize: 15 }}
              >

                {/* {parseFloat(mainValuerl)+parseFloat(initialSeconds)} */}

                {/* {mainValuerl}+{initialSeconds} */}

                {allData ? allData : 0}


              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: responsiveHeight(25),
              width: responsiveWidth(35),
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{
                color: "orange",
                alignSelf: "flex-start",
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Time
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: responsiveHeight(4),
                  alignSelf: "center",
                  borderColor: "green",
                  justifyContent: "center",
                  width: responsiveWidth(9),
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                    color: "green",
                  }}
                >
                  {seconds}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "900",
                  color: "green",
                }}
              >
                :
              </Text>

              <TouchableOpacity
                style={{
                  height: responsiveHeight(4),
                  alignSelf: "center",
                  borderColor: "green",
                  justifyContent: "center",
                  width: responsiveWidth(9),
                  marginRight: "5%",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "600",
                    fontSize: 15,
                    color: "green",
                  }}
                >
                  0
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                disabled={btndisebal}
                style={{
                  height: responsiveHeight(5),
                  marginTop: "30%",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  width: responsiveWidth(22),
                  backgroundColor: "#6A5AE0",
                }}

                // onPress={() =>  setSave(true)}
                onPress={() => { handleStopTimer(), savebtn() }}

              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    alignSelf: "center",
                    fontSize: 16,
                  }}
                >
                  <><Text>Save</Text></>

                </Text>
              </TouchableOpacity>
              {modelVive ? <>
                <TouchableOpacity
                  style={{
                    height: responsiveHeight(5),
                    alignSelf: "center",
                    marginTop: "5%",
                    justifyContent: "center",
                    borderRadius: 5,
                    width: responsiveWidth(22),
                    backgroundColor: "#6A5AE0",
                  }}
                  // onPress={() => navigation.navigate("Analysis")}
                  onPress={() => { AnalysisApi() }}


                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "400",
                      alignSelf: "center",
                      fontSize: 16,
                    }}
                  >
                    Analysis
                  </Text>
                </TouchableOpacity></> : null}

            </View>
          </View>
        </View>
      </ScrollView>

      <Modal style={{ width: '100%', marginLeft: 0, marginBottom: 0, height: '100%', marginTop: 0 }}
        visible={modalVisible7}
        animationType="slide"
        onRequestClose={closeModal7}

      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <View
            style={{
              height: responsiveHeight(8),
              width: responsiveWidth(100),
              justifyContent: "center",
              backgroundColor: "#6A5AE0",
              paddingHorizontal: 20,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
              <TouchableOpacity
                onPress={closeModal7}
                style={{
                  justifyContent: "center",
                  alignSelf: "flex-start",
                  marginTop: "3%",
                }}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>

              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "500",
                  alignSelf: "center",
                  marginTop: "3%",
                  marginLeft: "5%",
                }}
              >
                Leaderboard Rank
              </Text>
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
                style={{
                  flex: 0.8,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
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
              width: responsiveWidth(90),
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
                  marginLeft: 20,
                }}
              >
                Name
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "#000",
                  fontWeight: "500",
                  marginLeft: 20,
                }}
              >
                Option
              </Text>
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#000",
                    fontWeight: "500",
                    marginLeft: 10,
                  }}
                >
                  Time
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#000",
                    fontWeight: "500",
                    marginLeft: 10,
                  }}
                >
                  taken
                </Text>
              </View>
              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                %
              </Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                Point
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                paddingHorizontal: 10,
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: "#EDEAFB",
                alignSelf: "center",
              }}
            >
              <Text style={{ alignSelf: "center", color: "#6A5AE0" }}>#1</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>Kamal ka..</Text>
              <Text style={{ alignSelf: "center", color: "green" }}>5 sec</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>B</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>7</Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                7.5
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: "#fff",
                elevation: 10,
                alignSelf: "center",
              }}
            >
              <Text style={{ alignSelf: "center", color: "#6A5AE0" }}>#1</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>Kamal ka..</Text>
              <Text style={{ alignSelf: "center", color: "green" }}>5 sec</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>B</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>7</Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                7.5
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: "#fff",
                elevation: 5,
                alignSelf: "center",
              }}
            >
              <Text style={{ alignSelf: "center", color: "#6A5AE0" }}>#1</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>Kamal ka..</Text>
              <Text style={{ alignSelf: "center", color: "green" }}>5 sec</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>B</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>7</Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                7.5
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: "#fff",
                elevation: 5,
                alignSelf: "center",
              }}
            >
              <Text style={{ alignSelf: "center", color: "#6A5AE0" }}>#1</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>Kamal ka..</Text>
              <Text style={{ alignSelf: "center", color: "green" }}>5 sec</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>B</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>7</Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                7.5
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                height: responsiveHeight(6),
                width: responsiveWidth(90),
                borderRadius: 2,
                marginTop: 5,
                backgroundColor: "#fff",
                elevation: 5,
                alignSelf: "center",
              }}
            >
              <Text style={{ alignSelf: "center", color: "#6A5AE0" }}>#1</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>Kamal ka..</Text>
              <Text style={{ alignSelf: "center", color: "green" }}>5 sec</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>B</Text>
              <Text style={{ alignSelf: "center", color: "#000" }}>7</Text>

              <Text
                style={{ alignSelf: "center", color: "#000", fontWeight: "500" }}
              >
                7.5
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal style={{ width: '100%', marginLeft: 0, marginBottom: 0, height: '100%', marginTop: 0 }}
        visible={modalVisible8}
        animationType="slide"
        onRequestClose={closeModal8}

      >
        <SafeAreaView>
          <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'#6A5AE0'} />

          <View style={{ height: responsiveHeight(7), width: responsiveWidth(100), justifyContent: 'center', backgroundColor: '#6A5AE0', paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignSelf: 'flex-start', marginTop: 15 }}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>

              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', alignSelf: 'center', marginTop: 15, marginLeft: '30%' }}>Analysis</Text>
            </View>
          </View>

          <View style={{ height: responsiveHeight(40), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingHorizontal: 10, width: responsiveWidth(90), marginBottom: 10, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8, elevation: 10 }}>

            <View style={{ alignSelf: 'center', marginTop: 30 }}>
              <BarChart
                data={data}
                width={300}
                height={200}
                color={'red'}
                yAxisLabel=""
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>

          </View>


          <View style={{ height: responsiveHeight(46), alignSelf: 'center', justifyContent: 'center', width: responsiveWidth(90), marginBottom: 10, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 8, elevation: 10 }}>
            <View style={{ height: responsiveHeight(6), justifyContent: 'center', width: responsiveWidth(85), borderWidth: 1, borderRadius: 10, alignSelf: 'center' }}>
              <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0', fontWeight: '500' }}>Row Point Table</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 11, marginTop: 10 }}>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', backgroundColor: '#EDEAFB', justifyContent: 'center', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>M</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>C</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>T</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: 'green' }}>Total</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 11 }}>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>2.5</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>6</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0' }}>7</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: 'green' }}>9.5</Text>
              </View>
            </View>

            <View style={{ height: responsiveHeight(6), justifyContent: 'center', width: responsiveWidth(85), borderWidth: 1, marginTop: 20, borderRadius: 10, alignSelf: 'center' }}>
              <Text style={{ alignSelf: 'center', fontSize: 16, color: '#6A5AE0', fontWeight: '500' }}>Main Point Table</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 11, marginTop: 10 }}>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', backgroundColor: '#EDEAFB', justifyContent: 'center', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>M</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>C</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>T</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: 'green' }}>Total</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 11 }}>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>2.5</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>6</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#EDEAFB', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: '#000' }}>7</Text>
              </View>
              <View style={{ height: responsiveHeight(5), flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: responsiveWidth(19), borderWidth: 1, borderRadius: 5, alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 16, color: 'green' }}>9.5</Text>
              </View>
            </View>

          </View>




        </SafeAreaView>

      </Modal>

    </SafeAreaView>
  );
};

export default MyLeaderBoard;
