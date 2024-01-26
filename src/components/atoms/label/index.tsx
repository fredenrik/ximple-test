import React from 'react';
import {StyleSheet, Text} from 'react-native';

type Variant = 'title'|'subtitle'|'text';
interface Props {
  children: string;
  variant: Variant
}

const Label = ({ children, variant }: Props) => {
  return (
    <Text style={[styles.label, styles[variant]]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  title: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  subtitle: {
    color: '#7A7A7A',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  }
});
export default Label;
