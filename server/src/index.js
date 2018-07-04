require('babel-core/register')({
  ignore: /node_modules/(?!ProjectB)/
}); 
import 'babel-polyfill'
import {start} from './start'

start()
