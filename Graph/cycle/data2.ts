import { Data } from './type';
const data: Data[] = [
    {
        id: '5eb0d092-c039-43d4-a144-5d01be622eae',
        data: {
            type: 'NODE',
            name: '开始节点'
        }
    },
    {
        id: '89675169-280d-4229-884f-a17213fb1de6',
        data: {
            type: 'NODE',
            name: '1'
        }
    },
    {
        id: '19b34505-300c-45f7-9384-82a16ac929d6',
        data: {
            type: 'NODE',
            name: '2'
        }
    },
    {
        id: '3b23715c-4237-4bbd-bd77-a203743184a8',
        data: {
            type: 'NODE',
            name: '3'
        }
    },
    {
        id: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
        data: {
            type: 'NODE',
            name: '4'
        },
    },
    {
        id: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
        data: {
            type: 'NODE',
            name: '结束节点'
        },
    },
    {
        id: '7db83160-114d-45bd-82af-cda8ebdcb76e',
        source: {
            cell: '5eb0d092-c039-43d4-a144-5d01be622eae',
        },
        target: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: '3d4d8943-c304-4ccd-be06-12d7aa40fad1',
        source: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: '7ed552d1-c16e-4648-9940-4b418be5697e',
        source: {
            cell: '89675169-280d-4229-884f-a17213fb1de6',
        },
        target: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: 'ae997597-11a9-4196-bb5c-c0850fdf8f7c',
        source: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
        },
        target: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
        },

        data: {
            type: 'EDGE',
        }
    },
    {
        id: 'c5b54744-2598-42d5-8062-5542afde14d3',
        source: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
        },
        target: {
            cell: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: '96b1cdb1-dbc9-4ca1-82fe-80a55fd33348',
        source: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
        },
        target: {
            cell: 'd0b07a6d-ebec-4759-9cc0-6ffedaf9e140',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: 'f2f54d1a-9ff3-4724-82bb-8692dacaea37',
        source: {
            cell: '3b23715c-4237-4bbd-bd77-a203743184a8',
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
        },
        data: {
            type: 'EDGE',
        }
    },
    {
        id: '2316409a-b097-48a2-9bb1-4adb2b8c22b5',
        source: {
            cell: '3d24c23f-ac5d-4f00-9b22-afb23c0243dc',
        },
        target: {
            cell: '19b34505-300c-45f7-9384-82a16ac929d6',
        },
        data: {
            type: 'EDGE',
        }
    }
];
export default data;