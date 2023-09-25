import { View, Text} from "react-native"; 
import { styles} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TabTypes } from "../../navigations/tab.navigation"; 
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";
import { useAuth} from "../../hooks/auth";
import { ComponentLoading, ComponentButtonInterface } from "../../components";
import React, { useCallback, useEffect, useState } from "react";
import { IUserLogin } from "../../services/data/User";
import { api } from "../../services/api";

Notifications.setNotificationHandler({
    handleNotification: async () => ({ 
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});
export function Perfil({ navigation }: TabTypes) {
    const { user, signOut } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    async function handleVoltar() {
        await signOut()
    }   
    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);
    useEffect(() => {
        async function fetchToken() { 
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);
    return (
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <Text>Perfil</Text>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}