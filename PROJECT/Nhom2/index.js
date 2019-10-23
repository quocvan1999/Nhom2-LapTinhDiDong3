/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './HomePage'
import SignUp from './NewAccount'
import Navi from './Navigation'
import Grammar from './Grammar'
import Vocabulary from './Vocabulary'
import Spelling from './Spelling'
import {name as appName} from './app.json';




AppRegistry.registerComponent(appName, () => Navi);

