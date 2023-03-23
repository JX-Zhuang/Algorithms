interface Edge {
    id: string;
    source: {
        cell: string;
        [x: string]: any;
    };
    target: {
        cell: string;
        [x: string]: any;
    };
    data: {
        type: 'EDGE',
        name: string;
        [x: string]: any;
    },
    [x: string]: any;
};
interface Node {
    id: string;
    data: {
        type: 'START' | 'NODE' | 'END' | 'GROUP';
        name: string;
        [x: string]: any;
    };
    [x: string]: any;
};
type Data = Node | Edge;
const data: Data[] = [
    {
        "id": "5eb0d092-c039-43d4-a144-5d01be622eae",
        "data": {
            "type": "START",
            "name": "开始节点"
        }
    },
    {
        "id": "89675169-280d-4229-884f-a17213fb1de6",
        "data": {
            "type": "NODE",
            "name": "1"
        }
    },
    {
        "id": "19b34505-300c-45f7-9384-82a16ac929d6",
        "data": {
            "type": "NODE",
            "name": "2"
        }
    },
    {
        "id": "3b23715c-4237-4bbd-bd77-a203743184a8",
        "data": {
            "type": "NODE",
            "name": "3"
        }
    },
    {
        "id": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
        "data": {
            "type": "NODE",
            "name": "4"
        }
    },
    {
        "id": "d0b07a6d-ebec-4759-9cc0-6ffedaf9e140",
        "data": {
            "type": "END",
            "name": "结束节点"
        }
    },
    {
        "id": "7db83160-114d-45bd-82af-cda8ebdcb76e",
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae"
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "3d4d8943-c304-4ccd-be06-12d7aa40fad1",
        "source": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "7ed552d1-c16e-4648-9940-4b418be5697e",
        "source": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "target": {
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "ae997597-11a9-4196-bb5c-c0850fdf8f7c",
        "source": {
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",
        },
        "target": {
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "c5b54744-2598-42d5-8062-5542afde14d3",
        "source": {
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
        },
        "target": {
            "cell": "d0b07a6d-ebec-4759-9cc0-6ffedaf9e140",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "96b1cdb1-dbc9-4ca1-82fe-80a55fd33348",
        "source": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "target": {
            "cell": "d0b07a6d-ebec-4759-9cc0-6ffedaf9e140",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "f2f54d1a-9ff3-4724-82bb-8692dacaea37",
        "source": {
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "2316409a-b097-48a2-9bb1-4adb2b8c22b5",
        "source": {
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    },
    {
        "id": "bcece724-41d0-4d07-a0e3-6558554828f4",
        "source": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "data": {
            "type": "EDGE",
            "name": ""
        }
    }
];
const data1: Data[] = [
    {
        id: '5eb0d092-c039-43d4-a144-5d01be622eae',
        position: {
            x: -210,
            y: -310
        },
        size: {
            width: 100,
            height: 28
        },
        shape: 'rect',
        attrs: {
            label: {
                fontSize: 12,
                text: '开始节点',
                fill: '#fff'
            },
            body: {
                fill: '#696488',
                stroke: '#696488'
            }
        },
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'bottom',
                    group: 'bottom'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'START',
            name: '开始节点'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: '89675169-280d-4229-884f-a17213fb1de6',
        position: {
            x: -240,
            y: -210
        },
        size: {
            width: 160,
            height: 56
        },
        shape: 'group-node',
        attrs: null,
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'top',
                    group: 'top'
                },
                {
                    id: 'bottom',
                    group: 'bottom'
                },
                {
                    id: 'left',
                    group: 'left'
                },
                {
                    id: 'right',
                    group: 'right'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: ['955661648984236032'],
            type: 'GROUP',
            name: '1'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: '19b34505-300c-45f7-9384-82a16ac929d6',
        position: {
            x: -420,
            y: -110
        },
        size: {
            width: 160,
            height: 82
        },
        shape: 'group-node',
        attrs: null,
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'top',
                    group: 'top'
                },
                {
                    id: 'bottom',
                    group: 'bottom'
                },
                {
                    id: 'left',
                    group: 'left'
                },
                {
                    id: 'right',
                    group: 'right'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: ['955661996264218624', '955662273998446592'],
            type: 'GROUP',
            name: '2'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: '3b23715c-4237-4bbd-bd77-a203743184a8',
        position: {
            x: -80,
            y: -110
        },
        size: {
            width: 160,
            height: 56
        },
        shape: 'group-node',
        attrs: null,
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'top',
                    group: 'top'
                },
                {
                    id: 'bottom',
                    group: 'bottom'
                },
                {
                    id: 'left',
                    group: 'left'
                },
                {
                    id: 'right',
                    group: 'right'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: ['955662196831641601'],
            type: 'GROUP',
            name: '3'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
        position: {
            x: -80,
            y: 3
        },
        size: {
            width: 160,
            height: 56
        },
        shape: 'group-node',
        attrs: null,
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'top',
                    group: 'top'
                },
                {
                    id: 'bottom',
                    group: 'bottom'
                },
                {
                    id: 'left',
                    group: 'left'
                },
                {
                    id: 'right',
                    group: 'right'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: ['955662557185269760'],
            type: 'GROUP',
            name: '4'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
        position: {
            x: -200,
            y: 246
        },
        size: {
            width: 100,
            height: 28
        },
        shape: 'rect',
        attrs: {
            label: {
                fontSize: 12,
                text: '结束节点',
                fill: '#fff'
            },
            body: {
                fill: '#555555',
                stroke: '#555555'
            }
        },
        source: null,
        target: null,
        ports: {
            groups: {
                top: {
                    position: 'top',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                left: {
                    position: 'left',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                bottom: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                },
                right: {
                    position: 'right',
                    attrs: {
                        circle: {
                            strokeWidth: 1,
                            r: 5,
                            fill: '#fff',
                            magnet: true,
                            stroke: '#C2C8D5'
                        }
                    }
                }
            },
            items: [
                {
                    id: 'top',
                    group: 'top'
                }
            ]
        },
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'END',
            name: '结束节点'
        },
        defaultLabel: null,
        labels: null,
        zindex: null
    },
    {
        id: '7db83160-114d-45bd-82af-cda8ebdcb76e',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '5eb0d092-c039-43d4-a144-5d01be622eae',
            port: 'bottom'
        },
        target: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [],
        zindex: null
    },
    {
        id: '3d4d8943-c304-4ccd-be06-12d7aa40fad1',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
            port: 'left'
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: [
                {
                    id: 'A',
                    questionId: '955661648984236032',
                    operator: 'EQ',
                    score: 0
                }
            ],
            expressions: ['A'],
            questionIds: null,
            type: 'EDGE',
            name: 'a'
        },
        defaultLabel: null,
        labels: [
            {
                attrs: {
                    label: {
                        cursor: 'pointer',
                        overflow: 'hidden',
                        fontSize: 12,
                        text: 'a',
                        fill: '#000'
                    },
                    body: {
                        border: '1px solid #ffa940',
                        textAlign: 'center',
                        width: 120,
                        fill: '#ffd591'
                    }
                }
            }
        ],
        zindex: null
    },
    {
        id: '7ed552d1-c16e-4648-9940-4b418be5697e',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
            port: 'right'
        },
        target: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [
            {
                attrs: {
                    label: {
                        cursor: 'pointer',
                        overflow: 'hidden',
                        fontSize: 12,
                        text: '规则配置',
                        fill: '#000'
                    },
                    body: {
                        border: '1px solid #ffa940',
                        textAlign: 'center',
                        width: 120,
                        fill: '#ffd591'
                    }
                }
            }
        ],
        zindex: null
    },
    {
        id: 'ae997597-11a9-4196-bb5c-c0850fdf8f7c',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
            port: 'bottom'
        },
        target: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [
            {
                attrs: {
                    label: {
                        cursor: 'pointer',
                        overflow: 'hidden',
                        fontSize: 12,
                        text: '规则配置',
                        fill: '#000'
                    },
                    body: {
                        border: '1px solid #ffa940',
                        textAlign: 'center',
                        width: 120,
                        fill: '#ffd591'
                    }
                }
            }
        ],
        zindex: null
    },
    {
        id: 'c5b54744-2598-42d5-8062-5542afde14d3',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
            port: 'bottom'
        },
        target: {
            cell: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [],
        zindex: null
    },
    {
        id: '96b1cdb1-dbc9-4ca1-82fe-80a55fd33348',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
            port: 'bottom'
        },
        target: {
            cell: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
            port: 'top'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [],
        zindex: null
    },
    {
        id: 'f2f54d1a-9ff3-4724-82bb-8692dacaea37',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
            port: 'left'
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
            port: 'right'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [
            {
                attrs: {
                    label: {
                        cursor: 'pointer',
                        overflow: 'hidden',
                        fontSize: 12,
                        text: '规则配置',
                        fill: '#000'
                    },
                    body: {
                        border: '1px solid #ffa940',
                        textAlign: 'center',
                        width: 120,
                        fill: '#ffd591'
                    }
                }
            }
        ],
        zindex: null
    },
    {
        id: '2316409a-b097-48a2-9bb1-4adb2b8c22b5',
        position: null,
        size: null,
        shape: 'edge',
        attrs: {
            line: {
                style: {
                    animation: 'ant-line 30s infinite linear'
                },
                stroke: '#C2C8D5',
                strokeDasharray: ''
            }
        },
        source: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
            port: 'left'
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
            port: 'right'
        },
        ports: null,
        children: null,
        parent: null,
        data: {
            conditions: null,
            expressions: null,
            questionIds: null,
            type: 'EDGE',
            name: ''
        },
        defaultLabel: null,
        labels: [
            {
                attrs: {
                    label: {
                        cursor: 'pointer',
                        overflow: 'hidden',
                        fontSize: 12,
                        text: '规则配置',
                        fill: '#000'
                    },
                    body: {
                        border: '1px solid #ffa940',
                        textAlign: 'center',
                        width: 120,
                        fill: '#ffd591'
                    }
                }
            }
        ],
        zindex: null
    }
];
const data2: Data[] = [
    {
        "id": "5eb0d092-c039-43d4-a144-5d01be622eae",
        "position": {
            "x": -210,
            "y": -310
        },
        "size": {
            "width": 100,
            "height": 28
        },
        "shape": "rect",
        "attrs": {
            "label": {
                "fontSize": 12,
                "text": "开始节点",
                "fill": "#fff"
            },
            "body": {
                "fill": "#696488",
                "stroke": "#696488"
            }
        },
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "bottom",
                    "group": "bottom"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "START",
            "name": "开始节点"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "89675169-280d-4229-884f-a17213fb1de6",
        "position": {
            "x": -370,
            "y": -217
        },
        "size": {
            "width": 160,
            "height": 56
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [
                "955661648984236032"
            ],
            "type": "GROUP",
            "name": "1"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "7db83160-114d-45bd-82af-cda8ebdcb76e",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae",
            "port": "bottom"
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [],
        "zindex": null
    },
    {
        "id": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
        "position": {
            "x": -85,
            "y": -217
        },
        "size": {
            "width": 160,
            "height": 56
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [
                "955661996264218624"
            ],
            "type": "GROUP",
            "name": "2"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "a8c9b440-b222-40b8-8a43-0e6dcc102a32",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
            "port": "left"
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
            "port": "right"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "c1866c9b-33a4-434f-b95e-3e39722dd742",
        "position": {
            "x": -370,
            "y": -90
        },
        "size": {
            "width": 160,
            "height": 56
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [
                "955662196831641601"
            ],
            "type": "GROUP",
            "name": "3"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "3db9d14c-47be-42c1-8372-c45a09102d89",
        "position": {
            "x": -85,
            "y": -97
        },
        "size": {
            "width": 160,
            "height": 56
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [
                "955662273998446592"
            ],
            "type": "GROUP",
            "name": "4"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "821f87c3-ce23-4305-a860-6371cb02cec1",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
            "port": "bottom"
        },
        "target": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "86078453-7f50-4442-a3ec-5c977046a8ad",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",
            "port": "bottom"
        },
        "target": {
            "cell": "3db9d14c-47be-42c1-8372-c45a09102d89",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
        "position": {
            "x": -370,
            "y": 162
        },
        "size": {
            "width": 160,
            "height": 56
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [
                "955662557185269760"
            ],
            "type": "GROUP",
            "name": "拖拽题目到此处"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "c210743e-cae1-4962-b303-59a2cd8fe3d2",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "3db9d14c-47be-42c1-8372-c45a09102d89",
            "port": "bottom"
        },
        "target": {
            "cell": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
        "position": {
            "x": -350,
            "y": 240
        },
        "size": {
            "width": 160,
            "height": 30
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [],
            "type": "GROUP",
            "name": "拖拽题目到此处"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
        "position": {
            "x": -350,
            "y": 321
        },
        "size": {
            "width": 160,
            "height": 30
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [],
            "type": "GROUP",
            "name": "拖拽题目到此处"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
        "position": {
            "x": -20,
            "y": 36
        },
        "size": {
            "width": 160,
            "height": 30
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [],
            "type": "GROUP",
            "name": "拖拽题目到此处"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "d223eb14-6c99-4220-b2bd-0842ffb780fe",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae",
            "port": "bottom"
        },
        "target": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [],
        "zindex": null
    },
    {
        "id": "32498270-15b5-43b5-999c-3126d9816832",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "79b08240-fec1-4cdf-a6f8-46a6942bf138",
            "port": "bottom"
        },
        "target": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "b7ffcb30-dabb-4c19-b123-e02b1f7366ef",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
            "port": "left"
        },
        "target": {
            "cell": "c1866c9b-33a4-434f-b95e-3e39722dd742",
            "port": "right"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "bd3501ca-fa55-49b9-a74a-27c28b2f107f",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "42c0af24-fe3a-4418-98b8-c4d0d1c27c94",
            "port": "bottom"
        },
        "target": {
            "cell": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "bd4a04c7-26bf-4471-a377-141af5c21dc5",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "a847af79-0a7d-4878-8255-d9bb7832f7ed",
            "port": "bottom"
        },
        "target": {
            "cell": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
        "position": {
            "x": -380,
            "y": 320
        },
        "size": {
            "width": 160,
            "height": 30
        },
        "shape": "group-node",
        "attrs": null,
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                },
                {
                    "id": "bottom",
                    "group": "bottom"
                },
                {
                    "id": "left",
                    "group": "left"
                },
                {
                    "id": "right",
                    "group": "right"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": [],
            "type": "GROUP",
            "name": "拖拽题目到此处"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "b2c25b6e-1205-429d-850c-07241675d8d1",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-li;ne 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "30a8b142-89d2-46d3-9587-a44d964ad1f1",
            "port": "bottom"
        },
        "target": {
            "cell": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [
            {
                "attrs": {
                    "label": {
                        "cursor": "pointer",
                        "overflow": "hidden",
                        "fontSize": 12,
                        "text": "规则配置",
                        "fill": "#000"
                    },
                    "body": {
                        "border": "1px solid #ffa940",
                        "textAlign": "center",
                        "width": 120,
                        "fill": "#ffd591"
                    }
                }
            }
        ],
        "zindex": null
    },
    {
        "id": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
        "position": {
            "x": -110,
            "y": 359
        },
        "size": {
            "width": 100,
            "height": 28
        },
        "shape": "rect",
        "attrs": {
            "label": {
                "fontSize": 12,
                "text": "结束节点",
                "fill": "#fff"
            },
            "body": {
                "fill": "#555555",
                "stroke": "#555555"
            }
        },
        "source": null,
        "target": null,
        "ports": {
            "groups": {
                "top": {
                    "position": "top",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "left": {
                    "position": "left",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "bottom": {
                    "position": "bottom",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                },
                "right": {
                    "position": "right",
                    "attrs": {
                        "circle": {
                            "strokeWidth": 1,
                            "r": 5,
                            "fill": "#fff",
                            "magnet": true,
                            "stroke": "#C2C8D5"
                        }
                    }
                }
            },
            "items": [
                {
                    "id": "top",
                    "group": "top"
                }
            ]
        },
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "END",
            "name": "结束节点"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "cf5b8064-a220-4973-b793-89c1f4a4b0f0",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "c53c2d78-bb4a-46e4-8850-e31fcd0352a7",
            "port": "bottom"
        },
        "target": {
            "cell": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [],
        "zindex": null
    },
    {
        "id": "bb479470-a2e9-4e64-b257-26fe5ca39d4e",
        "position": null,
        "size": null,
        "shape": "edge",
        "attrs": {
            "line": {
                "style": {
                    "animation": "ant-line 30s infinite linear"
                },
                "stroke": "#C2C8D5",
                "strokeDasharray": ""
            }
        },
        "source": {
            "cell": "008b4f6c-f501-4542-a7e0-5c8b964ff9b8",
            "port": "bottom"
        },
        "target": {
            "cell": "ce2d0291-6aef-4ecd-bedc-e253d502b1a9",
            "port": "top"
        },
        "ports": null,
        "children": null,
        "parent": null,
        "data": {
            "conditions": null,
            "expressions": null,
            "questionIds": null,
            "type": "EDGE",
            "name": ""
        },
        "defaultLabel": null,
        "labels": [],
        "zindex": null
    }
]



const checkCycle = (data: Data[]) => {
    const noCycle: Set<Node> = new Set();
    const visited: Set<Node> = new Set();
    const root = data.find(item => item.data.type === 'START') as Node;
    const edges: Map<string, Edge> = new Map(), nodes: Map<string, Node> = new Map();
    const idMapTargetNodes: Map<string, Node[]> = new Map();
    for (const item of data) {
        const { id } = item;
        if (item.data.type === 'EDGE') {
            edges.set(id, item as Edge);
        } else {
            nodes.set(id, item as Node);
        }
    }
    for (const [id, edge] of edges) {
        const { source, target } = edge;
        const sourceId = source.cell, targetId = target.cell;
        if (nodes.has(sourceId) && nodes.has(targetId)) {
            const targetNodes = idMapTargetNodes.get(sourceId);
            if (Array.isArray(targetNodes)) {
                targetNodes.push(nodes.get(targetId) as Node);
            } else {
                idMapTargetNodes.set(sourceId, [nodes.get(targetId) as Node]);
            }
        }
    }
    const hasCycle = (node: Node, visited: Set<Node>) => {
        if (visited.has(node)) return true;
        visited.add(node);
        const { id } = node;
        const targetNodes = idMapTargetNodes.get(id);
        if (Array.isArray(targetNodes)) {
            for (const item of targetNodes) {
                if (hasCycle(item, visited)) return true;
            }
        }
        visited.delete(node);
        return false;
    }
    if (root === undefined) return false;
    return hasCycle(root, visited);
};
console.time('test');
console.log(checkCycle(data2));
console.timeEnd('test');