const createElement = (tag, props = {}) => Object.assign(document.createElement(tag), props);

const url = new URL(location.href);
const reloadcounter = Number(url.searchParams.get("reloadcounter")) || 0;

let counter = 60 * 3;
let paused = false;
let touch = false;
const show = () => display.textContent = `${counter} / ${reloadcounter}`;
const pause = (state) => {
	paused = state;
	display.style.background = paused ? "green" : "red";
};
const display = createElement("count-down", {
	style: "position:fixed;top:0;left:0;z-index:99999;"
				+"padding:4px 8px;font:bold 21px monospace;"
				+"background:red;color:#fff;cursor:pointer;user-select:none",
	// mouse: pause while hovering
	onpointerenter: (e) => e.pointerType == "mouse" && pause(true),
	onpointerleave: (e) => e.pointerType == "mouse" && pause(false),
	// touch/pen: tap toggles
	onpointerdown: (e) => touch = e.pointerType != "mouse",
	onclick: () => touch && pause(!paused)
});
show();
document.body.append(display);

setInterval(function () {
	if (paused) return;
	if (!counter) {
		url.searchParams.set("reloadcounter", reloadcounter + 1);
		return location.replace(url);
	}
	counter--;
	show();
}, 1e3);
