// @flow
import * as React from 'react';
import { View, Text } from 'react-sketchapp';

type P = {
  name: string,
  style: any,
};
const TypeSpecimen = ({ name, style }: P) => (
  <View name={`TypeSpecimen-${name}`} style={{ flexDirection: 'row', marginBottom: 24 }}>
    <Text
      style={{
        ...style,
      }}
    >
      {name}
    </Text>
  </View>
);

export default TypeSpecimen;
