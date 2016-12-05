function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = jQuery.trim(cookies[i]);
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}


var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
   return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

// POST
function taskPost(){
    var title = document.getElementById("addTask").value
    var priority = document.getElementById("priority").value
    var status = document.getElementById("status").value
    var description = document.getElementById("addDesc").value
    var assignment = document.getElementById("assignment").value
    var postdata = {'title': title, 'status': status, 'priority': priority,
                  'assignment': assignment, 'description': description}
    jQuery.ajax({url:'http://127.0.0.1:8000/api/task/', data:postdata, datatype: 'jsonp', type:'POST'
    }).done(function(results){
    location.reload();
    })
}

// DELETE //
function taskDelete(getID){
   var j = document.getElementById("getID").value
 jQuery.ajax({
     url:'http://127.0.0.1:8000/api/task/' + j + '/', type:'DELETE'
     }).done(function(){})
}

// PATCH //
function taskPatch(){
    var j = document.getElementById("getID").value
    var title = document.getElementById("title").value
    var priority = document.getElementById("priority1").value
    var status = document.getElementById("status1").value
    var description = document.getElementById("addDesc1").value
    var assignment = document.getElementById("assignment1").value
    var patchData = {'title': title, 'status': status, 'priority': priority,
                    'description': description, 'assignment': assignment}
    jQuery.ajax({url:'http://127.0.0.1:8000/api/task/' +  j + '/', data:patchData, dataType: 'jsonp', type:'PATCH'
}).done(function(results){})
}

//GET//
function taskList(){
    var $orderedlist = $("<tr>")
        $.ajax("http://127.0.0.1:8000/api/task/").done(function(results){
            for(var i = 0; i < results.results.length; i++){
                if (results.results[i]['assignment']==='1'){
                var id = '<div id="task1listheader">' + '<b>' + results.results[i]['id'] + ". ";
                var title =  results.results[i]['title'] + '</b>' + '</div>';
                var status ='<div id="task1listbody" style="padding-left:25px;">' + "Status: " + results.results[i]['status'] + '<br>';
                var priority = "Priority: " + results.results[i]['priority'] + '<br>';
                var assignment = results.results[i]['assignment'] + '<br>';
                var description = "Description:" + "<p style=padding-left:25px;font-size:90%;>" + results.results[i]['description'] + '</p>' + '</div>' + "<br>";
                taskdata = id + title + status + priority + description;
                // $("#task1listheader").append(id + title)
                $("#task1").append(taskdata)
                } else if (results.results[i]['assignment']==='2'){
                var id = '<div id="task2listheader">' + '<b>' + results.results[i]['id'] + ". ";
                var title =  results.results[i]['title'] + '</b>' + '</div>';
                var status ='<div id="task2listbody" style="padding-left:25px;">' + "Status: " + results.results[i]['status'] + '<br>';
                var priority = "Priority: " + results.results[i]['priority'] + '<br>';
                var assignment = results.results[i]['assignment'] + '<br>';
                var description = "Description:" + "<p style=padding-left:25px;font-size:90%;>" + results.results[i]['description'] + '</p>' + '</div>' + "<br>";
                taskdata = id + title + status + priority + description;
                $("#task2").append(taskdata)
                } else {
                var id = '<div id="task3listheader">' + '<b>' + results.results[i]['id'] + ". ";
                var title =  results.results[i]['title'] + '</b>' + '</div>';
                var status ='<div id="task3listbody" style="padding-left:25px;">' + "Status: " + results.results[i]['status'] + '<br>';
                var priority = "Priority: " + results.results[i]['priority'] + '<br>';
                var assignment = results.results[i]['assignment'] + '<br>';
                var description = "Description:" + "<p style=padding-left:25px;font-size:90%;>" + results.results[i]['description'] + '</p>' + '</div>' + "<br>";
                taskdata = id + title + status + priority + description;
                $("#task3").append(taskdata)
                }}})}

function delOne(){
    var dropdown = $("#getID")
    jQuery.ajax('http://127.0.0.1:8000/api/task/').done(function(results){
        var task = results.results
        dropdown.html("")
        for (var i = 0; i < task.length; ++i){
            dropdown.append('<option>' + task[i]['id'] + '</option>')
        }    }) }

taskList()
delOne()
$("#taskDelete").click(taskDelete)
$("#add").click(taskPost)
$("#getButton").click(taskList)
$("#try_delete").click(taskDelete)
// $("#try_post").click(taskPost)
$("#try_patch").click(taskPatch)
