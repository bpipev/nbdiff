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
				local.render("file1Content");
				base.render("result");
				remote.render("file2Content");
				} 
		)
	});
});