// src/jQuery.d.ts

declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST';
        data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}
