import Element from '../elements/Element.js';
import Node from '../elements/Node.js';
import Edge from '../elements/Edge.js';
import SVG from '../SVG.js';
export default class Graph extends Element {
    constructor() {
        super();
        this.root = SVG.Group();
        this.root.id = this.id;
        this.nodes = [];
    }
    clear() {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].edges.forEach(function (item) {
                item.remove();
            });
            this.nodes[i].remove();
        }
        this.nodes = [];
    }
    addNode(x, y, text, r = 20) {
        let node = new Node(x, y, r, text);
        this.root.appendChild(node.root);
        this.nodes.push(node);
        return node;
    }
    addEdge(from, to) {
        let edge = new Edge(from, to, false);
        this.root.appendChild(edge.root);
        from.addEdge(edge);
        to.addEdge(edge);
        return edge;
    }
    size() {
        return this.nodes.length;
    }
}
//# sourceMappingURL=Graph.js.map