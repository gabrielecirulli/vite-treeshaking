import { Application, DOMAdapter, Graphics, WebWorkerAdapter } from 'pixi.js';

DOMAdapter.set(WebWorkerAdapter);

console.log('This code runs inside a worker.');

self.onmessage = async (event) => {
  console.log('Message received from main thread', event.data);

  if (event.data.canvas instanceof OffscreenCanvas) {
    const app = new Application();

    await app.init({
      canvas: event.data.canvas,
    });

    const graphics = new Graphics().rect(0, 0, 100, 100).fill('red');
    graphics.pivot.set(50, 50);
    graphics.position.set(200, 200);

    app.stage.addChild(graphics);

    app.ticker.add(() => {
      graphics.angle += 1;
    });
  }
};
