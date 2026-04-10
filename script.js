// Initial Entrance Animation
gsap.from(".main-card", { duration: 1.5, opacity: 0, y: 50, ease: "power4.out" });
gsap.from(".title", { duration: 1, delay: 0.5, opacity: 0, x: -30 });

const revealBtn = document.getElementById('reveal-btn');
const finalScreen = document.getElementById('final-screen');

revealBtn.addEventListener('click', () => {
    // Stage 2 to Stage 3 Transition (Tagra Logic)
    gsap.to(".main-card", { 
        duration: 0.8, 
        scale: 0, 
        opacity: 0, 
        ease: "back.in(1.7)",
        onComplete: () => {
            document.querySelector('.main-card').classList.add('hidden');
            finalScreen.classList.remove('hidden');
            
            // Final Reveal Animation
            gsap.to("#final-screen", { duration: 1, opacity: 1 });
            gsap.from(".big-love", { duration: 1.2, scale: 5, opacity: 0, ease: "expo.out" });
            gsap.from(".nuha-name", { duration: 1, delay: 0.5, y: 50, opacity: 0 });
            
            startHearts();
        }
    });
});

function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "110vh";
        heart.style.fontSize = Math.random() * 30 + 10 + "px";
        document.body.appendChild(heart);

        gsap.to(heart, {
            y: "-120vh",
            x: (Math.random() - 0.5) * 200,
            duration: Math.random() * 3 + 2,
            ease: "none",
            onComplete: () => heart.remove()
        });
    }, 150);
}
