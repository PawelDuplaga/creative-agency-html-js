import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
import Observer from './classes/Observer';
import TextReveal from './animations/TextReveal';

class App {
    constructor(){
        this._createTextReveals();
        this._createButtonsAnimation()
        this._createObserver();
        this._createLenis();
        this._render();
    }


    _createLenis() {
        this.Lenis = new Lenis({
            lerp: 0.15,
        });
    }

    _createButtonsAnimation() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')]
    }

    _createTextReveals(){
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')]
        console.log(textItems);

        textItems.forEach(text => {
            new TextReveal({
                element: text,
            })
        })
    }

    _createObserver() {
        const texts = [...document.querySelectorAll('h2')];
        texts.forEach(text => {
            new Observer({
                element: text
            })
        })
    }

    _render(time) {
        this.Lenis.raf(time);
        requestAnimationFrame(this._render.bind(this));
    }
}

new App();