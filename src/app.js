import { Counter } from "./counter/counter.js";
import { Timer } from "./timer/timer.js";

const root = document.getElementById("root")

const counter = new Counter();
counter.mount(root)

const timer = new Timer();
timer.mount(root)

// const counter1 = new Counter();
// counter1.mount(root)

// const timer1 = new Timer();
// timer1.mount(root)