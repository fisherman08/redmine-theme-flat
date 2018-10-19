(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });
    $('#update fieldset.tabular legend').eq(0).click();

    // +ボタン対応
    $("ul.menu-children li").addClass("menu-children-item");

    $("#new-object").parent().addClass("new-object-parent");
  });

})(jQuery);
