
jQuery(function ($) {
    $('.apresenta-sistema').click(function (event) {

        event.preventDefault();
        var elemento = $(this);
        var url = elemento.attr('data-url');

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json'

        }).done(function (data) {

            var sistema = data["Sistema"];

            var divModal = $('#modal-padrao');
            var header = '<h4 class="modal-title" style="color: #fff; text-align: center;">Sistema</h4>'

            var html1 = '';
            html1 += '<div class="text-center">' + sistema + '</div>'

            divModal.find("div.modal-header").html(header);
            divModal.find("div.modal-body").html(html1);
            divModal.modal();

        }).fail(function (e) {
            console.log("erro requisição");
            console.log(e);
        });
    });
})