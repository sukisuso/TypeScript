var UX;
(function (UX) {
    var User = (function () {
        function User(nombre) {
            this.name = nombre;
        }
        return User;
    })();
    UX.User = User;
})(UX || (UX = {}));
var temp = Templates;
var Value = new temp.Value();
var jUsuario = new UX.User("Jesus Juan");
