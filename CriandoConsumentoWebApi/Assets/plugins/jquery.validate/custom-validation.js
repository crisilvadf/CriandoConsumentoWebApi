
jQuery.validator.addMethod("dataMinMax", function (value, element, params) {

    var data = moment(value, 'DD/MM/YYYY');
    var dataInicio = moment(jQuery(params.inicio).val(), 'DD/MM/YYYY');
    var dataFim = moment(jQuery(params.fim).val(), 'DD/MM/YYYY');

    var isValid = data.isSameOrAfter(dataInicio) && data.isSameOrBefore(dataFim);

    return isValid;

}, jQuery.validator.format("A data deve estar entre o período do projeto."));


jQuery.validator.addMethod("numreq", function (value, element, params) {

    var isValid = false;

    if (value != '') {

        var expression = /\bREQ\d{12}$/g;
        var isValid = expression.test(value);

    } else {
        isValid = true;
    }

    return isValid;

}, jQuery.validator.format("Número REQ inválido."));


jQuery.validator.addMethod("dategreaterthan", function (value, element, params) {

    var date1 = moment(value, 'DD/MM/YYYY');
    var date2 = moment(jQuery(params).val(), 'DD/MM/YYYY');

    var isValid = date1.isAfter(date2);

    return isValid;
});


jQuery.validator.unobtrusive.adapters.add("dategreaterthan", ["otherpropertyname"], function (options) {
    options.rules["dategreaterthan"] = "#" + options.params.otherpropertyname;
    options.messages["dategreaterthan"] = options.message;
});
