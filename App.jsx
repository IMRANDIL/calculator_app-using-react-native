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
        <TouchableOpacity>
          <Text style={{fontSize: 37, color: 'black'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 37, color: 'black'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 37, color: 'black'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 37, color: 'black'}}>4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
