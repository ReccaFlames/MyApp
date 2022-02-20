import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { selectAllUsers } from '../../store';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchUsers} from '../redux/usersSlice';

const style = StyleSheet.create({
  dataContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

const Users = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.users);
  const users = useAppSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Button title="Reload" onPress={() => dispatch(fetchUsers())} />
      <FlatList
        data={users}
        renderItem={({item: user}) => (
          <View style={style.dataContainer}>
            <Text>
              {user.first_name} {user.last_name}
            </Text>
            <Text>{user.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Users;
