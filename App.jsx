import React, {useState} from 'react';
import {Switch, View} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <View>
      <Switch value={darkTheme} />
    </View>
  );
};

export default App;
