// Animações GSAP
gsap.from("header h1", { duration: 1.5, y: -50, opacity: 0 });
gsap.from("header p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
gsap.from("h2", { duration: 1, x: -100, opacity: 0, stagger: 0.2 });
gsap.from(".grid .item", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.3 });
