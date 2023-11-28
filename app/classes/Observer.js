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
                    console.log('in view');
                } else {
                    console.log('not in view');
                }
            });
        }, observerOptions);

        this.observer.observe(this.element);
    }
}