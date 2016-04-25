var toLocaleLowerCase = String.prototype.toLocaleLowerCase;
String.prototype.toLocaleLowerCase = function (param) {
    if (param && param == "tr-TR") {
        var str = this.replace(/I/g, "ı").replace(/İ/g, "i");
        return toLocaleLowerCase.call(str, param);
    } else {
        return toLocaleLowerCase.call(this, param);
    }
}
var toLocaleUpperCase = String.prototype.toLocaleUpperCase;
String.prototype.toLocaleUpperCase = function (param) {
    if (param && param == "tr-TR") {
        var str = this.replace(/i/g, "İ").replace(/ı/g, "I");
        return toLocaleUpperCase.call(str, param);
    } else {
        return toLocaleUpperCase.call(this, param);
    }
}