import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

export  function Camera() {
  const [hasPermission, setHasPermission] = useState(true);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestCameraPermissionsAsync();
      if(status === 'granted'){
        setHasPermission(true);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <ExpoCamera style={styles.container} type={type}>
        <View style={styles.camera}>
          <TouchableOpacity
            style={styles.camera}
            onPress={() => {
              setType(
                type === ExpoCamera.Constants.Type.back
                  ? ExpoCamera.Constants.Type.front
                  : ExpoCamera.Constants.Type.back
              );
            }}>
            <Text style={styles.container}> Flip </Text>
          </TouchableOpacity>
        </View>
      </ExpoCamera>
    </View>
  );
}

const styles = StyleSheet.create({
    img: {
      width: 50,
      height: 50,
    },
    container:{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 5,
          borderRadius: 10,
          height: "100%"
        },
    camera:{
        display: 'flex',
        height: "100%",
        width: "100%"
    }
  });