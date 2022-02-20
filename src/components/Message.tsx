import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {setMessage} from '../redux/messageSlice';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 64,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Message = () => {
  const dispatch = useAppDispatch();
  const {message} = useAppSelector(state => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 64,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};

export default Message;
