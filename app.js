const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// scrollmagic
const controller = new ScrollMagic.Controller();

// Scenes
const scene = new ScrollMagic.Scene({
    duration: 60000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

    // Video Animations
    let accelamount = .1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
        scrollpos = e.scrollPos / 1000; // e.scrollPos => is coming from scrollmagic on the event
        // console.log(e) // logs position
    })

    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        console.log(scrollpos, delay);

        video.currentTime = delay
    }, 41.6); // 33.3 = framerate 