import React from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { 
    View, KeyboardAvoidingView, Text,
    TextInput
} from "react-native";
import {styles} from "./styles";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components'

export function Cadastro() {
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.primary}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" size={24} color="black" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.primary}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <ComponentButtonInterface title="Login" type="primary" onPressI={() => { console.log('Login') }} />
                <ComponentButtonInterface title="Cadastre-se" type="primary" onPressI={() => { console.navigate('Cadastro') }} />
            </KeyboardAvoidingView>
        </View>
    )
}