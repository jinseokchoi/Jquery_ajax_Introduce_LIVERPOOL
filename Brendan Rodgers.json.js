$(document).ready(function(){
    $('#btn7').click(function(){
        $.getJSON('Brendan Rodgers.json', function(jsonData){
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