interface Tim {
    credito: number;
    numeroChiamate: number;

    ricarica(unaRicarica: number): void;
    chiamata(unaChiamata: number): void;
    messaggi(unMessaggio: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}


interface Vodafone {
    credito: number;
    numeroChiamate: number;
    ricarica(unaRicarica: number): void;
    chiamata(unaChiamata: number): void;
    messaggi(unMessaggio: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}


interface Wind {
    credito: number;
    numeroChiamate: number;
    ricarica(unaRicarica: number): void;
    chiamata(unaChiamata: number): void;
    internt(reteInternetOra: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}




class FirstUser implements Tim {
    public credito: number;
    public numeroChiamate: number;

    constructor(credito: number, numeroChiamate: number) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    chiamata(minuti: number): void {
        const costoChiamata = minuti * 0.20;
        this.credito = this.credito - costoChiamata
    }
    messaggi(unMessaggio: number): void {
        const costoMessaggi = unMessaggio * 0.10;
        this.credito = this.credito - costoMessaggi
    }

    numero404(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class SecondtUser implements Vodafone {
    public credito: number;
    public numeroChiamate: number;

    constructor(credito: number, numeroChiamate: number) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    chiamata(minuti: number): void {
        const costoChiamata = minuti * 0.25;
        this.credito = this.credito - costoChiamata
    }
    messaggi(unMessaggio: number): void {
        const costoMessaggi = unMessaggio * 0.25;
        this.credito = this.credito - costoMessaggi
    }
    numero404(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class ThirdUser implements Wind {
    public credito: number;
    public numeroChiamate: number;

    constructor(credito: number, numeroChiamate: number) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }
    chiamata(minuti: number): void {
        const costoChiamata = minuti * 0.10;
        this.credito = this.credito - costoChiamata
    }
    internt(reteInternetOra: number): void {
        const costoInternet = reteInternetOra * 0.50
        this.credito = this.credito - costoInternet
    }

    numero404(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}


const primo = new FirstUser(10, 0);
const secondo = new SecondtUser(15, 0)
const terzo = new ThirdUser(2, 0)


console.log("Primo utente:");
primo.ricarica(5);
primo.chiamata(3)
primo.ricarica(5)
primo.chiamata(2);
primo.messaggi(2);
console.log("Credito residuo:", primo.numero404());
console.log("Numero chiamate:", primo.getNumeroChiamate());
primo.azzeraChiamate();

console.log("Secondo utente:");
secondo.ricarica(5);
secondo.chiamata(2)
secondo.ricarica(5)
secondo.chiamata(4);
secondo.messaggi(5);
console.log("Credito residuo:", secondo.numero404());
console.log("Numero chiamate:", secondo.getNumeroChiamate());
secondo.azzeraChiamate();


console.log("Terzo utente:");
terzo.ricarica(5);
terzo.chiamata(4)
terzo.ricarica(10)
terzo.chiamata(1);
terzo.internt(3);
console.log("Credito residuo:", terzo.numero404());
console.log("Numero chiamate:", terzo.getNumeroChiamate());
terzo.azzeraChiamate();



