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
				for(var i = 0; i < baseCells; i++)
				{
					var $row = $("<tr id="+i+"></tr>").appendTo("#merge_table > tbody")
					$("<td class='cell1'></td>").appendTo($row);
					$("<td class='cell2'></td>").appendTo($row);
					$("<td class='cell3'></td>").appendTo($row);
				}
				local.render("cell1");
				base.render("cell2");
				remote.render("cell3");
				} 
		)
	});
});