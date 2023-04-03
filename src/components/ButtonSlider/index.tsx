import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({ onPressI, page }: IBSlider) {
    return (
        <TouchableOpacity style={page? styles.click: styles.ball} onPress={onPressI} />
    )
}