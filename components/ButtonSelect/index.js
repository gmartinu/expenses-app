import * as React from "react";
import { SegmentedButtons } from "react-native-paper";
import { View, Text } from "react-native";

const ButtonSelect = ({ label, value, onChangeValue, options }) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 8,
        }}
      >
        {label}
      </Text>
      <SegmentedButtons
        value={value}
        onValueChange={onChangeValue}
        buttons={options}
      />
    </View>
  );
};

// [
//     {
//       value: 'walk',
//       label: 'Walking',
//       icon: "xxx"
//     },
// ]

export default ButtonSelect;
