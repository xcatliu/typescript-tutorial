declare namespace jQuery.fn {
    function extend(object: any): void;
}

jQuery.fn.extend({
    check: function() {
        return this.each(function() {
            this.checked = true;
        });
    }
});
