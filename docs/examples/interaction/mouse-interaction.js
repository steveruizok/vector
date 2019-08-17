import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 200;
interactive.border = true;
let control = interactive.control(100, 100);
control.root.style.display = 'none';
interactive.root.onmousemove = function (event) {
    let x = event.clientX - interactive.root.getBoundingClientRect().left;
    let y = event.clientY - interactive.root.getBoundingClientRect().top;
    control.translate(x, y);
};
interactive.root.onmouseleave = interactive.root.onmousemove;
let xline = interactive.line(interactive.minX, control.y, interactive.maxX, control.y);
xline.addDependency(control);
xline.update = function () {
    xline.y1 = control.y;
    xline.y2 = control.y;
};
let yline = interactive.line(control.x, interactive.minY, control.x, interactive.maxY);
yline.addDependency(control);
yline.update = function () {
    yline.x1 = control.x;
    yline.x2 = control.x;
};
let opacity = 1;
let circle = interactive.circle(0, 0, 3);
circle.root.style.display = 'none';
interactive.root.onclick = function (event) {
    opacity = 1;
    circle.r = 1;
    circle.root.style.opacity = '1';
    circle.cx = event.clientX - interactive.root.getBoundingClientRect().left;
    circle.cy = event.clientY - interactive.root.getBoundingClientRect().top;
    circle.root.style.display = '';
    // Start the animation cycle
    window.requestAnimationFrame(step);
};
// Animate this interactive by changing the angle and then updating elements
function step(timestamp) {
    circle.r += 1;
    circle.root.style.opacity = opacity.toString();
    opacity -= .02;
    if (opacity > 0) {
        // set up the next animation frame
        window.requestAnimationFrame(step);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2UtaW50ZXJhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvZXhhbXBsZXMvaW50ZXJhY3Rpb24vbW91c2UtaW50ZXJhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3pCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRTFCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFFcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFLO0lBQzVDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQztJQUN0RSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDckUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFBO0FBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFFN0QsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBRSxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEYsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixLQUFLLENBQUMsTUFBTSxHQUFHO0lBQ2IsS0FBSyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUE7QUFFRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6RixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLEtBQUssQ0FBQyxNQUFNLEdBQUc7SUFDYixLQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckIsS0FBSyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNuQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUs7SUFDeEMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNoQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMxRSxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRS9CLDRCQUE0QjtJQUM1QixNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBO0FBRUQsNEVBQTRFO0FBQzVFLFNBQVMsSUFBSSxDQUFDLFNBQVM7SUFFckIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9DLE9BQU8sSUFBSSxHQUFHLENBQUM7SUFFZixJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUc7UUFDaEIsa0NBQWtDO1FBQ2xDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztBQUNILENBQUMifQ==