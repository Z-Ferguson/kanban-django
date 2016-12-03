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



//POST
// var $addTask = $('#addTask');


// function addTask(){
//   console.log('You added a fresh task');
//
//   $.ajax({
//     method: 'POST',
//     url: 'http://127.0.0.1:8000/api/task/',
//     // csrfmiddlewaretoken: '{{ csrf_token }}',
//     username: '',
//     password: '',
//     data: {
//       csrfmiddlewaretoken: '{{ csrf_token }}',
//       title: title.val(),
//       status: status.val(),
//       priority: priority.val(),
//     }
//   });
//
// //   return false;
// }


function taskPost(){
    console.log('you added something new')
  var postdata = {'title': 'its over', 'status': 'c', 'priority': 'l', 'description': 'these are words'}
  jQuery.ajax({url:'http://127.0.0.1:8000/api/task/', data:postdata, datatype: 'jsonp', type:'POST'
    }).done(function(results){
    })
}


// Delete
function taskDelete(){
    console.log('helloooo')
  jQuery.ajax({url:'http://127.0.0.1:8000/api/task/3', type:'DELETE'
    }).done(function(){})
}

function taskPut(){
    specific = 'http://127.0.0.1:8000/api/task/3'
    jQuery.ajax({url:specific, type:'PUT'
})}.done(function(data){
    postdata = {'title': 'the doctor', 'status': 'is', 'priority': 'death', 'description': 'today'}
    var taskinfo = data
    for(var i = 0; i < taskinfo.length; i++){
        $orderedlist.html($orderedlist.html()+ taskinfo[i]['id'] + ": "),
        $orderedlist.html($orderedlist.html()+ taskinfo[i]['title'] + ": "),
        $orderedlist.html($orderedlist.html()+ taskinfo[i]['status'] + "  "),
        $orderedlist.html($orderedlist.html()+ tasks[i]['description'] + ": "),
        $orderedlist.html($orderedlist.html()+ tasks[i]['priority'] + "<br>"),
        $("#task1").append($orderedlist);
}
})


//GET//
function taskList(){
    console.log("getting stuff")
    var $orderedlist = $("<ol>")
        $.ajax("http://127.0.0.1:8000/api/task/").done(function(results){
            var tasks = results.results
            for(var i = 0; i < tasks.length; i++){
                $orderedlist.html($orderedlist.html()+ tasks[i]['id'] + ": "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['title'] + ": "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['status'] + "  "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['description'] + ": "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['priority'] + "<br>"),
                $("#task1").append($orderedlist);
            }
        })
}


// $("#postButton").click(taskPost)
$("#getButton").click(taskList)
$("#try_delete").click(taskDelete)
$("#editButton").click(taskPut)
// $("#deletebutton").click(removeTask)
$("#try_post").click(taskPost)
