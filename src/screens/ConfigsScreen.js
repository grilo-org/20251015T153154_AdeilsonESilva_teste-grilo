import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  INCREASE_COUNTER,
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
} from '../actions/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import ButtonDefault from '../components/buttonDefault';
import Panel from '../components/panel';

const ConfigsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const hasCounters = useSelector(state => state.counters.length > 0);

  const addCounter = () => {
    dispatch({
      type: ADD_COUNTER,
    });
  };

  const removeCounter = () => {
    dispatch({
      type: REMOVE_COUNTER,
    });
  };

  const increaseCounter = () => {
    dispatch({
      type: INCREASE_COUNTER,
    });
  };

  const decreaseCounter = () => {
    dispatch({
      type: DECREASE_COUNTER,
    });
  };

  const resetCounter = () => {
    dispatch({
      type: RESET_COUNTER,
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Config" />
        <View style={styles.containerView}>
          <Panel title="Counters">
            <ButtonDefault
              onPress={addCounter}
              text={'Add\nCounter'}
              toast="Adding new counter"
              disabled={false}
            />
            <ButtonDefault
              onPress={removeCounter}
              text={'Remove\nCounter'}
              toast="Removed selected counter"
              disabled={!hasCounters}
            />
          </Panel>
          <View style={styles.countersOperations}>
            <Panel title="Selected Counter">
              <ButtonDefault
                onPress={increaseCounter}
                text={'Increase\nCounter (++)'}
                toast="Increased counter"
                disabled={!hasCounters}
              />
              <ButtonDefault
                onPress={decreaseCounter}
                text={'Decrease\nCounter (--)'}
                toast="Decreased counter"
                disabled={!hasCounters}
              />
            </Panel>
            <View style={styles.countersOperations}>
              <ButtonDefault
                onPress={resetCounter}
                text={'Reset\nCounter'}
                styleButton={styles.buttonReset}
                toast="Reseted counter"
                disabled={!hasCounters}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

ConfigsScreen.navigationOptions = {
  title: 'Config',
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
  containerView: {
    flex: 7,
    backgroundColor: '#3E86CB',
  },
  countersOperations: {
    flex: 1,
  },
  buttonReset: {
    marginHorizontal: 10,
  },
});

export default ConfigsScreen;
