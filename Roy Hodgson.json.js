$(document).ready(function(){
    $('#btn5').click(function(){
        $.getJSON('Roy Hodgson.json', function(jsonData){
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