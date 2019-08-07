/**
 * 应用入口
 */

import React from 'react';

import MainPage from './src/pages/MainPage';
import StylePage from './src/pages/StylePage';
import FlexPage from './src/pages/FlexPage';

import ViewPage from './src/pages/ViewPage';
import CustomCmpnPage from './src/pages/view/CustomCmpnPage';
import ImagePage from './src/pages/view/ImagePage';
import ListPage from './src/pages/view/ListPage';
import TextInputPage from './src/pages/view/TextInputPage';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    // 首页
    MainPage: MainPage,
    // 样式
    StylePage: StylePage,
    // 布局
    FlexPage: FlexPage,

    // 视图
    ViewPage: ViewPage,
    // 视图-自定义组件
    CustomCmpnPage: CustomCmpnPage,
    // 视图-image
    ImagePage: ImagePage,
    // 视图-ListView
    ListPage: ListPage,
    // 视图-输入文本框
    TextInputPage: TextInputPage,

  },
  {
    initialRouteName: 'MainPage',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
