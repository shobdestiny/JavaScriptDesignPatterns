class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    increment() {
        const colors = ['orange', 'red', 'green' , 'blue'];

        this.number++;
        //select a random element from the colors array
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.notifyObservers();
    }

    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let o of this.observers) {
            // can access the number and color properties
            o.update(this);
        }
    }
}