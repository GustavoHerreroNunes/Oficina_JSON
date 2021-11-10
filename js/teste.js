$(function(){
    $.getJSON("automoveis.json", function(data){

        for(var i = 0; i < data['automoveis'].length; i++){
            $("#tblAutomoveisData").append("<tr>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['MARCA'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CARRO'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("</tr>");
            
        }
    });
});