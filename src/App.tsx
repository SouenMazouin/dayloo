import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootNavigation from './navigation/RootNavigation';

const App = (): JSX.Element => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return <RootNavigation />;
};

export default App;
