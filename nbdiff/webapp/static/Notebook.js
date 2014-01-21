function Notebook(data) {
	this.data = data;
}

Notebook.prototype.render = function(panelID) {
	$("#"+panelID).html(JSON.stringify(this.data));
};

Notebook.prototype.getCell = function(index) {
	
};

Notebook.prototype.getCells = function() {

};

Notebook.prototype.saveNotebook = function() {
	
};