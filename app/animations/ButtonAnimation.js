import {gsap} from 'gsap';
import Observer from '../classes/Observer';

export default class ButtonAnimation extends Observer {
    
    constructor({ element }) {
        super({ element });
        this.element = this.element
        this.text = this.element.querySelector('span span');
        this.textWrapper = element.querySelector('span');
        this.icon = element.querySelector('svg');
        this.timeline = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: 'power3',
            }
        });
    }

    onEnter() {
        this.timeline.to(this.element, {
            scale: 1,
            delay: 0.5,
            duration: 0.5,
        })
        .to(this.textWrapper, {
            width: 'auto',
        }, '-=0.3')
        .to(this.text, {
            y: 0
        }, '-=0.5')
        .to(this.icon, {
            width: 'auto',
            x: 0,
            opacity: 1
        }, '-=0.9')
    }

    onLeave() {

    }

}