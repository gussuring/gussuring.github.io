var svgEl = document.querySelector('svg');
var clipPt = document.querySelector('#Cutout');
var pt = svgEl.createSVGPoint();

/* SVG上のイベント座標取得　*/
function getEventPoint(e, svg) {
    pt.x = e.clientX;
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
}

/* pointに座標をセット */
function pointUpdate(point, coords) {
    point.setAttribute('cx', coords.x);
    point.setAttribute('cy', coords.y);
}

/* マウスの座標にクリップ箇所を移動 */
window.addEventListener('mousemove', function(e) {
  pointUpdate(clipPt, getEventPoint(e, svgEl));
}, false);
