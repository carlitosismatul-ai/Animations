/* =========================================
   NEON SUNFLOWER
   PARTICLES + SPARKLES
   ========================================= */


/* =========================================
   PARTÍCULAS
   ========================================= */

const particlesContainer =
    document.querySelector(".particles");

const particleCount = 45;


for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    /* Posición */

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.top =
        `${45 + Math.random() * 55}%`;


    /* Tamaño */

    const size =
        1.5 + Math.random() * 3.5;

    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


    /* Movimiento horizontal */

    const drift =
        -50 + Math.random() * 100;

    particle.style.setProperty(
        "--drift",
        `${drift}px`
    );


    /* Duración */

    const duration =
        5 + Math.random() * 7;

    particle.style.setProperty(
        "--duration",
        `${duration}s`
    );


    /* Retraso */

    const delay =
        Math.random() * 7;

    particle.style.setProperty(
        "--delay",
        `${delay}s`
    );


    particlesContainer.appendChild(
        particle
    );

}


/* =========================================
   DESTELLOS
   ========================================= */

const sparklesContainer =
    document.querySelector(".sparkles");

const sparkleCount = 18;


for (let i = 0; i < sparkleCount; i++) {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");


    /* Posición */

    sparkle.style.left =
        `${15 + Math.random() * 70}%`;

    sparkle.style.top =
        `${8 + Math.random() * 84}%`;


    /* Tamaño */

    const size =
        2 + Math.random() * 4;

    sparkle.style.width =
        `${size}px`;

    sparkle.style.height =
        `${size}px`;


    /* Duración */

    const duration =
        3 + Math.random() * 5;

    sparkle.style.setProperty(
        "--duration",
        `${duration}s`
    );


    /* Delay */

    const delay =
        Math.random() * 6;

    sparkle.style.setProperty(
        "--delay",
        `${delay}s`
    );


    sparklesContainer.appendChild(
        sparkle
    );

}


/* =========================================
   MOVIMIENTO DEL MOUSE
   ========================================= */

const sunflower =
    document.querySelector(".sunflower");


document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth) - 0.5;

        const y =
            (event.clientY / window.innerHeight) - 0.5;


        const moveX =
            x * 10;

        const moveY =
            y * 6;


        sunflower.style.setProperty(
            "--mouse-x",
            `${moveX}px`
        );

        sunflower.style.setProperty(
            "--mouse-y",
            `${moveY}px`
        );

    }
);