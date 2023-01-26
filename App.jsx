import React, {useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };
  const calculate = title => {
    if (title == 'C') {
      setResult('');
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
    } else {
      setResult(result + title);
    }
  };
  const getColor = (dark, light) => (darkTheme ? dark : light);
  const Btn = ({title, type}) => {
    return (
      <TouchableOpacity
        onPress={() => calculate(title)}
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
            color: getBtnColor(type),
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const getBtnColor = type => {
    if (type == 'top') {
      return 'firebrick';
    } else if (type == 'right') {
      return 'firebrick';
    } else {
      return getColor(colors.dark, colors.light);
    }
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
          paddingBottom: 20,
          marginTop: 40,
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: getColor(colors.light1, colors.dark1),
        }}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};

export default App;
