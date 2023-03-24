export interface Edge {
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
        [x: string]: any;
    }
    [x: string]: any;
};
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