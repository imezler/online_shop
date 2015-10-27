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

