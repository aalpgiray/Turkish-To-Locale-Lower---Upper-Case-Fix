function ToTurkishLower(param) {
    if (param && param == "tr-TR") {
        var str = this.replace(/I/g, "ı").replace(/İ/g, "i");
        return toLocaleLowerCase.call(str, param);
    } else {
        return toLocaleLowerCase.call(this, param);
    }
}

function ToTurkishUpper(param) {
    if (param && param == "tr-TR") {
        var str = this.replace(/i/g, "İ").replace(/ı/g, "I");
        return toLocaleUpperCase.call(str, param);
    } else {
        return toLocaleUpperCase.call(this, param);
    }
}

if (String.prototype.toLocaleLowerCase.name != ToTurkishLower.name) {
    var toLocaleLowerCase = String.prototype.toLocaleLowerCase;
}
String.prototype.toLocaleLowerCase = ToTurkishLower;

if (String.prototype.toLocaleUpperCase.name != ToTurkishUpper.name)
    var toLocaleUpperCase = String.prototype.toLocaleUpperCase;
String.prototype.toLocaleUpperCase = ToTurkishUpper;
