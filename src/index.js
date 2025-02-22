// import React from 'react';
import '@hvisions/f-ui/dist/fui.css';
import './index.css';
import Core from '@hvisions/app-core';
import router from './router';
const locales = {
  en_US: require('./locales/en_US'),
  zh_CN: require('./locales/zh_CN')
};
const HomeConfig = {
  needBottomBar: true
}

new Core({ router, locales, HomeConfig }).mount('#root');
