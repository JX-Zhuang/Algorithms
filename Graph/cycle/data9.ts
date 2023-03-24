import { Data } from './type';
const data: Data[] = [
    {
        id: '1',
        data: {
            type: 'NODE',
            name: '1'
        }
    },
    {
        id: '2',
        data: {
            type: 'NODE',
            name: '2'
        }
    },
    {
        id: '3',
        data: {
            type: 'NODE',
            name: '3'
        }
    },
    {
        id: '4',
        data: {
            type: 'NODE',
            name: '4'
        }
    },
    {
        id: '5',
        data: {
            type: 'NODE',
            name: '5'
        }
    },
    {
        id: '6',
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
        id: '7',
        source: {
            cell: '1'
        },
        target: {
            cell: '5'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '8',
        source: {
            cell: '5'
        },
        target: {
            cell: '2'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '9',
        source: {
            cell: '2'
        },
        target: {
            cell: '3'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '10',
        source: {
            cell: '3'
        },
        target: {
            cell: '5'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '11',
        source: {
            cell: '3'
        },
        target: {
            cell: '1'
        },
        data: {
            type: 'EDGE'
        }
    },
    {
        id: '12',
        source: {
            cell: '3'
        },
        target: {
            cell: '4'
        },
        data: {
            type: 'EDGE'
        }
    }
];
export default data;