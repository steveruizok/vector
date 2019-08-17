/**
* This interactive demonstrates the quadratic bezier command for a SVG path
* element. There are three control points that allow the user to control the
* shape of the bezier curve that is drawn.
*
* @title SVG Path Quadratic Bezier Curve
* @date May 3, 2019
* @author Kurt Bruns
*/
import Interactive from '../Interactive.js';
// Initialize the interactive
let id = 'unit-circle-cosine';
let angleInteractive = new Interactive(id);
let margin = 18;
let radius = 80;
angleInteractive.width = 2 * radius + 2 * margin;
angleInteractive.height = 250;
angleInteractive.originX = angleInteractive.width / 2;
angleInteractive.originY = angleInteractive.height / 2;
angleInteractive.root.style.display = 'inline';
// Create a circle
let circle = angleInteractive.circle(0, 0, 80);
// Create a control
let angleControl = angleInteractive.control(circle.r * Math.cos(-1), circle.r * Math.sin(-1));
angleControl.constrainToCircle(circle.cx, circle.cy, circle.r);
let triangle = angleInteractive.path('');
triangle.addDependency(angleControl);
triangle.update = function () {
    this.d = `M ${angleControl.x} 0 L ${angleControl.x} ${angleControl.y} L 0 0z`;
};
triangle.update();
let adjacent = angleInteractive.path('');
adjacent.root.style.stroke = 'red';
adjacent.addDependency(angleControl);
adjacent.update = function () {
    this.d = `M 0 0 L ${angleControl.x} 0`;
};
adjacent.update();
// Create a point at the origin
let anglePoint = angleInteractive.circle(0, 0, 3);
anglePoint.fill = 'black';
let circumference = circle.r * 2 * Math.PI;
let interactive = new Interactive(id);
interactive.width = circumference + 2 * margin;
interactive.height = 250;
interactive.originX = margin;
interactive.originY = interactive.height / 2;
interactive.window = false;
interactive.root.style.display = 'inline';
let graph = interactive.graph(false);
graph.function = Math.cos;
graph.originX = 0;
graph.originY = 0;
graph.yAxis.style.stroke = 'none';
graph.xAxis.x1.baseVal.value = 0;
graph.xAxis.x2.baseVal.value = circumference;
// interactive.root.style.overflow = 'visible';
graph.translate(graph.originX, graph.originY);
graph.scale(2 * Math.PI / (circumference), circle.r);
graph.draw(0, circumference);
let x = interactive.line(0, 0, 0, 0);
x.root.style.stroke = 'red';
let control = interactive.control(0, 0);
function getAngle() {
    if (angleControl.y <= 0) {
        return Math.abs(Math.atan2(angleControl.y, angleControl.x));
    }
    else {
        return Math.PI * 2 - Math.atan2(angleControl.y, angleControl.x);
    }
}
control.addDependency(angleControl);
control.update = function () {
    this.x = circle.r * getAngle();
    this.y = -angleControl.x;
};
control.update();
control.constrain = function (o, n) {
    return { x: n.x, y: graph.call(n.x) };
};
control.onchange = function () {
    angleControl.x = -control.y;
    angleControl.y = -circle.r * Math.sin(control.x / circle.r);
    angleControl.updateDependents();
};
x.addDependency(control);
x.update = function () {
    this.x1 = control.x;
    this.y1 = 0;
    this.x2 = control.x;
    this.y2 = control.y;
};
x.update();
// let text = interactive.text(interactive.width/2, - interactive.height/2 + 30, 'y = sin(θ)');
// text.root.style.textAnchor = 'middle';
interactive.line(0 * circumference / 4, -4, 0 * circumference / 4, 4);
interactive.line(1 * circumference / 4, -4, 1 * circumference / 4, 4);
interactive.line(2 * circumference / 4, -4, 2 * circumference / 4, 4);
interactive.line(3 * circumference / 4, -4, 3 * circumference / 4, 4);
interactive.line(4 * circumference / 4, -4, 4 * circumference / 4, 4);
interactive.text(0 * circumference / 4, -10, `0`).root.style.textAnchor = 'middle';
interactive.text(2 * circumference / 4, -10, `π`).root.style.textAnchor = 'middle';
interactive.text(4 * circumference / 4, -10, `τ`).root.style.textAnchor = 'middle';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1jaXJjbGUtY29zaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL2V4YW1wbGVzL3VuaXQtY2lyY2xlLWNvc2luZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRRTtBQUVGLE9BQU8sV0FBVyxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLDZCQUE2QjtBQUM3QixJQUFJLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQUM5QixJQUFJLGdCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztBQUM3QyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO0FBQ3BELGdCQUFnQixDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUUvQyxrQkFBa0I7QUFDbEIsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFaEQsbUJBQW1CO0FBQ25CLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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R0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLGFBQWEsR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsYUFBYSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsYUFBYSxHQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUUzRCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUM5RSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUM5RSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyJ9