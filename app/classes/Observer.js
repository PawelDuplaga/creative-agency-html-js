const observerOptions = {
    rootMargin: '0px',
    treshhold: 1,
}


export default class Observer {
    
    constructor({ element }){
        this.element = element;
        this._createObserver();
    }

    _createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    this.onEnter();
                } else {
                    this.onLeave();
                }
            });
        }, observerOptions);

        this.observer.observe(this.element);
    }

    onEnter() {

    }

    onLeave() {

    }
}