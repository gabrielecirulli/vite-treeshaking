import { Application, Graphics } from 'pixi.js';

export class Canvas {
  private app = new Application();

  constructor(
    private canvas: HTMLCanvasElement | OffscreenCanvas,
    private width: number,
    private height: number
  ) {
    this.init();
  }

  async init() {
    const { canvas, width, height } = this;

    await this.app.init({
      canvas,
      width,
      height,
    });

    const graphics = new Graphics().rect(0, 0, 100, 100).fill('red');
    graphics.pivot.set(50, 50);
    graphics.position.set(width / 2, height / 2);

    this.app.stage.addChild(graphics);

    this.app.ticker.add(() => {
      graphics.angle += 1;
    });
  }
}
