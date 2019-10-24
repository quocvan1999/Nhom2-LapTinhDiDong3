import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import SignUp from './NewAccount';
import Login from './App';
import Grammar from './Grammar';
import Spelling from './Spelling';
import Vocabulary from './Vocabulary';
import PlayGrammar from './PlayGrammar';
import PlayVocabulary from './PlayVocabulary';
import PlaySpelling from './PlaySpelling';


const MainNavigator = createStackNavigator(
  //DN:{screen: DN},
  {
  Login: { screen: Login },
  Home: { screen: HomePage },
  Sign: { screen: SignUp },
  Grammar: { screen: Grammar },
  Spelling: { screen: Spelling },
  Vocabulary: { screen: Vocabulary },
  PlayGrammar: {screen: PlayGrammar},
  PlayVocabulary: {screen: PlayVocabulary},
  PlaySpelling: {screen: PlaySpelling}
  },
  {
    defaultNavigationOptions: {
      header: null
    }


});


const App = createAppContainer(MainNavigator);
export default App;