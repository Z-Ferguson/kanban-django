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
    }).done(function(){
    })
}


// Delete
// function removeTask(selection){
//     specific_task = "http://127.0.0.1:8000/api/task/" + "1 "
//     $.ajax({url: specific_task, type: 'DELETE'}).done(function(results){
//         $('#removetasks').html(results['title'])
//         // var tasks = results.results
//     })
// }


//GET//
function taskList(){
    console.log("getting stuff")
    var $orderedlist = $("<ol>")
        $.ajax("http://127.0.0.1:8000/api/task/").done(function(results){
            var tasks = results.results
            for(var i = 0; i < tasks.length; i++){
                $orderedlist.html($orderedlist.html()+ tasks[i]['title'] + ": "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['status'] + "  "),
                $orderedlist.html($orderedlist.html()+ tasks[i]['priority'] + "<br>"),
                $("#tasks").append($orderedlist);
            }
        })
}
<<<<<<< HEAD

// $("#postButton").click(taskPost)
$("#getButton").click(taskList)
// $("#deletebutton").click(removeTask)
$("#try_post").click(taskPost)
=======
taskList()
taskPost()
$('#addButton').click()
$('#editButton').click(putTask)
$('#deleteButton').click(removeTask)
$('#reviewButton').click(pickTask)
>>>>>>> 5ab7edb2defd6ee8f0c1909b29085f501c7cc024
