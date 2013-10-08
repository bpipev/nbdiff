var leftNotebook;
var rightNotebook;
module( "module A", {
  setup: function() {
    var a = $.ajax(
        {
        url: "right",
        success: setRightNotebook
        }
    );
    stop();
    function setRightNotebook(data) {
        rightNotebook = data;
        start();
    }
    var b = $.ajax(
        {
        url: "left",
        success: setLeftNotebook
        }
    );
    stop();
    function setLeftNotebook(data) {
        leftNotebook = data;
        start();
    }
  },
  teardown: function() {
    // clean up after each test
  }
});
test("compareCell", function () {
    var cell1 = leftNotebook.worksheets[0].cells[0];
    var cell2 = rightNotebook.worksheets[0].cells[0];
    equal(compareCell(cell2, cell2), true);
});