// Configuration Base URL
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

// Functions
function blockUI(texto) {
    $.blockUI({
        message: '<h1><i class="fa fa-spinner fa-pulse fa-fw"></i> ' + texto + '</h1>',
        css: {
            border: "none",
            padding: "15px",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            opacity: .5,
            color: "#fff",
            zIndex: 99999
        }
    })
}

function unblockUI() {
    $.unblockUI()
}