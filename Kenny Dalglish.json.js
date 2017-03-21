$(document).ready(function(){
    $('#btn6').click(function(){
        $.getJSON('Kenny Dalglish.json', function(jsonData){
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