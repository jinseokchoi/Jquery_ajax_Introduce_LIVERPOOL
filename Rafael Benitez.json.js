$(document).ready(function(){
    $('#btn4').click(function(){
        $.getJSON('Rafael Benitez.json', function(jsonData){
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