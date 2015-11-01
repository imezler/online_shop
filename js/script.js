$(document).ready(function(){
    $("#range_slider").slider({values:[1000, 50000],
        min:0,
        max:50000,
        range:true,
        step:500,
        slide:function(event,ui){
            $("#min").val(ui.values[0]);
            $("#max").val(ui.values[1]);
        }});
});

var ViewStateChange = (function(){

    var _previousClass = '';

    var _changeState = function($this){
        var item = $this.closest(".main-content__view-item"),
            view = item.data('view'),
            listOfItems = $('.product__list'),
            modificationPrefix = 'product__list_',
            classOfViewState = modificationPrefix + view;

        if (_previousClass == '') {
            _previousClass = listOfItems.attr('class');
        }
        _changeActiveClass($this);
        listOfItems.attr('class', _previousClass + ' ' + classOfViewState);
    }

    var _changeActiveClass = function ($this) {
        $this
            .closest(".main-content__view-item").addClass('active')
            .siblings().removeClass('active');
    }

    return {
        init: function(){
            $('.main-content__view-link').on('click', function(e){
                e.preventDefault();
                _changeState($(this));
            });
        }
    }
});

$(document).ready(function(){

    if ($(".main-content__select").length) {
        $(".main-content__select").select2({
            minimumResultsForSearch: Infinity
        });
    }
});