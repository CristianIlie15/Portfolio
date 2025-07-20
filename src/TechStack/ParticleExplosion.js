export default function triggerParticleExplosion(x, y, colors = ["#fff"]) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  canvas.width = 200 * ratio;
  canvas.height = 200 * ratio;
  canvas.style.width = "200px";
  canvas.style.height = "200px";
  canvas.style.position = "absolute";
  canvas.style.left = `${x - 100}px`;
  canvas.style.top = `${y - 100}px`;
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 100;

  document.body.appendChild(canvas);

  const particles = Array.from({ length: 24 }).map(() => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: Math.random() * 10 + 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    speed: Math.random() * 6 + 4,
    friction: 0.9,
    opacity: Math.random() * 0.4 + 0.6,
    yVel: 0,
    gravity: 0.2,
  }));

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.speed * Math.cos((p.rotation * Math.PI) / 180);
      p.y += p.speed * Math.sin((p.rotation * Math.PI) / 180);
      p.speed *= p.friction;
      p.radius *= p.friction;
      p.opacity -= 0.015;
      p.yVel += p.gravity;
      p.y += p.yVel;

      if (p.opacity <= 0 || p.radius <= 0) return;

      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    if (particles.some((p) => p.opacity > 0)) {
      requestAnimationFrame(render);
    } else {
      document.body.removeChild(canvas);
    }
  };

  render();
}
