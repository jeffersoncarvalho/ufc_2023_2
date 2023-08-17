import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Text>
       Counter: {counter}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
       <Button
        onPress={() => {
          setCounter(counter => counter + 1)
          setCounter(counter => counter + 1)
          setCounter(counter => counter + 1)
          
        }}
         
        title="ADD + 1"
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
       
    </>
  );
};

export default Cafe;