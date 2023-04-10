import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import * as React from 'react';
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps {
    onPressI: () => void
    title: string
    type: 'primary' | 'secondary' | 'third'
}
export function ButtonInterface({ onPressI, title, type, ...rest }: IBInterface) {
    return (
        <TouchableOpacity style={
            type == "primary" ? styles.buttonPrimary :
                type == "secondary" ? styles.buttonSecondary :
                    styles.buttonThird
        } onPress={onPressI}
        {...rest}
        >
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    )
}