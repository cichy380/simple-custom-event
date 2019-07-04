export default class SimpleCustomEvent {
    private events: {[index: string]: EventListenerOrEventListenerObject} = {}

    constructor(private target: EventTarget = document) {}

    /**
     * Sets up a function that will be called whenever the specified event is triggered
     *
     * @param eventName  Custom event name to listen for
     * @param callback  Callback function accepts a parameter: Event object describing the event which has occurred
     */
    public on(eventName: string, callback: EventListenerOrEventListenerObject) {
        this.events[eventName] = callback
        this.target.addEventListener(eventName, callback)
    }

    /**
     * Removes an event listener previously registered with `CustomEvent.on()`
     *
     * @param eventName  Custom event name for which to remove an event listener
     */
    public off(eventName: string) {
        this.target.removeEventListener(eventName, this.events[eventName])
        delete this.events[eventName]
    }

    /**
     * Initializes and dispatches an custom Event, invoking the affected Listeners
     *
     * @param eventName  Custom event name
     * @param detail  Any data passed when triggering the event
     */
    public trigger(eventName: string, detail: any = null) {
        const event = new CustomEvent(eventName, {detail})
        this.target.dispatchEvent(event)
    }
}
