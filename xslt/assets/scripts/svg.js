const genreNames = document.querySelectorAll("#name");
const bars = document.querySelectorAll("#bars");
const barsBg = document.querySelectorAll("#bg");

const GSAPGreen = "#88ce02";

// Make elements appear
gsap.from("#title", {
    attr: {
        fill: "white",
    },
    opacity: 0,
    duration: 2.5,
});

bars.forEach((bar, i) => {
    gsap.from(bar, {
        duration: 1,
        opacity: 0,
        delay: 1 + i / 4,
    });
});

gsap.from(barsBg[1], {
    attr: {
        width: 0,
    },
});

// Animating title
barsBg.forEach((bg, i) => {
    bg._paused = false;
    const timeline = gsap.timeline({ paused: true });

    timeline.to(bg, {
        duration: 0.7,
        attr: {
            width: 100,
            fill: GSAPGreen,
            stagger: 0.02,
        },
    });

    bg.addEventListener("mouseenter", function (e) {
        timeline.play();
    });
    bg.addEventListener("click", function (e) {
        console.log(e.target._paused);
        e.target._paused = !e.target._paused;
        if (!e.target._paused) {
            timeline.pause();
        } else {
            timeline.resume();
        }
    });
    bg.addEventListener("mouseleave", function (e) {
        if (!e.target._paused) timeline.reverse();
    });
});

// Animating genre name
genreNames.forEach((name, i) => {
    name.klikniety = false;

    const timeline = gsap.timeline({ paused: true });
    const timeline2 = gsap.timeline({ paused: true });

    timeline.to(name, {
        duration: 0.2,
        attr: {
            width: 100,
            fill: GSAPGreen,
        },
    });
    timeline2.to(name, {
        duration: 0.2,
        rotation: -4,
        transformOrigin: "50% 50%",
    });

    name.addEventListener("mouseenter", function (e) {
        timeline.play();
    });
    name.addEventListener("mouseleave", function (e) {
        timeline.reverse();
    });
    name.addEventListener("click", function (e) {
        e.target.klikniety = !e.target.klikniety;
        if (e.target.klikniety) {
            timeline2.play();
        } else {
            timeline2.reverse();
        }
    });
});
