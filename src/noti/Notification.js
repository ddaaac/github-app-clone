import React, {useEffect} from 'react';
import {Platform, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {askAsync, getAsync, NOTIFICATIONS} from 'expo-permissions';
import {useNavigation} from "@react-navigation/native";
import {
    addNotificationReceivedListener,
    addNotificationResponseReceivedListener,
    AndroidImportance,
    getDevicePushTokenAsync,
    getExpoPushTokenAsync,
    removeAllNotificationListeners,
    setNotificationChannelAsync,
    setNotificationHandler,
} from 'expo-notifications';
import Constants from 'expo-constants';

import {expoPushTokenState, notificationState} from '../state/Notification';

setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const Notification = () => {
    const [expoPushToken, setExpoPushToken] = useRecoilState(expoPushTokenState);
    const [notification, setNotification] = useRecoilState(notificationState);
    const navigation = useNavigation();

    const registerPushAndGetToken = async () => {
        if (!Constants.isDevice) {
            alert('Must use physical device for push notification');
            return '';
        }
        const {status: existingStatus} = await getAsync(NOTIFICATIONS);
        if (existingStatus !== 'granted') {
            const {status} = await askAsync(NOTIFICATIONS);
            if (status !== 'granted') {
                alert('No Permission for notifications');
                return '';
            }
        }
        const devicePushToken = await getDevicePushTokenAsync();
        const token = (await getExpoPushTokenAsync({devicePushToken})).data;
        if (Platform.OS === 'android') {
            setNotificationChannelAsync('default', {
                name: 'default',
                importance: AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
        return token;
    };

    useEffect(() => {
        registerPushAndGetToken().then(setExpoPushToken);
        addNotificationReceivedListener(notification => {
            // 푸쉬 알람이 왔을 때, 이벤트 실행
            setNotification(notification);
        });
        addNotificationResponseReceivedListener(response => {
            console.log("####");
            // 푸쉬 알람을 눌렀을 때, 이벤트 실행
            navigation.navigate('Home');
        });

        return () => {
            removeAllNotificationListeners();
        };
    }, []);

    const sendPushNotification = async () => {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Original Title',
            body: 'And here is the body!',
            data: {data: 'goes here'},
        };

        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    };

    return (
        <SafeAreaView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={sendPushNotification}>
                    <Text style={{color: 'green', fontSize: 30}}>여기를 눌러서 푸쉬알람</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Notification;
