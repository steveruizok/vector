/**
* @title Undirected Graph Element
* @description This interactive demonstrates the undirected graph element.
* @tags [elements]
*/
import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.border = true;
let graph = interactive.graph();
let a = graph.addNode(75, 75, 'a');
let b = graph.addNode(200, 75, 'b');
graph.addEdge(a, b, false);
//# sourceMappingURL=undirected-graph-element.js.map