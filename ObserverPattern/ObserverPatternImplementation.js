// Observer
// Observeable -> also refered as subject -> has list of observers
// Observeable is being observed by the observers
// Observers needs to subscribe observables
// Observers get notified when there is change in state
// Observers can unsbscribe to the observables  
// Observer pattern is a one to many relation pattern


function Subject() {
    this.observerList = []
}

//Subject method to subscribe the subject
Subject.prototype.subscribe = function (fn) {
    this.observerList.push(fn)
}

//Subject method to unSubscribe the subject
Subject.prototype.unSubscribe = function (fnToRemove) {
    this.observerList = this.observerList.filter( fn => {
        if(fn != fnToRemove)
            return fn
    })
}

//Subject method that fires the list of observers inside the subject
Subject.prototype.fire = function() {
    this.observerList.forEach(fn => {
        fn.call()
    })
}

const subject = new Subject()

function firstObserver()
{
    console.log("First gets subscribed and fired")
}

function secondObserver()
{
    console.log("Second gets subscribed and fired")
}

subject.subscribe(firstObserver)

subject.subscribe(secondObserver)

subject.unSubscribe(secondObserver)

subject.fire()