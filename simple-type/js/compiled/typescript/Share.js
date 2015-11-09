var Share;
(function (Share) {
    var Constants = (function () {
        function Constants() {
        }
        Object.defineProperty(Constants, "SERVER_IP", {
            get: function () { return "10.200.100.1"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "BANK_NUMBER", {
            get: function () { return 10320150981052; },
            enumerable: true,
            configurable: true
        });
        return Constants;
    })();
    Share.Constants = Constants;
})(Share || (Share = {}));
