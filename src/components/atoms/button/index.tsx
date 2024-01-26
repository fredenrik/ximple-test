import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ReactNode} from 'react';

interface Props {
  title?: string;
  onPress: () => void;
  children?: ReactNode;
  active?: boolean;
  disabled?: boolean;
}

const Button = ({title, onPress, children, disabled, active}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        !!children && styles.optionButton,
        active && styles.enabledButton
      ]}
      onPress={onPress}>
      {title && <Text style={styles.buttonText}>{title}</Text>}
      {!!children ? children : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#8EBCF7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    paddingVertical: 10,
    paddingLeft: 8,
    paddingRight: 12,
    height: 'auto',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  enabledButton: {
    backgroundColor: '#1676F3',
  },
});

export default Button;
