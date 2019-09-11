import Element from '../elements/Element.js';
import Node from '../elements/Node.js';
import Edge from '../elements/Edge.js';
import SVG from '../SVG.js';

export default class Graph extends Element {

  nodes: Node[];

  constructor() {
    super();

    this.root = SVG.Group();
    this.root.id = this.id;

    this.nodes = [];
  }

  clear() {
    for(var i = 0; i < this.nodes.length; i++)
    {
      this.nodes[i].edges.forEach(function(item){
        item.remove();
      })
      this.nodes[i].remove();
    }
    this.nodes = [];
  }

  addNode(x:number, y:number, text:string, r=20) : Node
  {
    let node = new Node(x, y, r, text);
    this.root.appendChild(node.root);
    this.nodes.push(node);
    return node;
  }

  addEdge(from: Node, to: Node) : Edge
  {
    let edge = new Edge(from, to, false);

    this.root.appendChild(edge.root);

    from.addEdge(edge);
    to.addEdge(edge);

    return edge;
  }

  size():number{
    return this.nodes.length;
  }
}
