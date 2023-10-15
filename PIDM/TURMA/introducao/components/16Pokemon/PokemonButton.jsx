import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function PokeButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style=
      {
        ({ pressed }) => [
          { backgroundColor: pressed ? "lightsalmon" : "orange" }
          ,
          styles.button]
      }
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.10,
    color: 'white',
  },
});
