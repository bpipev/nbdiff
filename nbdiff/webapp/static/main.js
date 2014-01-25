$( document ).ready(function() {
	// Handler for .ready() called.
	$( "#generateDiff" ).click(function() {
		$.ajax("/notebook").done( 
			function(data) { 
				var dataObject = JSON.parse(data);
				nb = new NotebookMerge(dataObject);
				var base = nb.getBase();
				var local = nb.getLocal();
				var remote = nb.getRemote();
				var baseCells = base.data.worksheets[0].cells.length;
				var localCells = local.data.worksheets[0].cells.length;
				var remoteCells = remote.data.worksheets[0].cells.length;
				createTable(baseCells);
				local.render("local");
				base.render("base");
				remote.render("remote");
				} 
		)
	});
	
	function createTable(rows) {
		$("#merge_table > tbody").empty();
		$("#merge_table").append("<tr><td><p>Left Side Content:</p></td><td><p>Results:</p></td><td><p>Right Side Content:</p></td></tr>")
		for(var i = 0; i < rows; i++)
		{
			var $row = $("<tr id="+i+"></tr>").appendTo("#merge_table > tbody")
			$("<td class='local' draggable='true' ondragenter='dragEnter(event)' ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'></td>").appendTo($row);
			$("<td class='base' draggable='true' ondragenter='dragEnter(event)' ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'></td>").appendTo($row);
			$("<td class='remote' draggable='true' ondragenter='dragEnter(event)' ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'></td>").appendTo($row);
		}
	}
	
});

function dragEnter(ev) {
   ev.preventDefault();
   return true;
}

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	var data = ev.target.parentNode.id +" > td."+ ev.target.className;
	ev.dataTransfer.setData("data", data);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("data");
	var $target = $(ev.target);
	$target.closest("td").html($('#'+data).html())
}