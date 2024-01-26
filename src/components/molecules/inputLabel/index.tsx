import {StyleSheet, View} from 'react-native';
import Label from '../../atoms/label';
import Input from '../../atoms/input';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
}
const InputLabel = ({ label, value, onChangeText, placeHolder }: Props) => {
  return (
    <View style={styles.inputLabel}>
      <Label variant='text'>{label}</Label>
      <Input value={value} onChangeText={onChangeText} placeHolder={placeHolder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 5,
  },
});

export default InputLabel;
