console.log("Game loaded");

// Game constants
const BALL_DIR_Y_UP = -1;
const BALL_DIR_Y_DOWN = 1;
const BALL_DIR_X_RIGHT = 1;
const BALL_DIR_X_LEFT = -1;
const GAME_STEP = 5;

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

class SVGBall extends SVGNode {
    constructor(selector, xDir, yDir) {
        super(selector);
        this.xDir = xDir;
        this.yDir = yDir;
    }

    switchXDir() {
        if (this.xDir === BALL_DIR_X_LEFT) {
            this.xDir = BALL_DIR_X_RIGHT;
        } else {
            this.xDir = BALL_DIR_X_LEFT;
        }
    }

    switchYDir() {
        if (this.yDir === BALL_DIR_Y_UP) {
            this.yDir = BALL_DIR_Y_DOWN;
        } else {
            this.yDir = BALL_DIR_Y_UP;
        }
    }
}

// DOM elements
const DOM = {
    ball: new SVGBall("#ball", BALL_DIR_X_RIGHT, BALL_DIR_Y_UP),
    frame: {
        top: new SVGNode("#frame_top"),
        left: new SVGNode("#frame_left"),
        right: new SVGNode("#frame_right"),
    },
    bar: new SVGNode("#bar"),
};

// Game functions
function drawBall() {
    const nextXPos = DOM.ball.get("x") + GAME_STEP * DOM.ball.xDir;
    const nextYPos = DOM.ball.get("y") + GAME_STEP * DOM.ball.yDir;
    DOM.ball.set("x", nextXPos);
    DOM.ball.set("y", nextYPos);

    // Top frame collision
    if (
        DOM.ball.get("y") <
        DOM.frame.top.get("y") + DOM.frame.top.get("height")
    ) {
        DOM.ball.switchYDir();
    }
    // Right frame collision
    if (
        DOM.ball.get("x") >
        DOM.frame.right.get("x") - DOM.frame.right.get("width")
    ) {
        DOM.ball.switchXDir();
    }
    // Left frame collision
    if (
        DOM.ball.get("x") <
        DOM.frame.left.get("x") + DOM.frame.left.get("width")
    ) {
        DOM.ball.switchXDir();
    }
    // Bar collision
    if (DOM.ball.get("y") === DOM.bar.get("y") - DOM.bar.get("height")) {
        DOM.ball.switchYDir();
    }
}

// Main game loop
const drawGame = () => {
    drawBall();

    window.requestAnimationFrame(drawGame);
};

window.requestAnimationFrame(drawGame);
