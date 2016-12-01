
function taskList(){
    var $orderedlist = $("<ol>")
        $.ajax("http://127.0.0.1:8000/api").done(function(results){
            var tasks = results.results
            for(var i = 0; i < tasks.length; i++){
                $stuff.html($stuff.html()+ tasks[i]['title'] + "<br>")
                $("#location").append($orderedlist)
            }
        })
}
