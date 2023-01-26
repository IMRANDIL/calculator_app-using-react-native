import React, {useState} from 'react';
import {Switch, View} from 'react-native';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <View>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
      />
    </View>
  );
};

export default App;
