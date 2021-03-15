import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './Modal.styles';

const Modal = ({ navigation: { navigate } }) => (
  <Modal
    animationType="fade"
    transparent
    visible={showModal}
    onRequestClose={handleActionCreateFormComplete}
  >
    <TouchableOpacity onPress={() => handleActionCreateFormComplete()} style={styles.centeredView}>
      <View
        style={styles.modalView}
      >
        <TouchableOpacity activeOpacity={1}>
          {complete ? (
            <View style={styles.actionCreateForm}>
              <View style={[styles.row, { alignItems: 'center' }]}>
                <Text category="h4">Action Created.</Text>
                <Text category="p2">Create another critical task or click Done to close.</Text>
              </View>
              <View>
                <Button
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.textStyles}
                  onPress={handleActionCreateFormComplete}
                >
                  Done
                </Button>
                <Button
                  buttonStyles={styles.buttonStyles}
                  textStyles={styles.textStyles}
                  onPress={handleActionCreateFormComplete}
                >
                  Create Another

                </Button>
              </View>
            </View>
          ) : (
            <ActionCreateForm today={today} onComplete={handleActionCreateFormComplete} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

export default Modal;
