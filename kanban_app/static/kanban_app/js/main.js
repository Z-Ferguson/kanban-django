

function taskPost(){
  var postdata = {'title': 'TEST', 'status': 'HIGH', 'priority': 'LOW'}
  jQuery.ajax({url:'http://127.0.0.1:8000/api/', data:postdata, type:'POST'
    }).done(function(){})
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
