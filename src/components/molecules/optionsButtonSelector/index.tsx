import React, {Children, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../atoms/button';

interface Props {
  options: any[];
  onSelect: (selectedOption: number) => void;
}

const OptionsButtonSelector = ({ options, onSelect }: Props) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionPress = (option: any) => {
    setSelectedOption(option.id);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options?.length && Children.toArray(options.map((option) => (
        <Button
          active={selectedOption === option.id}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.buttonText}>{option.name}</Text>
          <Text style={styles.buttonText}>${option.value}</Text>
        </Button>
      )))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OptionsButtonSelector;
