import { Data, Node, Edge } from './type';
import data1 from './data1';
import data4 from './data4';
import data5 from './data5';
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
        const { id } = node;
        const targetNodes = idMapTargetNodes.get(id) || [];
        while (targetNodes.length != 0) {
            const currentNode = targetNodes.shift() as Node;
            if (visited.has(currentNode)) return true;
            const nodes = idMapTargetNodes.get(currentNode.id) || [];
            if (nodes.length === 0) {
                visited.clear();
            } else {
                nodes.forEach(item => {
                    targetNodes.push(item);
                });
                visited.add(currentNode);
            }
        }
        return false;
    };
    if (root === undefined) return false;
    return hasCycle(root, visited);
};
console.log(checkCycle(data1));
console.log(checkCycle(data4));
console.log(checkCycle(data5));