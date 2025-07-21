export default function triggerParticleExplosion(x, y, colors = ["#fff"]) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const ratio = window.devicePixelRatio || 1;
  const SIZE = 200;
  const HALF = SIZE / 2;

  canvas.width = SIZE * ratio;
  canvas.height = SIZE * ratio;
  canvas.style.width = `${SIZE}px`;
  canvas.style.height = `${SIZE}px`;
  canvas.style.position = "absolute";
  canvas.style.left = `${x - HALF}px`;
  canvas.style.top = `${y - HALF}px`;
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "100";
  canvas.style.willChange = "transform, opacity"; // perf tip

  document.body.appendChild(canvas);

  const particles = Array.from({ length: 24 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: Math.random() * 10 + 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 2 * Math.PI, // radians, mai performant
    speed: Math.random() * 6 + 4,
    friction: 0.9,
    opacity: Math.random() * 0.4 + 0.6,
    yVel: 0,
    gravity: 0.2,
  }));

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let stillVisible = false;

    for (const p of particles) {
      p.x += p.speed * Math.cos(p.rotation);
      p.y += p.speed * Math.sin(p.rotation);
      p.speed *= p.friction;
      p.radius *= p.friction;
      p.opacity -= 0.015;
      p.yVel += p.gravity;
      p.y += p.yVel;

      if (p.opacity > 0 && p.radius > 0) {
        stillVisible = true;

        ctx.beginPath();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (stillVisible) {
      requestAnimationFrame(render);
    } else {
      canvas.remove();
    }
  };

  render();
}
