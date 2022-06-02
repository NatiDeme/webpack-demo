import _ from 'lodash';
import container from './modules/container.js';
import './style.css';

const app = () => {
  const main = document.getElementById('main');
  main.append(container());
};

app();