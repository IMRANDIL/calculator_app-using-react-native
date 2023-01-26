import React, {useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('dddd');
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const getColor = (dark, light) => (darkTheme ? dark : light);
  const Btn = ({title}) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          elevation: 2,
          borderRadius: 10,
          backgroundColor: getColor(colors.light1, colors.dark2),
          height: 70,
          width: 70,
          margin: 16,
        }}>
        <Text
          style={{
            fontSize: 37,
            color: 'black',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingVertical: 10,
        backgroundColor: getColor(colors.dark, colors.light),
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.light, colors.dark)}
        trackColor={{true: colors.light2, false: colors.dark2}}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.light, colors.dark),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
        }}>
        {result}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Btn title={1} />
        <Btn title={2} />
        <Btn title={3} />
        <Btn title={4} />
      </View>
    </View>
  );
};

export default App;
