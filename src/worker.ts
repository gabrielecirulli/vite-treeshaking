import { Application } from 'pixi.js';

console.log('This code runs inside a worker.');

self.onmessage = (event) => {
  console.log('Message received from main thread', event.data);

  const canvas = event.data.canvas;

  const app = new Application();
  app.init({
    width: 400,
    height: 400,
    canvas,
  });
};
