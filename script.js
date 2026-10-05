// BTS Kuala Lumpur Concert
// 12 December 2026
// 7:30 PM Malaysia Time

const concertDate = new Date(
    "2026-12-12T19:30:00+08:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = concertDate - now;


    if (difference <= 0) {

        document.querySelector(".countdown-section").innerHTML = `
            <div style="
                padding:35px 15px;
                border-radius:25px;
                background:rgba(255,255,255,0.08);
            ">

                <div style="font-size:60px;">
                    💜
                </div>

                <h2 style="
                    font-size:35px;
                    margin:15px 0;
                    color:#e2baff;
                ">
                    IT'S CONCERT DAY!
                </h2>

                <p style="color:#ddd;">
                    Have the most amazing time, my princess!
                    BTS is waiting for you! ✨
                </p>

            </div>
        `;

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);



// MUSIC BUTTON

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");


let playing = false;


musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicButton.innerHTML = "⏸️ Pause Music";

        playing = true;

    } else {

        music.pause();

        musicButton.innerHTML = "🎵 Play Music";

        playing = false;

    }

});