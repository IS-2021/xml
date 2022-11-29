console.log("Game loaded");

class SVGNode {
    constructor(selector) {
        this.node = document.querySelector(selector);
    }

    getStringAttr(attrName) {
        return this.node.getAttribute(attrName);
    }

    get(attrName) {
        return Number(this.getStringAttr(attrName));
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
        left: new SVGNode("#frame_left"),
        right: new SVGNode("#frame_right"),
    },
    bar: new SVGNode("#bar"),
};

// Game constants
const BALL_DIR_Y_UP = -1;
const BALL_DIR_Y_DOWN = 1;
const BALL_DIR_X_RIGHT = 1;
const BALL_DIR_X_LEFT = -1;
let current_dir_y = BALL_DIR_Y_DOWN;
let current_dir_x = BALL_DIR_X_LEFT;
const GAME_STEP = 5;

// Game functions
function drawBall() {
    const nextXPos = DOM.ball.get("x") + GAME_STEP * current_dir_x;
    const nextYPos = DOM.ball.get("y") + GAME_STEP * current_dir_y;
    DOM.ball.set("x", nextXPos);
    DOM.ball.set("y", nextYPos);

    // Top frame collision
    if (
        DOM.ball.get("y") <
        DOM.frame.top.get("y") + DOM.frame.top.get("height")
    ) {
        current_dir_y = BALL_DIR_Y_DOWN;
    }
    // Right frame collision
    if (
        DOM.ball.get("x") >
        DOM.frame.right.get("x") - DOM.frame.right.get("width")
    ) {
        current_dir_x = BALL_DIR_X_LEFT;
    }
    // Left frame collision
    if (
        DOM.ball.get("x") <
        DOM.frame.left.get("x") + DOM.frame.left.get("width")
    ) {
        current_dir_x = BALL_DIR_X_RIGHT;
    }
    // Bar collision
    if (DOM.ball.get("y") === DOM.bar.get("y") - DOM.bar.get("height")) {
        current_dir_y = BALL_DIR_Y_UP;
    }
}

// Main game loop
const drawGame = () => {
    drawBall();

    window.requestAnimationFrame(drawGame);
};

window.requestAnimationFrame(drawGame);
