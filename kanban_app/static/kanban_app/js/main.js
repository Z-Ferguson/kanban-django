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
function taskPost(){
    var title = document.getElementById("addTask").value
    var priority = document.getElementById("priority").value
    var status = document.getElementById("status").value
    var description = document.getElementById("addDesc").value
    console.log('you added something new')
  var postdata = {'title': title, 'status': status, 'priority': priority, 'description': description}
  jQuery.ajax({url:'http://127.0.0.1:8000/api/task/', data:postdata, datatype: 'jsonp', type:'POST'
    }).done(function(results){
    })
}

// DELETE //
function taskDelete(){
    console.log('EXTERMINATE')
  jQuery.ajax({url:'http://127.0.0.1:8000/api/task/7/', type:'DELETE'
    }).done(function(){})
}

// PATCH //
function taskPatch(url){
    console.log("PAAAATCHING")
    var patchdata = {'title': 'patchingTitle', 'description': 'holy shit a new description!'}
    jQuery.ajax({url:'http://127.0.0.1:8000/api/task/7/', data:patchdata, type: 'PATCH'
}).done(function(results){})
}

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



// var $tasks = $('#tasks')
// var $api = '/api/';
// var $userID = $('input[name="user"]').val()
// var $new_task = $('#new_task_form');
//
// $new_task.title = $new_task.find('input[name="title"]');
// $new_task.status = $new_task.find('input[name="status"]');
// $new_task.priority = $new_task.find('input[name="priority"]');
// $new_task.description = $new_task.find('textarea[name="description"]');
//
//
// $new_task.submit(function() {
//     console.log('things are happening');
//
//     var $new_task_data = {
//         title: $new_task.title.val(),
//         status: $new_task.status.val(),
//         priority: $new_task.priority.val(),
//         description: $new_task.description.val(),
//     };
// })
//
// $.ajax({
//      url: $api + 'tasks/',
//      method: "POST",
//      data: $new_task_data,
//      success: function(response) {
//          appendTask(response);
//          buttonInit();
//          console.log('i think it worked!');
//          $new_task[0].reset();
//      }
//  });
//


// $("#postButton").click(taskPost)
$("#add").click(taskPost)
$("#getButton").click(taskList)
$("#try_delete").click(taskDelete)
// $("#try_post").click(taskPost)
$("#try_patch").click(taskPatch)
