import {StyleSheet, TextInput} from 'react-native';

interface Props {
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}
const Input = ({placeHolder, onChangeText, value}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 57,
    width: '100%',
    borderRadius: 3,
    borderColor: 'rgba(28, 55, 90, 0.16)',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingLeft: 16,
  },
});

export default Input;
