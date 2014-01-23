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
	if(cellData.cell_type == "heading")
	{
		this.addTextCell(cellRow, cellColumn, cellData.source);
	}
	else if(cellData.cell_type == "code") {
		this.addTextCell(cellRow, cellColumn, cellData.input);
		if(typeof cellData.outputs[0] != "undefined")
		{
			if(typeof cellData.outputs[0].png != "undefined")
				$("#"+cellRow+" > td."+cellColumn).append("<div><img src='data:image/png;base64,"+cellData.outputs[0].png+"'/></div>");
			if(typeof cellData.outputs[0].text != "undefined")
				this.addTextCell(cellRow, cellColumn, cellData.outputs[0].text);
		}
	}
};

Notebook.prototype.addTextCell = function(cellRow, cellColumn, text) {
	var temp = text;
	var t = "";
	for(var i in text)
	{
		temp[i] = temp[i].replace("\n", "<br/>");
		t = t.concat(temp[i]);
	}
	
	$("#"+cellRow+" > td."+cellColumn).append("<div><p>"+t+"</p></div>");
};

Notebook.prototype.getCell = function(index) {
	
};

Notebook.prototype.getCells = function() {

};

Notebook.prototype.saveNotebook = function() {
	
};