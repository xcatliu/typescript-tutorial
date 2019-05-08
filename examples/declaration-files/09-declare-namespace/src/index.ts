declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void;
    }
    enum EventType {
        CustomClick
    }
}

jQuery.ajax('/api/get_something');
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);
