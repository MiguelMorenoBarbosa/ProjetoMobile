import React from "react"
import { View, Text, KeyboardAvoidingView } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler";

export function Login(){
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput 
                    placeholder="E-mail"
                    placeholderTextColor={colors.third}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    styles={styles.input}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}