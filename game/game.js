console.log("Game loaded");

const SVGNS = "http://www.w3.org/2000/svg";

// Game constants
const BALL_DIR_Y_UP = -1;
const BALL_DIR_Y_DOWN = 1;
const BALL_DIR_X_RIGHT = 1;
const BALL_DIR_X_LEFT = -1;
const GAME_STEP = 5;

// Contants (do not change)
const BLOCK_WIDTH = 70;
const BLOCK_HEIGHT = 30;
const BLOCK_COLORS = {
    WHITE: "#cccccc",
    RED: "#ff5d5d",
    ORANGE: "#fdaf68",
    YELLOW: "#ffd25d",
    GREEN: "#86ffa8",
    BLUE: "#87c5fe",
};
BLOCK_COLORS.DEFAULT = BLOCK_COLORS.WHITE;
const BLOCK_ROW_COUNT = 5;

// Game variables
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

    set x(value) {
        this.set("x", value);
    }

    get y() {
        return this.get("y");
    }

    set y(value) {
        this.set("y", value);
    }

    get width() {
        return this.get("width");
    }

    set width(value) {
        this.set("width", value);
    }

    get height() {
        return this.get("height");
    }

    set height(value) {
        this.set("height", value);
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

// SVG elements
const ball = new SVGBall("#ball", BALL_DIR_X_RIGHT, BALL_DIR_Y_UP);
const frame = {
    top: new SVGNode("#frame_top"),
    left: new SVGNode("#frame_left"),
    right: new SVGNode("#frame_right"),
};
const bar = new SVGNode("#bar");
const svg = new SVGNode("svg");

// Game functions
function createBlock(x, y, color = BLOCK_COLORS.DEFAULT) {
    const rect = document.createElementNS(SVGNS, "rect");

    // Position
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", BLOCK_WIDTH);
    rect.setAttribute("height", BLOCK_HEIGHT);
    // Styling
    rect.setAttribute("class", "block");
    rect.setAttribute("fill", color);

    return rect;
}

function createBlockRow(index = 0, color = BLOCK_COLORS.DEFAULT) {
    const FIRST_BLOCK_X = 50;
    const FIRST_BLOCK_Y = 90;
    const Y_OFFSET = BLOCK_HEIGHT * index;

    for (let i = 0; i < 10; i++) {
        const x = FIRST_BLOCK_X + BLOCK_WIDTH * i;
        const y = FIRST_BLOCK_Y + Y_OFFSET;

        const block = createBlock(x, y, color);
        const game = document.querySelector("#blocks");
        game.appendChild(block);
    }
}

function createAllBlocks() {
    const colorCount = Object.keys(BLOCK_COLORS).length - 2;

    for (let i = 0; i < BLOCK_ROW_COUNT; i++) {
        const colorKey = Object.keys(BLOCK_COLORS)[1 + (i % colorCount)];
        createBlockRow(i, BLOCK_COLORS[colorKey]);
    }
}

function drawBall() {
    const nextXPos = ball.x + GAME_STEP * ball.xDir;
    const nextYPos = ball.y + GAME_STEP * ball.yDir;
    ball.x = nextXPos;
    ball.y = nextYPos;

    // Top frame collision
    if (ball.y < frame.top.y + frame.top.height) {
        ball.switchYDir();
    }
    // Right frame collision
    if (ball.x > frame.right.x - frame.right.width) {
        ball.switchXDir();
    }
    // Left frame collision
    if (ball.x < frame.left.x + frame.left.width) {
        ball.switchXDir();
    }
    // Bar collision
    if (ball.x >= bar.x && ball.x <= bar.x + bar.width && ball.y === bar.y) {
        ball.switchYDir();

        // Switch direction depending on the side the bar was hit
        const barMid = bar.x + bar.width / 2;
        if (ball.x < barMid) {
            ball.xDir = BALL_DIR_X_LEFT;
        } else {
            ball.xDir = BALL_DIR_X_RIGHT;
        }
    }

    // Bottom edge collision
    if (ball.y >= svg.height) {
        console.log("game over");
    }
}

const moveBar = (e) => {
    if (!barMoveEnabled) return;

    const bar_w = bar.width;
    const clientX = e.clientX - bar_w / 2;
    const boundLeft = frame.left.width;
    const boundRight = frame.right.x - bar_w;

    if (clientX > boundLeft && clientX < boundRight) {
        bar.x = clientX;
    }
    // If the mouse moves out of bounds while the event
    // is throttled - set the position to the end
    else if (clientX <= boundLeft) {
        bar.x = boundLeft;
    } else if (clientX >= boundRight) {
        bar.x = boundRight;
    }
};

const moveBarThrottled = _.throttle(moveBar, 10);
document.addEventListener("mousemove", moveBarThrottled);

function startNewGame() {
    createAllBlocks();
}

// Main game loop
const drawGame = () => {
    drawBall();

    window.requestAnimationFrame(drawGame);
};

document.addEventListener("DOMContentLoaded", () => {
    startNewGame();

    window.requestAnimationFrame(drawGame);
});
