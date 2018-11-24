## webpack配置优化

### dev环境下不使用babel
开发环境中，我们通常使用chrome进行开发调试，chrome对ES6的大部分人语法都支持，所以建议在开发环境中不使用babel转码，可以减少

### 在开发环境下                                  
### 分离外部资源包
webpack中的dll和external在本质上其实是解决                      的同一个问题：避免将某些外部依赖库打包进我们的业务代码，而是在运行时提供这些依赖。
#### dll
* 符合模块化的要求
* webpack配置比较复杂，需要附带相应的`plugin`
* 使用`dll`的前提是，这些外部依赖一般不需要发生变更。所以，若果某天发生了'变更'，则需要将
项目重新构建。
#### external
* `webpack`配置稍微简单一些
* 外部库升级后，若兼容原来`Api`则可以不需要重新构建。

### 使用缓存？

### 较少冗余代码？

### 硬件上的提升