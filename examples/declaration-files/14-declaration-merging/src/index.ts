declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

jQuery('#foo');
jQuery.ajax('/api/get_something');
