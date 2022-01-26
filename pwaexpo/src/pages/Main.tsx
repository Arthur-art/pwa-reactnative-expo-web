import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Main() {

const [members, setMembers] = useState([]);

useEffect(()=>{
    fetch("https://api.github.com/orgs/rocketseat/members").then(resp => {
        resp.json().then(data => {
            setMembers(data);
        })
    })
},[])

console.log(members)

  return (
    <View style={styles.container}>
        <Text>Main</Text>
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
