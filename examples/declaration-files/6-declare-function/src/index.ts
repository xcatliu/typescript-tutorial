declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

jQuery('#foo');
jQuery(function() {
    alert('Dom Ready!');
});
