import { Data, Node, Edge } from './type';
import data1 from './data1';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
import data6 from './data6';
import data7 from './data7';
import data8 from './data8';
import data9 from './data9';
const checkCycle = (data: Data[]) => {
    const checked: Set<string> = new Set();
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
    const initTargetNodes = () => {
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
    };
    const hasCycle = (node: Node, visited: Set<Node>) => {
        if (checked.has(node.id)) return false;
        if (visited.has(node)) return true;
        visited.add(node);
        const { id } = node;
        const targetNodes = idMapTargetNodes.get(id);
        if (Array.isArray(targetNodes)) {
            for (const item of targetNodes) {
                if (hasCycle(item, visited)) return true;
            }
        }
        checked.add(node.id);
        visited.delete(node);
        return false;
    };
    const execute = () => {
        const visited: Set<Node> = new Set();
        for (const [id, node] of nodes) {
            if (hasCycle(node, visited)) return true;
            checked.add(id);
        }
        return false;
    };
    initGraph();
    initTargetNodes();
    return execute();
};
console.log(checkCycle(data1));
console.log(checkCycle(data2));
console.log(checkCycle(data3));
console.log(checkCycle(data4));
console.log(checkCycle(data6));
console.log(checkCycle(data7));
console.log(checkCycle(data8));
console.log(checkCycle(data9));