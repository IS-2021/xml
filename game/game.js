console.log("Game loaded");

class SVGNode {
    constructor(selector) {
        this.node = document.querySelector(selector);
    }

    get(attrName) {
        return this.node.getAttribute(attrName);
    }

    getParsed(attrName) {
        return Number(this.get(attrName));
    }

    set(attrName, value) {
        return this.node.setAttribute(attrName, value);
    }
}

// DOM elements
const DOM = {
    ball: new SVGNode("#ball"),
    frame: {
        top: new SVGNode("#frame_top"),
    },
    bar: new SVGNode("#bar"),
};

// Game constants
const BALL_DIR_Y_UP = (BALL_DIR_X_RIGHT = 1);
const BALL_DIR_Y_DOWN = (BALL_DIR_X_LEFT = -1);
let current_dir_y = BALL_DIR_Y_UP;
let current_dir_x = BALL_DIR_X_UP;
const GAME_STEP = 10;

// Game functions
function drawBall() {
    const nextPos = DOM.ball.getParsed("y") - GAME_STEP * current_dir_y;
    DOM.ball.set("y", nextPos);

    if (
        DOM.ball.getParsed("y") <
        DOM.frame.top.getParsed("y") + DOM.frame.top.getParsed("height")
    ) {
        current_dir_y = BALL_DIR_Y_DOWN;
    }
}

// Main game loop
const drawGame = () => {
    drawBall();

    window.requestAnimationFrame(drawGame);
};

window.requestAnimationFrame(drawGame);
