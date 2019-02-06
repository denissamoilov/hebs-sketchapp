// @flow
import * as React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';

type P = {
  title: string,
  children?: any,
};
const Section = ({ title, children }: P) => (
    <View>{children}</View>
);

export default Section;
