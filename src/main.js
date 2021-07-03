let $select = $('.select');

$select.click(function(e) {
    let $selected = $(e.target).attr('id');
    $('.select').removeClass("selected");
    $('#'+$selected).addClass("selected");
});
