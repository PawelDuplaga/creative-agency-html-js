import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
import Observer from './classes/Observer';
import TextReveal from './animations/TextReveal';
import ButtonAnimation from './animations/ButtonAnimation';
import ParallaxImage from './animations/ParallaxImage';
import List from './animations/List';

class App {
    constructor(){
        this._createLenis();
        this._createTextReveals();
        this._createButtonsAnimation()
        this._createParallaxImage();
        this._createList();
        this._render();
    }


    _createLenis() {
        this.Lenis = new Lenis({
            lerp: 0.15,
        });
    }

    _createList() {
        const lists = [
            ...document.querySelectorAll('.list__item')
        ]

        lists.forEach(list => {
            new List({
                element: list,
            })
        })
    }

    _createButtonsAnimation() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')]

        buttons.forEach(button => {
            new ButtonAnimation({
                element: button,
            })
        })
    }

    _createParallaxImage() {
        const images = [...document.querySelectorAll('[data-animation="parallax-image"]')]

        console.log(images);
        
        images.forEach(element => {
            new ParallaxImage({
                imageSection: element,
            })
        })

    }

    _createTextReveals(){
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')]

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