function Notebook(data) {
	this.data = data;
}

Notebook.prototype.render = function(cellColumn) {
	for(var row in this.data.worksheets[0].cells)
	{
		this.addCell(row, cellColumn, this.data.worksheets[0].cells[row]);
	}
};

Notebook.prototype.addCell = function(cellRow, cellColumn, cellData) {
	if(cellData.cell_type == "heading" || cellData.cell_type == "markdown" || cellData.cell_type == "raw")
	{
		this.addTextCell(cellRow, cellColumn, cellData.source, "input "+cellData.metadata.state);
	}
	else if(cellData.cell_type == "code") {
		this.addTextCell(cellRow, cellColumn, cellData.input, "input "+cellData.metadata.state);
		if(typeof cellData.outputs[0] != "undefined")
		{
			if(typeof cellData.outputs[0].png != "undefined" && cellData.outputs[0].png != "")
				$("#"+cellRow+" > td."+cellColumn).append("<div><p class='output "+cellData.metadata.state+"'><img src='data:image/png;base64,"+cellData.outputs[0].png+"'/></p></div>");
			if(typeof cellData.outputs[0].text != "undefined")
				this.addTextCell(cellRow, cellColumn, cellData.outputs[0].text, "output "+cellData.metadata.state);
		}
	}
};

Notebook.prototype.addTextCell = function(cellRow, cellColumn, text, css_class) {
	var temp = JSON.parse(JSON.stringify(text));
	var t = "";
	for(var i in text)
	{
		temp[i] = temp[i].replace("\n", "<br/>");
		t = t.concat(temp[i]);
	}
	
	$("#"+cellRow+" > td."+cellColumn).append("<div><p class='"+css_class+"' >"+t+"</p></div>");
};

Notebook.prototype.getCell = function(index) {
	
};

Notebook.prototype.getCells = function() {

};

Notebook.prototype.saveNotebook = function() {
	
};