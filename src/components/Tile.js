// @flow
import * as React from 'react';
import { View, Text } from 'react-sketchapp';

type P = {
    name: string,
    style: any,
};

const Tile = ({ name, style }: P) => (
    <View name={`Tile-${name}`} style={{ flexDirection: 'row', marginBottom: 24 }}>
        <Text style={{...style,}}>
            {name}
        </Text>
    </View>
);

export default Tile;