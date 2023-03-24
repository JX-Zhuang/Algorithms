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
* 根据需求，我们把题目的流程配置抽象成有向图，题目是节点，题目之间的连线是边。
* 去除题目和各种条件等无关的结构，数据结构如下。
```ts
//边
export interface Edge {
    id: string;
    source: {
        cell: string;   //这条边的起点的id
        [x: string]: any;
    };
    target: {
        cell: string;   //这条边的终点的id
        [x: string]: any;
    };
    data: {
        type: 'EDGE',
        [x: string]: any;
    }
    [x: string]: any;
};
//节点
export interface Node {
    id: string;
    data: {
        type: 'NODE';
        name: string;
        [x: string]: any;
    };
    [x: string]: any;
};
export type Data = Node | Edge;
```
* 测试数据如下
```ts
const data: Data[] = [
    {
        id: '1',
        data: {
            type: 'NODE',
            name: '节点1'
        }
    },
    {
        id: '2',
        data: {
            type: 'NODE',
            name: '节点2'
        }
    },
    {
        id: '3',
        data: {
            type: 'NODE',
            name: '节点3'
        }
    },
    {
        id: '4',
        source: {
            cell: '1'
        },
        target: {
            cell: '2'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '5',
        source: {
            cell: '1'
        },
        target: {
            cell: '3'
        },
        data: {
            type: 'EDGE'
        }
    }
];
```
* 根据数据结构和测试数据`data:Data[]`，分为以下几个步骤：
    1. 获得边的集合和节点的集合。
    2. 根据边的集合和节点的集合，获得每个节点的有向邻居节点的集合。即以每个节点的为起点，通过边连接的下一个节点的集合。例如测试数据`节点1`，通过边`id4`和边`id5`，可以连接`节点2`和`节点3`，所以`节点1`的邻居节点是`节点2`和`节点3`，而`节点2`和`节点3`无有向邻居节点。
    3. 最后根据有向邻居节点的集合，判断是否有环。
### 具体实现
* 获得边的集合和节点的集合
``` ts
const edges: Map<string, Edge> = new Map(), nodes: Map<string, Node> = new Map();
const idMapTargetNodes: Map<string, Node[]> = new Map();
const initGraph = () => {
    for (const item of data) {
        const { id } = item;
        if (item.data.type === 'EDGE') {
            edges.set(id, item as Edge);
        } else {
            nodes.set(id, item as Node);
        }
    }
};
```
