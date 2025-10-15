import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {SELECT_COUNTER} from '../actions/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';

const CountersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counters);

  const selectCounter = index => {
    dispatch({
      type: SELECT_COUNTER,
      index,
    });
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          item.selected ? styles.itemSelected : styles.itemNotSelected,
        ]}
        onPress={() => selectCounter(index)}>
        <Text
          style={[
            styles.itemTitle,
            item.selected
              ? styles.itemTitleSelected
              : styles.itemTitleNotSelected,
          ]}>{`Counter ${++index}`}</Text>
        <Text
          style={[
            styles.itemBody,
            item.selected
              ? styles.itemBodySelected
              : styles.itemBodyNotSelected,
          ]}>
          {item.number.toString().padStart(4, '0')}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderListEmpty = () => (
    <View style={[styles.containerList, styles.containerEmpty]}>
      <Text style={styles.emptyText}>Counters not found!</Text>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Counters" />
        {counters.length === 0 ? (
          renderListEmpty()
        ) : (
          <FlatList
            data={counters}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            style={styles.containerList}
          />
        )}
      </SafeAreaView>
    </>
  );
};

CountersScreen.navigationOptions = {
  title: 'Counters',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon icon={faStar} size={25} color={tintColor} />
  ),
  tabBarVisible: true,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001c47',
    flex: 1,
  },
  containerList: {
    // flex: 1,
    backgroundColor: '#0082c9',
  },
  item: {
    margin: 15,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: '#26497E',
    padding: 5,
    shadowColor: 'rgba(0,0,0,.7)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  itemSelected: {
    backgroundColor: '#DBDBDB',
  },
  itemNotSelected: {
    backgroundColor: '#6DADD1',
  },
  itemTitleSelected: {
    color: '#9E9E9E',
  },
  itemTitleNotSelected: {
    color: '#4E8EB2',
  },
  itemBodySelected: {
    color: '#000',
  },
  itemBodyNotSelected: {
    color: '#4E8EB2',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemBody: {
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: 10,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
  },
  containerEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  containerListStyle: {
    flex: 1,
  },
});

export default CountersScreen;
