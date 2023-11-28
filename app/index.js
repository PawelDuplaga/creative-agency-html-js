import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';

class App {
    constructor(){
        this._createLenis();
        this._render();
    }


    _createLenis() {
        this.Lenis = new Lenis({
            lerp: 0.15,
        });
    }

    _render(time) {
        this.Lenis.raf(time);
        requestAnimationFrame(this._render.bind(this));
    }
}

new App();