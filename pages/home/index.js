import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import {
  decrement as decrement2,
  increment as increment2,
} from "../../features/counter/counterSlice copy";
// import { Container } from './styles';

function Home() {
  return (
    <View>
      <Text>SADASDSAASD</Text>
      <Counter />
      <Counter2 />
    </View>
  );
}

export default Home;

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        aria-label="Increment value"
        onPress={() => dispatch(increment())}
        title="Increment"
      />
      <Text>{count}</Text>
      <Button
        aria-label="Decrement value"
        onPress={() => dispatch(decrement())}
        title="Decrement"
      />
    </View>
  );
};

const Counter2 = () => {
  const count = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        aria-label="Increment value"
        onPress={() => dispatch(increment2())}
        title="Increment"
      />
      <Text>{count}</Text>
      <Button
        aria-label="Decrement value"
        onPress={() => dispatch(decrement2())}
        title="Decrement"
      />
    </View>
  );
};
