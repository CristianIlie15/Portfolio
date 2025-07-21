export class Particle {
  constructor(x = 0, y = 0, radius) {
    this.position = { x, y };
    this.radius = typeof radius === "function" ? radius() : radius || 0;
    this.status = "standing";
    this.direction = this.position;
    this.speed = 1;
    this.spotlightTimeStamp = undefined;
  }

  stop() {
    this.status = "standing";
    this.spotlightTimeStamp = undefined;
    this.position = this.direction;
  }

  move(targetX, targetY, speed = 1) {
    this.status = "moving";
    this.spotlightTimeStamp = undefined;
    const deltaX = targetX - this.position.x;
    const deltaY = targetY - this.position.y;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    this.direction = {
      x: targetX,
      y: targetY,
      distance,
      sin: deltaY / distance,
      cos: deltaX / distance,
    };

    this.startPoint = this.position;
    this.speed = speed;
  }

  getPosition(movetime) {
    const time = movetime / 1000;
    if (this.status !== "moving") return false;

    if (!this.spotlightTimeStamp) {
      this.spotlightTimeStamp = time;
      return this.position;
    }

    const deltaTime = time - this.spotlightTimeStamp;
    const distance = deltaTime * this.speed;

    const posX = this.direction.cos * distance + this.startPoint.x;
    const posY = this.direction.sin * distance + this.startPoint.y;

    this.position = { x: posX, y: posY };

    if (distance >= this.direction.distance) {
      this.status = "standing";
      this.spotlightTimeStamp = undefined;
      this.position = { x: this.direction.x, y: this.direction.y };
    }

    return this.position;
  }
}

function generateParticles(count, size, originX, originY) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = originX ?? Math.random() * window.innerWidth;
    const y = originY ?? Math.random() * window.innerHeight;
    particles.push(new Particle(x, y, size));
  }
  return particles;
}

export function startParticlesBackground(canvas, settings = {}) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not supported");

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const defaultSettings = {
    count: 500,
    size: 1,
    minSpeed: 10,
    maxSpeed: 50,
    startOrigin: { x: undefined, y: undefined },
  };

  settings = { ...defaultSettings, ...settings };

  const particles = generateParticles(
    settings.count,
    settings.size,
    settings.startOrigin.x,
    settings.startOrigin.y
  );

  function renderCanvas() {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    for (const particle of particles) {
      ctx.beginPath();
      ctx.arc(particle.position.x, particle.position.y, particle.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  let animationFrameId;

  function animate(time) {
    animationFrameId = requestAnimationFrame(animate);

    for (const particle of particles) {
      if (!particle.getPosition(time)) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speed = Math.random() * (settings.maxSpeed / 2) + settings.minSpeed;
        particle.move(x, y, speed);
      }
    }

    renderCanvas();
  }

  function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    for (const particle of particles) {
      if (particle.position.x > width) {
        particle.stop();
        particle.position.x = width;
      }
      if (particle.position.y > height) {
        particle.stop();
        particle.position.y = height;
      }
    }
  }

  function debounce(func, wait = 100) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  const debouncedResize = debounce(handleResize, 100);
  window.addEventListener("resize", debouncedResize);

  animate();

  return () => {
    window.cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", debouncedResize);
  };
}
