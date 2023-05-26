var FirstUser = /** @class */ (function () {
    function FirstUser(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.20;
        this.credito = this.credito - costoChiamata;
    };
    FirstUser.prototype.messaggi = function (unMessaggio) {
        var costoMessaggi = unMessaggio * 0.10;
        this.credito = this.credito - costoMessaggi;
    };
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondtUser = /** @class */ (function () {
    function SecondtUser(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    SecondtUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    SecondtUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.25;
        this.credito = this.credito - costoChiamata;
    };
    SecondtUser.prototype.messaggi = function (unMessaggio) {
        var costoMessaggi = unMessaggio * 0.25;
        this.credito = this.credito - costoMessaggi;
    };
    SecondtUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondtUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondtUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondtUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.10;
        this.credito = this.credito - costoChiamata;
    };
    ThirdUser.prototype.internt = function (reteInternetOra) {
        var costoInternet = reteInternetOra * 0.50;
        this.credito = this.credito - costoInternet;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var primo = new FirstUser(10, 0);
var secondo = new SecondtUser(15, 0);
var terzo = new ThirdUser(2, 0);
console.log("Primo utente:");
primo.ricarica(5);
primo.chiamata(3);
primo.ricarica(5);
primo.chiamata(2);
primo.messaggi(2);
console.log("Credito residuo:", primo.numero404());
console.log("Numero chiamate:", primo.getNumeroChiamate());
primo.azzeraChiamate();
console.log("Secondo utente:");
secondo.ricarica(5);
secondo.chiamata(2);
secondo.ricarica(5);
secondo.chiamata(4);
secondo.messaggi(5);
console.log("Credito residuo:", secondo.numero404());
console.log("Numero chiamate:", secondo.getNumeroChiamate());
secondo.azzeraChiamate();
console.log("Terzo utente:");
terzo.ricarica(5);
terzo.chiamata(4);
terzo.ricarica(10);
terzo.chiamata(1);
terzo.internt(3);
console.log("Credito residuo:", terzo.numero404());
console.log("Numero chiamate:", terzo.getNumeroChiamate());
terzo.azzeraChiamate();
