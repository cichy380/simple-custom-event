/**
 * Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher
 * based on: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 */
if (typeof (window as any).CustomEvent !== 'function') {

    (window as any).CustomEvent = (type: string, params: CustomEvent) => {
        const event: CustomEvent = document.createEvent('CustomEvent')
        const defaultParams: object = {bubbles: false, cancelable: false, detail: undefined}

        params = {...defaultParams, ...params}
        event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail)

        return event
    }
}
