import React from 'react'
import { 
  View, 
  Text,
  Image,
  StyleSheet,
} from 'react-native'

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>
        Name:
      </Text>
      <Text style={styles.nameStyle}>
        Loi Tran
      </Text>
      <Image
        style={{width: 250, height: 250}}
        source={{uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/14633014_10154745913714359_6100717154322258576_n.jpg?_nc_cat=105&_nc_oc=AQkZMdfzPzbxiGhHk7rKdxZuqxfru6om8cUXLPi4elQn9yH-qtyHT1jMm8_wF2g-kp8&_nc_ht=scontent.fsgn2-1.fna&oh=0a07f00a2483ba1090d5010e8cd1eb64&oe=5DC1478A'}}
      />
      <Text style={styles.labelStyle}>
        Age: 18
      </Text>
      <Text style={styles.nameStyle}>
        Loi Tran
      </Text>      
      <Text style={styles.labelStyle}>
        Birthday:
      </Text>
      <Text style={styles.nameStyle}>
        July 22th, 2000
      </Text>
      <Text style={styles.labelStyle}>
        Location
      </Text>
      <Text style={styles.nameStyle}>
        Ho Chi Minh City, Vietnam
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: { 
    fontSize: 50,
    color: 'grey' 
  },
  nameStyle: {
    fontSize: 30
  }
})
