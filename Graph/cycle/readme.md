# 图在前端的应用
* 图是一种常见的数据结构，分为有向图和无向图。图是由边和节点组成的。
* 在前端开发中，接触到图的场景不算多。常见的有流程、图形可视化等场景。
### 背景
* 简单介绍需求，通过可视化流程配置答题流程，题目与题目之间用线连接，箭头的方向代表下一个题目。回答完当前题目，根据不同的条件，跳到下一题；如果题目流程中有循环，会导致答题流程无法结束，所以需要校验题目的流程中不能有循环。
* 下面的是有循环，不符合条件
![有循环](https://github.com/JX-Zhuang/Algorithms/blob/master/Graph/cycle/imgs/cycle1.png?raw=true)
* 下面的是无循环，符合条件
![无循环](https://github.com/JX-Zhuang/Algorithms/blob/master/Graph/cycle/imgs/noCycle1.png?raw=true)
![无循环](https://github.com/JX-Zhuang/Algorithms/blob/master/Graph/cycle/imgs/noCycle2.png?raw=true)
![无循环](https://github.com/JX-Zhuang/Algorithms/blob/master/Graph/cycle/imgs/noCycle3.png?raw=true)
![无循环](https://github.com/JX-Zhuang/Algorithms/blob/master/Graph/cycle/imgs/noCycle4.png?raw=true)
### 技术方案
* 根据需求，我们把题目的流程配置抽象成图，题目是节点，题目之间的连线是边。