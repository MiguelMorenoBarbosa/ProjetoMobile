import React, { useState, useEffect } from 'react';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput,
    Alert
} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import {ComponentButtonInterface, ComponentLoading} from '../../components';
import { LoginTypes } from "../../navigations/login.navigation"
import { AxiosError } from 'axios';
import { useAuth } from '../../hooks/auth';
import { IAuthenticate } from '../../services/data/User';

export function Login({navigation}: LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true); 
    async function handleSignIn() {
        try {
            setIsLoading(true);
            if (data?.email && data.password) { 
                await signIn(data);
        } else {
            Alert.alert("Preencha todos os campos!!!");
            setIsLoading(false);
        }
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading (false);
        }
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="secondary" onPressI={() => {navigation.navigate('Tab') }} />
                <ComponentButtonInterface title="Cadastre-se" type="primary" onPressI={() => { navigation.navigate('Cadastrar') }} />
            </KeyboardAvoidingView>
        </View>
    )
}
