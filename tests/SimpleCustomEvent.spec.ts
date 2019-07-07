import SimpleCustomEvent from '../src/SimpleCustomEvent'

describe('SimpleCustomEvent', () => {
    it('trigger and listener', () => {
        const deliveredTimes = {
            EVENT_11: 0,
        }

        const myEvents = new SimpleCustomEvent()
        myEvents.on('EVENT_11', () => deliveredTimes.EVENT_11++)
        myEvents.trigger('EVENT_11') // 1

        expect(deliveredTimes.EVENT_11).toBe(1)
    })

    it('no trigger', () => {
        const deliveredTimes = {
            EVENT_21: 0,
        }

        const myEvents = new SimpleCustomEvent()
        myEvents.on('EVENT_21', () => deliveredTimes.EVENT_21++)

        expect(deliveredTimes.EVENT_21).toBe(0)
    })

    it('multi events', () => {
        const deliveredTimes = {
            EVENT_31: 0,
            EVENT_32: 0,
        }

        const myEvents = new SimpleCustomEvent()
        myEvents.on('EVENT_31', () => deliveredTimes.EVENT_31++)
        myEvents.on('EVENT_32', () => deliveredTimes.EVENT_32++)
        myEvents.trigger('EVENT_32') // 1
        myEvents.trigger('EVENT_31') // 1
        myEvents.trigger('EVENT_32') // 2

        expect(deliveredTimes.EVENT_31).toBe(1)
        expect(deliveredTimes.EVENT_32).toBe(2)
    })

    it('.off() method', () => {
        const deliveredTimes = {
            EVENT_41: 0,
            EVENT_42: 0,
        }

        const myEvents = new SimpleCustomEvent()
        myEvents.on('EVENT_41', () => deliveredTimes.EVENT_41++)
        myEvents.on('EVENT_42', () => deliveredTimes.EVENT_42++)
        myEvents.trigger('EVENT_41') // 1
        myEvents.trigger('EVENT_42') // 1
        myEvents.off('EVENT_42')
        myEvents.trigger('EVENT_41') // 2
        myEvents.trigger('EVENT_42') // still 1 (listener is off)

        expect(deliveredTimes.EVENT_41).toBe(2)
        expect(deliveredTimes.EVENT_42).toBe(1)
    })

    it('extra data', () => {
        const deliveredTimes = {
            EVENT_51: 0,
        }
        const deliveredData = {
            EVENT_51: null,
        }

        const myEvents = new SimpleCustomEvent()
        myEvents.on('EVENT_51', (data: CustomEvent) => {
            deliveredTimes.EVENT_51++
            deliveredData.EVENT_51 = data.detail
        })
        myEvents.trigger('EVENT_51', 'custom string') // 1

        expect(deliveredTimes.EVENT_51).toBe(1)
        expect(deliveredData.EVENT_51).toBe('custom string')
    })

    it('custom target', () => {
        const element = document.createElement('div')
        const deliveredTimes = {
            EVENT_61: 0,
        }
        const myEvents = new SimpleCustomEvent(element)
        myEvents.on('EVENT_61', () => deliveredTimes.EVENT_61++)
        element.dispatchEvent(new CustomEvent('EVENT_61')) // 1 (triggered event by target.dispatchEvent() method)
        myEvents.trigger('EVENT_61') // 2

        expect(deliveredTimes.EVENT_61).toBe(2)
    })

    it('multi instances', () => {
        const deliveredTimes = {
            EVENT_71: 0,
        }

        const myEventsOne = new SimpleCustomEvent()
        myEventsOne.on('EVENT_71', () => deliveredTimes.EVENT_71++)

        const myEventsTwo = new SimpleCustomEvent()
        myEventsTwo.trigger('EVENT_71') // 1

        expect(deliveredTimes.EVENT_71).toBe(1)
    })
})
