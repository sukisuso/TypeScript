(function () {
    //Optional parameter
    function buildAddressOptional(address1, city, address2) {
        var addr2 = (address2.length > 0) ? ', ' + address2 : '';
        displayAddress(address1 + addr2 + ', ' + city);
    }
    //Rest parameters
    function buildAddressRest(city) {
        var Address = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            Address[_i - 1] = arguments[_i];
        }
        var address = '';
        Address.forEach(function (addr) { return address += (addr.length > 0) ? addr + ', ' : ''; });
        address += city;
        displayAddress(address);
    }
    function displayAddress(msg) {
        result.innerHTML = msg;
    }
    var $ = function (id) { return document.getElementById(id); };
    var addressButton = $('addressButton'), address = $('address'), address2 = $('address2'), city = $('city'), result = $('result');
    //Call function with optional parameter
    //addressButton.addEventListener('click',(e) => buildAddressOptional(address.value, city.value, address2.value));
    //Call function with Rest parameters
    addressButton.addEventListener('click', function (e) { return buildAddressRest(city.value, address.value, address2.value); });
}());
