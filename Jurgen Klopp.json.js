$(document).ready(function(){
    $('#btn8').click(function(){
        $.getJSON('Jurgen Klopp.json', function(jsonData){
            var tagList="";
            $.each(jsonData.info, function(){
                   tagList += "<li>" + this.list + "</li>";
                   });
            
            $('#SupervisionList').empty();
            $('#SupervisionList').append(tagList);
            $('#SupervisionList').listview('refresh');
        });
    });
});