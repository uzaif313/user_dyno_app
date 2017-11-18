User = {
	elements:{
	  btn_save:  "#btn_save",	
	  btn_clear: "#btn_clear",
	},
	init:function(){
	  context =this;
	  context.bindJSAction();
  	Array.prototype.dataPush = function(item, callback) {
			this.push(item);
  		callback(this);
		}
	  context.user_list = []	
	},
	bindJSAction: function(){
		$(context.elements.btn_save).on("click",this.handleSave)
		$(context.elements.btn_clear).on("click",this.handleClear)
	},
	handleSave:function(e){
		data = context.fetchFormatedFormData(($('form')))
		context.user_list.dataPush(data,context.handlePush)
		console.log(context.user_list)
		e.preventDefault()
	},
	handlePush:function(array){
		console.log(array.length)
		console.log("array updated")
		last_object = array[array.length-1];
		last_object['id'] = array.length
		$("tbody").append(context.template(last_object))
		array['id'] = context.user_list.length
	},
	template:function(data){
		var template = "<tr id='row_"+data['id']+"'>";
		template+="<td>"+data['id']+"</td>";
		template+="<td>"+data['user[name]']+"</td>";
		template+="<td>"+data['user[mobile]']+"</td>";
		template+="<td>"+data['user[email]']+"</td>";
		template+="<td>Edit</td>";
		template+="<td>Delete</td>";
		return template
	},
	handleClear:function(e){
		$("form")[0].reset();
		e.preventDefault()
	},
	fetchFormatedFormData: function($form){
    var orignal_object = $form.serializeArray();
    var new_object = {};
	  $.map(orignal_object, function(n, i){
        new_object[n['name']] = n['value'];
    });
    return new_object;
	},

}

$(document).on('ready',function(){
	console.log("are we ready")
	User.init()
});
// $(document).on('ready',function(){

// 	var _user_list = []	
// 	$("#btn_save").on("click",)

	//customize array push behavior 



// 	$("#btn_clear").on("click",function(e){
// 		$("form")[0].reset();
// 		e.preventDefault()
// 	})

// 	function fetchFormatedFormData($form){
//     var orignal_object = $form.serializeArray();
//     var new_object = {};

//     $.map(orignal_object, function(n, i){
//         new_object[n['name']] = n['value'];
//     });
//     return new_object;
// }
// })