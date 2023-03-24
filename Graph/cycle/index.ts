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
    const hasCycle = (node: Node) => {
        const { id } = node;
        if (checked.has(id)) return false;
        const stack = [id];
        const visited: Set<string> = new Set();
        visited.add(id);
        while (stack.length > 0) {
            const lastId = stack[stack.length - 1];
            const targetNodes = idMapTargetNodes.get(lastId) || [];
            if (targetNodes.length > 0) {
                const { id } = targetNodes.pop() as Node;
                if (visited.has(id)) return true;
                stack.push(id);
                visited.add(id);
            } else {
                stack.pop();
                visited.delete(lastId);
            }
        }
        return false;
    };
    const execute = () => {
        for (const [id, node] of nodes) {
            if (hasCycle(node)) return true;
            checked.add(id);
        }
        return false;
    };
    initGraph();
    initTargetNodes();
    return execute();
};
console.log(checkCycle(data1)); //true
console.log(checkCycle(data2)); //false
console.log(checkCycle(data3)); //false
console.log(checkCycle(data4)); //true
console.log(checkCycle(data6)); //true
console.log(checkCycle(data7)); //false
console.log(checkCycle(data8)); //false
console.log(checkCycle(data9)); //true
