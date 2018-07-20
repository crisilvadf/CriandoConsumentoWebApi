
jQuery(function ($) {
    //AÇÃO DO LINK DA COLUNA CANAIS DE ATENDIMENTO
    $('.apresenta-canais-de-atendimento').click(function (event) {

        event.preventDefault();
        var elemento = $(this);
        var url = elemento.attr('data-url');

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json'

        }).done(function (data) {

            var retorno = data;

            var Telefone = retorno['Telefone']
            var OpcaoURA1 = retorno['OpcaoURA1']
            var OpcaoURA2 = retorno['OpcaoURA2']
            var OpcaoURA3 = retorno['OpcaoURA3']
            var OpcaoURA4 = retorno['OpcaoURA4']
            var OpcaoURA5 = retorno['OpcaoURA5']
            var OpcaoURA6 = retorno['OpcaoURA6']
            var SegmentoChat = retorno['SegmentoChat']
            var CategoriaChat = retorno['CategoriaChat']
            var AssuntoChat1 = retorno['AssuntoChat1']
            var AssuntoChat2 = retorno['AssuntoChat2']
            var AssuntoChat3 = retorno['AssuntoChat3']
            var AssuntoChat4 = retorno['AssuntoChat4']
            var AssuntoChat5 = retorno['AssuntoChat5']
            var AssuntoChat6 = retorno['AssuntoChat6']
            var AssuntoChat7 = retorno['AssuntoChat7']
            var AssuntoChat8 = retorno['AssuntoChat8']
            var CategoriaNavegacaoN1CAIXA1 = retorno['CategoriaNavegacaoN1CAIXA1']
            var CategoriaNavegacaoN2CAIXA1 = retorno['CategoriaNavegacaoN2CAIXA1']
            var CategoriaNavegacaoN3CAIXA1 = retorno['CategoriaNavegacaoN3CAIXA1']
            var CategoriaNavegacaoN1CAIXA2 = retorno['CategoriaNavegacaoN1CAIXA2']
            var CategoriaNavegacaoN2CAIXA2 = retorno['CategoriaNavegacaoN2CAIXA2']
            var CategoriaNavegacaoN3CAIXA2 = retorno['CategoriaNavegacaoN3CAIXA2']
            var RequisicaoCAIXA1 = retorno['RequisicaoCAIXA1']
            var RequisicaoCAIXA2 = retorno['RequisicaoCAIXA2']
            
            var divModal = $('#modal-padrao');
            var header = '<h4 class="modal-title" style="color: #fff; text-align: center;">Canais de Atendimento</h4>'


            //TELEFONE
            var html1 = '<div class="header text-center" style="background-color: #296FA7; color: white;"><i class="glyphicon glyphicon-phone-alt" style="color: white;"></i>&nbsp;&nbsp;Telefone</div>'
            html1 += '<div class="text-center table-bordered">' + Telefone + '</div>'


            //OPÇÕES URA
            if (OpcaoURA1 != null && OpcaoURA1 != '-') {
                html1 += '<div class="header text-center" style="background-color: #296FA7; color: white; margin-top: 15px;"><i class="glyphicon glyphicon-phone-alt" style="color: white;"></i>&nbsp;&nbsp;Opção URA</div>'
                html1 += '<div class="text-center table-bordered">' + OpcaoURA1
            }
            if (OpcaoURA2 != null && OpcaoURA2 != '-') {
                html1 += '<br/>' + OpcaoURA2
            }
            if (OpcaoURA3 != null && OpcaoURA3 != '-') {
                html1 += '<br/>' + OpcaoURA3
            }
            if (OpcaoURA4 != null && OpcaoURA4 != '-') {
                html1 += '<br/>' + OpcaoURA4
            }
            if (OpcaoURA5 != null && OpcaoURA5 != '-') {
                html1 += '<br/>' + OpcaoURA5
            }
            if (OpcaoURA6 != null && OpcaoURA6 != '-') {
                html1 += '<br/>' + OpcaoURA6
            }
            html1 += '</div>'


            //CHAT
            html1 += '<div class="header text-center" style="background-color: #296FA7; color: white; margin-top: 15px;">Chat&nbsp;&nbsp;&nbsp;<a href="http://www.ceati.df.caixa/aplicacoes/ceratonline" target="_blank" style="color: orange" title="Acessar Chat" class="glyphicon glyphicon-share-alt"></a></div>'
            if (SegmentoChat == 'Não há atendimento neste canal') {
                html1 += '<div class="text-center table-bordered">' + SegmentoChat + '</div>'
            }
            else if (SegmentoChat != null && SegmentoChat != '-') {
                html1 += '<div class="text-center table-bordered"><b>Segmento</b> - ' + SegmentoChat
            }
            if (CategoriaChat != null && CategoriaChat != '-') {
                html1 += '<br/><b>Categoria</b> - ' + CategoriaChat
            }
            if (AssuntoChat1 != null && AssuntoChat1 != '-') {
                html1 += '<div class="text-center" style="background-color: #E8E9EC;"><b>Assunto</b></div>'
                html1 += AssuntoChat1
            }
            if (AssuntoChat2 != null && AssuntoChat2 != '-') {
                html1 += '<br/>' + AssuntoChat2
            }
            if (AssuntoChat3 != null && AssuntoChat3 != '-') {
                html1 += '<br/>' + AssuntoChat3
            }
            if (AssuntoChat4 != null && AssuntoChat4 != '-') {
                html1 += '<br/>' + AssuntoChat4
            }
            if (AssuntoChat5 != null && AssuntoChat5 != '-') {
                html1 += '<br/>' + AssuntoChat5
            }
            if (AssuntoChat6 != null && AssuntoChat6 != '-') {
                html1 += '<br/>' + AssuntoChat6
            }
            if (AssuntoChat7 != null && AssuntoChat7 != '-') {
                html1 += '<br/>' + AssuntoChat7
            }
            if (AssuntoChat8 != null && AssuntoChat8 != '-') {
                html1 += '<br/>' + AssuntoChat8
            }
            html1 += '</div>'


            //CATEGORIA DE NAVEGAÇÃO
            if (CategoriaNavegacaoN1CAIXA1 != '-' && CategoriaNavegacaoN1CAIXA1 != null) {

                html1 += '<div class="header text-center" style="background-color: #296FA7; color: white; margin-top: 15px;">Categoria de Navegação (Servicos.Caixa)</div>'
                if (CategoriaNavegacaoN1CAIXA1 == 'Não há atendimento neste canal') {
                    html1 += '<div class="text-center table-bordered">' + CategoriaNavegacaoN1CAIXA1 + '</div>'
                }
                else {
                    html1 += '<div class="text-center table-bordered"><b>N1</b> - ' + CategoriaNavegacaoN1CAIXA1

                    if (CategoriaNavegacaoN2CAIXA1 != null || CategoriaNavegacaoN2CAIXA1 != '-') {
                        html1 += '<br/><b>N2</b> - ' + CategoriaNavegacaoN2CAIXA1
                    }

                    if (CategoriaNavegacaoN3CAIXA1 != null || CategoriaNavegacaoN3CAIXA1 != '-') {
                        html1 += '<br/><b>N3</b> - ' + CategoriaNavegacaoN3CAIXA1
                    }
                }

                //REQUISIÇÃO
                if (RequisicaoCAIXA1 != null || RequisicaoCAIXA1 != '-') {
                    html1 += '<div class="text-center" style="background-color: #E8E9EC; color: black;"><b>Requisição (Servicos.Caixa)</b>&nbsp;&nbsp;&nbsp;<a href="http://servicos.caixa" target="_blank" style="color: orange;" title="Acessar Servicos.Caixa" class="glyphicon glyphicon-share-alt"></a></div>'
                    html1 += '<div class="text-center">' + RequisicaoCAIXA1 + '</div>'
                }
                html1 += '</div>'
            }

            //CATEGORIA DE NAVEGAÇÃO 2
            if (CategoriaNavegacaoN1CAIXA2 != '-' && CategoriaNavegacaoN1CAIXA2 != null) {

                html1 += '<div class="header text-center" style="background-color: #296FA7; color: white; margin-top: 15px;">Categoria de Navegação (Servicos.Caixa)</div>'
                if (CategoriaNavegacaoN1CAIXA2 == 'Não há atendimento neste canal') {
                    html1 += '<div class="text-center table-bordered">' + CategoriaNavegacaoN1CAIXA2 + '</div>'
                }
                else {
                    html1 += '<div class="text-center table-bordered"><b>N1</b> - ' + CategoriaNavegacaoN1CAIXA2

                    if (CategoriaNavegacaoN2CAIXA2 != null || CategoriaNavegacaoN2CAIXA2 != '-') {
                        html1 += '<br/><b>N2</b> - ' + CategoriaNavegacaoN2CAIXA2
                    }

                    if (CategoriaNavegacaoN3CAIXA2 != null || CategoriaNavegacaoN3CAIXA2 != '-') {
                        html1 += '<br/><b>N3</b> - ' + CategoriaNavegacaoN3CAIXA2
                    }
                }

                //REQUISIÇÃO
                if (RequisicaoCAIXA2 != null || RequisicaoCAIXA2 != '-') {
                    html1 += '<div class="text-center" style="background-color: #E8E9EC; color: black;"><b>Requisição (Servicos.Caixa)</b>&nbsp;&nbsp;&nbsp;<a href="http://servicos.caixa" target="_blank" style="color: orange;" title="Acessar Servicos.Caixa" class="glyphicon glyphicon-share-alt"></a></div>'
                    html1 += '<div class="text-center">' + RequisicaoCAIXA2 + '</div>'
                }
                html1 += '</div>'
            }

            divModal.find("div.modal-header").html(header);
            divModal.find("div.modal-body").html(html1);
            divModal.modal();

        }).fail(function (erro) {
            console.log("erro requisição");
            console.error(erro);
        });
    });

    //AÇÃO DO BÕTÃO VOLTAR
    $(document).ready(function () {
        $('button[name="btnVoltar"]').click(function () {
            window.location.href = baseUrl + '/Home/Index';
        });
    });

    //AÇÃO DO BOTÃO GERAR EXCEL
    $(document).ready(function () {
        $('button[name="btn-exportar-excel"]').click(function () {

            var parametros = window.location.search;

            window.location.href = baseUrl + '/RelatorioGMA/ExportarExcel' + parametros;
        });
    });
});