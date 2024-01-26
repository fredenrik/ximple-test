import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {router} from 'expo-router';
import {Card, Modal} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

import Label from '../../src/components/atoms/label';
import Button from '../../src/components/atoms/button';
import {ICredit, setCredit} from '../../src/redux/slice/creditSlice';
import OptionsButtonSelector from '../../src/components/molecules/optionsButtonSelector';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  data: any[];
}

const ModalHome = ({ visible, setVisible, data }: Props) => {
  const [selectedCredit, setSelectedCredit] = useState<ICredit>({} as ICredit);

  const dispatch = useDispatch();

  const handlePressModal = () => {
    setVisible(false);
    dispatch(setCredit(selectedCredit));
    router.push('/credits');
  };

  const handleOptionSelect = (selectedOption: any) => {
    setSelectedCredit(selectedOption);
  };

  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <Card style={styles.card} disabled={true}>
        <Label variant='title'>¡Felicidades!</Label>
        <Label variant='subtitle'>Encontramos estos créditos perfectos para ti:</Label>
        <OptionsButtonSelector options={data} onSelect={handleOptionSelect}/>
        <Button title='Seleccionar crédito' onPress={handlePressModal} active/>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    marginHorizontal: 32,
    borderRadius: 16
  },
});

export default ModalHome;
