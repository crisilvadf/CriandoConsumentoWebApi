jQuery(function ($) {
    //AÇÃO DO BOTÃO PESQUISAR
    $('#btn-pesquisar').click(function (event) {

        var link = "";

        //CAPTURA O VALOR SELECIONADO NO SELECT DE FILA
        var cf = document.getElementById('IdCelula');
        var idCelulaFila = cf.options[cf.selectedIndex].value;

        if (idCelulaFila == '') {
            idCelulaFila = '0'
        }

        console.log(idCelulaFila)

        //CAPTURA O VALOR INSERIDO NO CAMPO UNIDADE GESTORA
        var ug = document.getElementById('unidade-gestora');
        var unidadeGestora = ug.value;

        //CAPTURA O VALOR INSERIDO NO CAMPO MANUAL NORMATIVO
        var mn = document.getElementById('manual-normativo');
        var manualNormativo = mn.value;

        //CAPTURA O VALOR INSERIDO NO CAMPO SISTEMAS
        var sis = document.getElementById('sistema');
        var sistema = sis.value;

        //CAPTURA O VALOR INSERIDO NO CAMPO ASSUNTO        
        var ass = document.getElementById('assunto');
        var assunto = ass.value;

        event.preventDefault();

        $.blockUI({
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });

        $.ajax({
            url: baseUrl + '/RelatorioGMA/ConsultaResultados',
            type: 'POST',
            dataType: 'json',
            data: { 'idCelulaFila': idCelulaFila, 'unidadeGestora': unidadeGestora, 'manualNormativo': manualNormativo, 'sistema': sistema, 'assunto': assunto }

        }).done(function (data) {
            var retorno = data;
            if (retorno == false) {
                $.unblockUI();
                swal("Nenhum registro encontrado!", "Favor rever a consulta realizada.", "error")
            }
            else {
                link = baseUrl + "/RelatorioGMA/Index/?idCelulaFila=" + idCelulaFila + "&unidadeGestora=" + unidadeGestora + "&manualNormativo=" + manualNormativo + "&sistema=" + sistema + "&assunto=" + assunto + "";
                window.location.href = link;
            }


        }).fail(function (erro) {
            $.unblockUI();
            console.log(baseUrl)
            console.log("erro requisição");
            console.error(erro);
        });
    });
});