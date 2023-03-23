import { Data } from './type';
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
            "name": "4"
        }
    },
    {
        "id": "3b23715c-4237-4bbd-bd77-a203743184a8",
        "data": {
            "type": "NODE",
            "name": "5"
        }
    },
    {
        "id": "2729205d-4f23-4cd2-95a3-5e321459634d",
        "data": {
            "type": "NODE",
            "name": "2"
        }
    },
    {
        "id": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
        "data": {
            "type": "NODE",
            "name": "3"
        }
    },
    {
        "id": "d0b07a6d-ebec-4759-9cc0-6ffedaf9e140",
        "data": {
            "type": "NODE",
            "name": "name"
        }
    },
    {
        "id": "7db83160-114d-45bd-82af-cda8ebdcb76e",
        "source": {
            "cell": "5eb0d092-c039-43d4-a144-5d01be622eae",
        },
        "target": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "data": {
            "type": "EDGE"
        }
    },
    {
        "id": "d72352a9-1eed-44f3-a9f7-977bf6567c57",
        "source": {
            "cell": "89675169-280d-4229-884f-a17213fb1de6",
        },
        "target": {
            "cell": "2729205d-4f23-4cd2-95a3-5e321459634d",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "75cb7f5c-d66b-4767-a84b-4074fb88ee6c",
        "source": {
            "cell": "2729205d-4f23-4cd2-95a3-5e321459634d",
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
        },
        "data": {
            "type": "EDGE",
        }
    },
    {
        "id": "680626ad-73e1-4628-a6d6-5602c4de733e",
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
            "port": "right"
        },
        "target": {
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",

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
        "id": "b9db2a43-da2d-467d-8d34-9a7abad1824c",
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
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
            "port": "bottom"
        },
        "target": {
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",

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
        "id": "bbc30d64-f4f0-4985-97bf-f7a7afdae0af",
        "position": {
            "x": -410,
            "y": 140
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
            "type": "NODE",
            "name": "6"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "52264120-a5e7-41a7-a573-88449cd708fe",
        "position": {
            "x": -410,
            "y": 256
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
            "type": "NODE",
            "name": "7"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "4797aff7-8e53-4675-bf0e-e187923fb6fa",
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
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
            "port": "bottom"
        },
        "target": {
            "cell": "bbc30d64-f4f0-4985-97bf-f7a7afdae0af",

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
        "id": "f3086342-27af-47e1-9413-817c1f423f79",
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
            "cell": "bbc30d64-f4f0-4985-97bf-f7a7afdae0af",
            "port": "bottom"
        },
        "target": {
            "cell": "52264120-a5e7-41a7-a573-88449cd708fe",

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
        "id": "c940cbb7-8663-43ad-9623-e8172f8830a0",
        "position": {
            "x": -410,
            "y": 356
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
            "type": "NODE",
            "name": "8"
        },
        "defaultLabel": null,
        "labels": null,
        "zindex": null
    },
    {
        "id": "8f075d41-5f94-42a4-941f-52104da5729d",
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
            "cell": "52264120-a5e7-41a7-a573-88449cd708fe",
            "port": "bottom"
        },
        "target": {
            "cell": "c940cbb7-8663-43ad-9623-e8172f8830a0",

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
    },
    {
        "id": "8c0360d0-7c2b-4826-9c85-0870223d1130",
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
            "cell": "c940cbb7-8663-43ad-9623-e8172f8830a0",
            "port": "bottom"
        },
        "target": {
            "cell": "d0b07a6d-ebec-4759-9cc0-6ffedaf9e140",

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
        "id": "57b7ecac-4595-49a5-972a-6ff4812ca012",
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
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",
            "port": "left"
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
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
        "id": "baccfb8e-d720-4932-b140-211ee7a6b3c1",
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
            "cell": "3d24c23f-ac5d-4f00-9b22-afb23c0243dc",
            "port": "left"
        },
        "target": {
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
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
        "id": "9eb1293f-1f2d-4a81-b473-cbeba21d2e99",
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
            "cell": "19b34505-300c-45f7-9384-82a16ac929d6",
            "port": "left"
        },
        "target": {
            "cell": "3b23715c-4237-4bbd-bd77-a203743184a8",
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
    }
];
export default data;