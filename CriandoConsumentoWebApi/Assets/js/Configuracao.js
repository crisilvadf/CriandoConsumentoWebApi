//configuração url
//true = para servidor em produção
// false = para servidor local

var url = window.location;
var hostname = url.hostname;
var servidorLocal = false;
var baseUrl = '';

if (hostname == 'localhost') {
    servidorLocal = true;
}

if (!servidorLocal) {
    baseUrl = '/aplicacoes/aplGMA';
}