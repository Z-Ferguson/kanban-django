
function taskList(){
    var $orderedlist = $("<ol>")
        $.ajax("http://127.0.0.1:8000/api").done(function(results){
            var tasks = results.results
            for(var i = 0; i < tasks.length; i++){
                $orderedlist.html($orderedlist.html()+ tasks[i]['title'] + ": "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['status'] + "  "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['priority'] + "<br>"),
                $("#tasks").append($orderedlist);
            }
        })
}
taskList()
