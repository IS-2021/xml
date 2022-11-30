console.log("Game loaded");

// Game constants
const BALL_DIR_Y_UP = -1;
const BALL_DIR_Y_DOWN = 1;
const BALL_DIR_X_RIGHT = 1;
const BALL_DIR_X_LEFT = -1;
const GAME_STEP = 5;
let barMoveEnabled = true;

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

    get x() {
        return this.get("x");
    }

    get y() {
        return this.get("y");
    }

    get width() {
        return this.get("width");
    }

    get height() {
        return this.get("height");
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
    board: new SVGNode("svg"),
};

// Game functions
function drawBall() {
    const nextXPos = DOM.ball.x + GAME_STEP * DOM.ball.xDir;
    const nextYPos = DOM.ball.y + GAME_STEP * DOM.ball.yDir;
    DOM.ball.set("x", nextXPos);
    DOM.ball.set("y", nextYPos);

    // Top frame collision
    if (DOM.ball.y < DOM.frame.top.y + DOM.frame.top.height) {
        DOM.ball.switchYDir();
    }
    // Right frame collision
    if (DOM.ball.x > DOM.frame.right.x - DOM.frame.right.width) {
        DOM.ball.switchXDir();
    }
    // Left frame collision
    if (DOM.ball.x < DOM.frame.left.x + DOM.frame.left.width) {
        DOM.ball.switchXDir();
    }
    // Bar collision
    if (
        DOM.ball.x >= DOM.bar.x &&
        DOM.ball.x <= DOM.bar.x + DOM.bar.width &&
        DOM.ball.y === DOM.bar.y
    ) {
        DOM.ball.switchYDir();

        // Switch direction depending on the side the bar was hit
        const barMid = DOM.bar.x + DOM.bar.width / 2;
        console.log(DOM.ball.x, barMid);
        if (DOM.ball.x < barMid) {
            DOM.ball.xDir = BALL_DIR_X_LEFT;
        } else {
            DOM.ball.xDir = BALL_DIR_X_RIGHT;
        }
    }

    // Bottom edge collision
    if (DOM.ball.y >= DOM.board.height) {
        console.log("game over");
    }
}

const moveBar = (e) => {
    if (!barMoveEnabled) return;

    const bar_w = DOM.bar.width;
    const clientX = e.clientX - bar_w / 2;
    const boundLeft = DOM.frame.left.width;
    const boundRight = DOM.frame.right.x - bar_w;

    if (clientX > boundLeft && clientX < boundRight) {
        DOM.bar.set("x", clientX);
    }
    // If the mouse moves out of bounds while the event
    // is throttled - set the position to the end
    else if (clientX <= boundLeft) {
        DOM.bar.set("x", boundLeft);
    } else if (clientX >= boundRight) {
        DOM.bar.set("x", boundRight);
    }
};

const moveBarThrottled = _.throttle(moveBar, 10);
document.addEventListener("mousemove", moveBarThrottled);

// Main game loop
const drawGame = () => {
    drawBall();

    window.requestAnimationFrame(drawGame);
};

window.requestAnimationFrame(drawGame);
