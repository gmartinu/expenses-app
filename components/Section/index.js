import React from "react";
import { View } from "react-native";

function Section({ children, extra }) {
  return (
    <View
      style={{
        marginBottom: extra ? 10 * extra : 10,
      }}
    >
      {children}
    </View>
  );
}

export default Section;
