

function taskPost(){
  var postdata = {'title': 'TEST', 'status': 'HIGH', 'priority': 'LOW'}
  jQuery.ajax({url:'http://127.0.0.1:8000/api/', data:postdata, type:'POST'
    }).done(function(){})
}


function pickTask(){
    specific_task = "http://127.0.0.1:8000/api" + str(selection)
    $.ajax({url: "http://127.0.0.1:8000/api", type: 'GET'}).done(function(results){
        var tasks = results.results
}



function removeTask(selection){
    specific_task = "http://127.0.0.1:8000/api" + str(selection)
    $.ajax({url: specific_task, type: 'DELETE'}).done(function(results){
        var tasks = results.results
}


function putTask(selection){
    specific_task = "http://127.0.0.1:8000/api" + str(selection)
    $.ajax({url: specific_task, type: 'PUT'}).done(function(results){
        var tasks = results.results
}


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
taskPost()
