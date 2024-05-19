import { Application, DOMAdapter, WebWorkerAdapter } from 'pixi.js';
import { Canvas } from './canvas';

DOMAdapter.set(WebWorkerAdapter);

console.log('This code runs inside a worker.');

self.onmessage = (event) => {
  console.log('Message received from main thread', event.data);

  if (event.data.canvas instanceof OffscreenCanvas) {
    new Canvas(event.data.canvas, 400, 400);
  }
};
