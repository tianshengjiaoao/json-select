function getJson(element,jsonUrl){
	this.element = element;
	this.jsonUrl = jsonUrl;
	var select_content = element.children(".select_content");
	var select_list = element.children(".select_content").children(".select_list");
	var loading_box = element.children(".select_content").children(".loading_box");
	element.click(function(){
		select_list.html("");
		select_content.toggle();
		loading_box.show();
		$.ajax({
			url: jsonUrl,
			success: function(data){
				loading_box.hide();
				for(var key in data){
					select_list.append("<li value=" + data[key] + " onclick=select(this.value,this,this.innerHTML)>" + key + "</li>")
				}
			}
		})
	})
};
function select(e,c,d){
	var content = $(c).parent().parent().prev();
	content[0].innerHTML = d;
	content[0].value = e
}