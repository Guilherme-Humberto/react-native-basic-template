import React from 'react';
import HomeScreen from './presenters/screens/Home';
import {ThemeProvider} from 'styled-components';
import defaut from './styles/themes/defaut';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaut}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
