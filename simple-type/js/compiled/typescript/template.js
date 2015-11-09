var Templates;
(function (Templates) {
    var Value = (function () {
        function Value() {
        }
        Value.prototype.Value = function () { };
        ;
        return Value;
    })();
    Templates.Value = Value;
    function processData(data) {
    }
    Templates.processData = processData;
})(Templates || (Templates = {}));
var xNum = new Templates.Value();
Templates.processData(xNum);
