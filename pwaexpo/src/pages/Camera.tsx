import { StyleSheet, Text, View } from 'react-native';

export function Camera() {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
