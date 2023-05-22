import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from "./styles"
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ComponentButtonInterface } from "./../../components"
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';
import { TitleSlider } from '../../components/TitleSlider';


interface IPhoto {
  height: string
  uri: string
  width: string
}

export function PhotoScreen({navigation}: LoginTypes) {
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)

  if (!permissionMedia) {
    // As permissões da mídia estão sendo carregadas
    return <View />
  }

  if (!permissionMedia.granted) {
    // A permissão da mídia ainda não foi dada
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color:colors.secondary, alignItems: "center", marginTop: 10 }}>Permita o acesso à sua galeria!!</Text>
        <Button onPress={requestPermissionMedia} title="Pemissão do Uso da Mídia" />
      </View>
    );
  }

  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Imagens", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if(!result.canceled) {
      setPhoto(result.assets[0])
    }
  }

  return (
    <>
    {photo && photo.uri ? (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={styles.botao3}>
          <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
        </TouchableOpacity>
        <Image source={{ uri: photo.uri }} style={styles.img} />
      </View>
    ):(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={styles.seta}>
          <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
        </TouchableOpacity>
      <View style={styles.container2}>
        <TitleSlider titleI='Câmera' />
        <ComponentButtonInterface onPressI={() => navigation.navigate('CameraTake')} title="Nova foto" type='secondary' />
        <ComponentButtonInterface onPressI={pickImage} title="Pegar da galeria" type='secondary' />
      </View>
    </View>
    )}
    </>
  );
}