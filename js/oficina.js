var oficina = {

    //Método que inicia as operações da classe oficina
    initialize: function(){
        $.getJSON("automoveis.json", function(data){
            data['automoveis'].forEach( dataRow => {
                $("#tblAutomoveisData").append("<tr>");
                $("#tblAutomoveisData").append("<td>" + dataRow['MARCA'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CARRO'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
                $("#tblAutomoveisData").append("</tr>");
                
            });
        });
    },

    //Método que apresenta todos os registros do json
    consultar: function(data){
        data['automoveis'].forEach( dataRow => {
            $("#tblAutomoveisData").append("<tr>");
            $("#tblAutomoveisData").append("<td>" + dataRow['MARCA'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CARRO'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("#tblAutomoveisData").append("<td>" + dataRow['CONVERGENCIA_TRRASEIRA_MAX'] + "</td>");
            $("#tblAutomoveisData").append("</tr>");
            
        });
    }

}

oficina.initialize();