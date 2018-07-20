
jQuery(function ($) {
    $('.apresenta-escopo').click(function (event) {

        event.preventDefault();
        var elemento = $(this);
        var url = elemento.attr('data-url')
        
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json'

        }).done(function (data) {

            console.log(data)

            var divModal = $('#modal-padrao');
            var header = '<h4 class="modal-title" style="color: #fff; text-align: center;">Escopo</h4>'

            var Escopo1 = data["Escopo1"];
            var Escopo2 = data["Escopo2"];
            var Escopo3 = data["Escopo3"];
            var Escopo4 = data["Escopo4"];
            var Escopo5 = data["Escopo5"];
            var Escopo6 = data["Escopo6"];
            var Escopo7 = data["Escopo7"];

            var html1 = '';
            if (Escopo1 == null && Escopo1 == '-') {
                html1 += '<div class="glyphicon glyphicon-plus"></div>'
            }
            else {
                html1 += '<div class="header text-center" style="background-color: #296FA7; color: white;">Escopo</div>'
                html1 += '<div class="text-center table-bordered">' + Escopo1
            }
            if (Escopo2 != null && Escopo2 != '-') {
                html1 += '<br/>' + Escopo2
            }
            if (Escopo3 != null && Escopo3 != '-') {
                html1 += '<br/>' + Escopo3
            }
            if (Escopo4 != null && Escopo4 != '-') {
                html1 += '<br/>' + Escopo4
            }
            if (Escopo5 != null && Escopo5 != '-') {
                html1 += '<br/>' + Escopo5
            }
            if (Escopo6 != null && Escopo6 != '-') {
                html1 += '<br/>' + Escopo6
            }
            if (Escopo7 != null && Escopo7 != '-') {
                html1 += '<br/>' + Escopo7
            }
            html1 += '</div>'

            divModal.find("div.modal-header").html(header)
            divModal.find("div.modal-body").html(html1);
            divModal.modal();

        }).fail(function (e) {
            console.log("erro requisição");
            console.log(e);
        });
    });
})