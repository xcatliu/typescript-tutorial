// src/jQuery.d.ts

interface AjaxSettings {
    method?: 'GET' | 'POST';
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
