function Notebook(data) {
	this.data = data;
}

Notebook.prototype.render = function(panelID) {
	for(var i in this.data.worksheets[0].cells)
	{
		this.addCell(panelID, this.data.worksheets[0].cells[i]);
	}
};

Notebook.prototype.addCell = function(panelID, cellData) {
	if(cellData.cell_type == "heading")
	{
		this.addTextCell(cellData.source, panelID);
	}
	else if(cellData.cell_type == "code") {
		this.addTextCell(cellData.input, panelID);
		if(typeof cellData.outputs[0] != "undefined")
		{
			if(cellData.outputs[0].png != "undefined")
				$("#"+panelID).append("<div class='cell'><img src='data:image/png;base64,"+cellData.outputs[0].png+"'/></div>");
			if(typeof cellData.outputs[0].text != "undefined")
				$("#"+panelID).append("<div class='cell'><p>"+JSON.stringify(cellData.outputs[0].text)+"</p></div>");
		}
	}
};

Notebook.prototype.addTextCell = function(text, panelID) {
	var temp = text;
	var t = "";
	for(var i in text)
	{
		temp[i] = temp[i].replace("\n", "<br/>");
		t = t.concat(temp[i]);
	}
	
	$("#"+panelID).append("<div class='cell'><p>"+t+"</p></div>");
};

Notebook.prototype.getCell = function(index) {
	
};

Notebook.prototype.getCells = function() {

};

Notebook.prototype.saveNotebook = function() {
	
};