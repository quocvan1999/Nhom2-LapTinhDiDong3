import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import SignUp from './NewAccount';
import Login from './App';
import Grammar from './Grammar';
import Spelling from './Spelling';
import Vocabulary from './Vocabulary';


const MainNavigator = createStackNavigator(
  //DN:{screen: DN},
  {
  Login: { screen: Login },
  Home: { screen: HomePage },
  Sign: { screen: SignUp },
  Grammar: { screen: Grammar },
  Spelling: { screen: Spelling },
  Vocabulary: { screen: Vocabulary }
  },
  {
    defaultNavigationOptions: {
      header: null
    }


});


const App = createAppContainer(MainNavigator);
export default App;