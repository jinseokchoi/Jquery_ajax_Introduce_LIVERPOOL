$(document).ready(function(){
    $('#btn2').click(function(){
        $.ajax({
            url : 'Roy Evans.xml',
            type : 'get',
            dataType : 'xml',
            timeout : 10000,
            success : function(xmlData){
                var tagList = "";
                $(xmlData).find('supervision').each(function(){
                    tagList += "<li>" + $(this).find('list').text() + "</li>";
                });
                
                $('#SupervisionList').empty();
                $('#SupervisionList').append(tagList);
                $('#SupervisionList').listview('refresh');
            },
            
            error : function(){
                $("#SupervisionList").html("<p>Error</p>");
            }
        });
    });
});