// User = {
// 	elements:{
// 	  btn_save:  $("#btn_save"),	
// 	  btn_clear: $("#btn_clear"),
// 	  user_list: []	
// 	},
// 	init:function(){
// 	  context =this,
// 	  context.bindJSAction();
// 	},
// 	bindJSAction: function(){
// 		context.elements.btn_save.on("click",function(){
// 			console.log("save record")
// 			e.preventDefault()	
// 		})
// 		context.elements.btn_clear.on("click",function(e){
// 		e.preventDefault()
// 		})
// 	},
// 	handleSave:function(e){
		
// 	},
// 	handleClear:function(e){
// 		e.preventDefault()
// 	}
// }
// User.init()

$("form").on("submit",function(e){
	// e.preventDefault()	
	form_date = $("form").serialize()
	console.log(form_date)
})

// $("#btn_save").on("click",function (e) {
// 	console.log("this shoudl save")
// 	e.preventDefault()
// })
