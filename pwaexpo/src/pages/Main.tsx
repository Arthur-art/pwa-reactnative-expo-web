import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface Member{
    id: number;
    name: string;
    image: string;
    avatar_url: string;
    login: string;
}

export function Main() {

const [members, setMembers] = useState<Member[]>([]);

useEffect(()=>{
    fetch("https://api.github.com/orgs/rocketseat/members").then(resp => {
        resp.json().then(data => {
            setMembers(data);
        })
    })
},[])

  return (
    <FlatList
        contentContainerStyle={{padding: 4}}
        data={members}
        keyExtractor={member => String(member.id)}
        renderItem={({item: member}) => (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: member.avatar_url}}/>
                <Text style={{fontSize: 35}}>{member.login}</Text>
            </View>
        )}
    />
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
      }
});
