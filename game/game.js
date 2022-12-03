console.log("Game loaded");

const SVGNS = "http://www.w3.org/2000/svg";

// Game constants
const BALL_DIR_Y_UP = -1;
const BALL_DIR_Y_DOWN = 1;
const BALL_DIR_X_RIGHT = 1;
const BALL_DIR_X_LEFT = -1;
const GAME_STEP = 5;

// Constants (do not change)
const BLOCK_WIDTH = 70;
const BLOCK_HEIGHT = 30;
const BLOCK_COUNT = 10;
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

class SVGBall extends SVGNode {
    constructor(obj, xDir, yDir) {
        super(obj);
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
const ball = new SVGBall({ selector: "#ball" }, BALL_DIR_X_LEFT, BALL_DIR_Y_UP);
const frame = {
    top: new SVGNode({ selector: "#frame_top" }),
    left: new SVGNode({ selector: "#frame_left" }),
    right: new SVGNode({ selector: "#frame_right" }),
};
const bar = new SVGNode({ selector: "#bar" });
const svg = new SVGNode({ selector: "svg" });
const deathPit = new SVGNode({ selector: "#death_pit" });
const blocks = [];

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

    for (let i = 0; i < BLOCK_COUNT; i++) {
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
    if (ball.collidesWith(frame.top)) {
        ball.switchYDir();
    }
    // Right frame collision
    else if (ball.collidesWith(frame.right)) {
        ball.switchXDir();
    }
    // Left frame collision
    else if (ball.collidesWith(frame.left)) {
        ball.switchXDir();
    }
    // Bar collision
    else if (ball.collidesWith(bar)) {
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
    else if (ball.collidesWith(deathPit)) {
        console.log("game over");
    }
    // Blocks collision
    checkBallBlocksCollision();
}

function checkBallBlocksCollision() {
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        if (ball.collidesWith(block)) {
            block.node.remove();
            blocks.splice(i, 1);

            ball.switchYDir();
            ball.switchXDir();

            return;
        }
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
    // Add all blocks to game elements
    document.querySelectorAll(".block").forEach((block) => {
        blocks.push(new SVGNode({ domNode: block }));
    });
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
