# ReactDemo2
ReactNative跨平台方案记录

---

1.创建项目
> react-native init AwesomeProject

2.运行项目
> react-native run-android

---

#### style(样式)

对于控件的样式设置时需要注意一些问题，RN提供的样式中有部分只支持IOS，并不支持Android，所以对于这些样式应加以区分，如 `Text` 的样式中的 `textDecorationColor` 和 `textDecorationStyle`，只在IOS设备上生效。

#### Image组件

对于Image组件而言，使用还是比较简单的，提供了引用本地资源、网络资源以及Native(原生项目)资源三种方案。

- 1.引用的网络图片资源,直接填入图片地址即可
```
<Image
    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
    style={{ width: 100, height: 100 }}
/>
```
- 2.引用的Native图片资源(即Android 的 drawable 目录)，引用原生项目图片时不需要填写相对地址，只需要填写资源名即可
```
<Image
    source={{ uri: 'app_icon' }}
    style={{ width: 100, height: 100 }}
/>
```
- 3.引用的静态图片资源(即RN项目中的资源文件)，引用此类文件需要注意的是资源文件与引用文件所在目录的不同
```
1.在同一级目录下，使用`./`查找同目录下的资源
--src
 |-- .class
 |-- .img
<Image
    source={require('./dnf_cs.jpg')}
/>

2.不在统一目录下，使用`../`查找上一级目录文件，若上一级没有，可以使用`../../`在上上一级中查找,同理，每往上一级就在地址前加`../`
--src
 |--class
   |-- .class
 |--img
   |-- .img
<Image
    source={require('../dnf_cs.jpg')}
/>

```
