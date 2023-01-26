import React, {useState} from 'react';
import {Switch, View} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  return (
    <View>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.light : colors.dark}
      />
    </View>
  );
};

export default App;
