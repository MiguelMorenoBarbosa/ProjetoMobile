import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Encontre seu veículo'},
        { id: '2', text: 'Use o catálogo de opções'},
        { id: '3', text: 'Filtre a sua pesquisa'},
        { id: '4', text: 'Consulte o preço e status do carro'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
           <View style={styles.panel}>
                <ComponentTitleSlider titleI='Pesquisa de Carros' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                       <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} page={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} page={false}/>
            </View>
        </ImageBackground>
    );
}