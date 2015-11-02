//-------This is Sliiiiiider----------

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


//-------This is view changer------------
var ViewStateChange = (function(){

    var _previousClass = "";

    var _changeState = function($this) {
        var item = $this.closest(".main-content__view-item"),
            view = item.data("view"),
            listOfItems = $("#products-list"),
            modificationPrefix = "product__list_",
            classOfViewState = modificationPrefix + view;

        if(_previousClass == "") {
            _previousClass = listOfItems.attr("class");
        }

        _changeActiveClass($this);
        listOfItems.attr("class", _previousClass + " " + classOfViewState);
    };

    var _changeActiveClass = function($this) {
        $this.closest(".main-content__view-item").addClass('active').siblings().removeClass('active');
    }

    return {
        init: function() {
            $("main-content__view-link").on("click", function(e) {
                e.preventDefault();
                _changeState($(this));
            });
        }
    }
}());


//-------------This is accordion-----------

var Accordion = (function()  {

    var _openSection = function($this) {
        var container = $this.closest(".filter__item"),
            content = container.find(".filter__content"),
            otherContent = $this.closest(".sidebar__list").find(".filter__content");

        if(!container.hasClass("active")) {
            otherContent.slideUp().closest(".filter__item").removeClass("active");

            container.addClass("active");
            content.stop(true, true).slideDown();
        } else {
            container.removeClass("active");
            content.stop(true, true).slideUp();
        }


    };

    return {
        init: function() {
            $(".filter__title").on("click", function(e) {
                e.preventDefault();
                _openSection($(this));
            });
        }
    }
}());

$(document).ready(function(){

    if($(".sidebar__list").length) {
        Accordion.init();
    }
    ViewStateChange.init();


    if ($(".main-content__select").length) {
        $(".main-content__select").select2({
            minimumResultsForSearch: Infinity
        });
    }



    $(".sidebar__reset").on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest(".filter__item"),
            checkboxes = container.find("input:checkbox");

        checkboxes.each(function() {
            $(this).prop('checked', false);
        });
    });
});

