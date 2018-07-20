
jQuery(function ($) {
    $('.apresenta-observacao').click(function (event) {

        event.preventDefault();
        var elemento = $(this);
        var url = elemento.attr('data-url');

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json'

        }).done(function (data) {

            var Observacoes = data["Observacoes"];

            var divModal = $('#modal-padrao');
            var header = '<h4 class="modal-title" style="color: #fff; text-align: center;">Observações</h4>'

            var html1 = '';
            html1 += '<div class="text-center">' + Observacoes + '</div>'

            divModal.find("div.modal-header").html(header)
            divModal.find("div.modal-body").html(html1);
            divModal.modal();

        }).fail(function (erro) {
            console.log("erro requisição");
            console.log(erro);
        });
    });
})