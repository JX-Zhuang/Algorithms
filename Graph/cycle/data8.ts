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
    },
    {
        id: '6',
        source: {
            cell: '3'
        },
        target: {
            cell: '2'
        },
        data: {
            type: 'EDGE'
        }
    }
];
export default data;