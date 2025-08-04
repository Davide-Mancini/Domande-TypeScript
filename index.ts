// <!-- 1) Quali sono i tipi primitivi principali in TypeScript?
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
// 7) Cos'è un Type Union e come si scrive?
// 8) Crea una variabile che possa contenere un numero, null o undefined.
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.   -->
 

// <!-- RISPOSTE -->
// 1) I dati primitivi in TS sono: String, Number, Boolean, Null , Undefined,Any,Never.
/* 2) */ const MyName :string='Davide'
         const MyAge :number =26
         const StudingTS :boolean = true
/* 3) */ const greet = (name:string) => { return "Ciao " + name }
/* 4) */ Number      
/* 5) */ const MyPrice  = (p1:number, iva:number)=>{
    return p1*iva/100+p1
}  
console.log(MyPrice(10,22))
/* 6)*/ const MyString = ( s1:string, s2:string)=>{
    return (s1+s2).length
}
console.log(MyString('Davide',' Mancini'))
// 7) Una Type Union permette di creare un unione di diversi tipi e si usa il simbolo '|' e si scrive in una variabile per esempio:
//  let MyVariable :string|number='ciao' Questo ci permette di cambiare il tipo di una variabile da stringa a numero e viceversa.
/*8)*/ let MyVariable : number|null|undefined 
/*9)*/ 
/*10)*/ const numbers:number[] = [1, 2, 3]
        const numbers2:Array<number> = [1, 2, 3]
/*11*/ const MyTuple:[string,string,string,number,number]=['a','b','c',1,2]
//12 Type si usa per i tipi di dati primitivi mentre interface per i tipi di dati complessi come array o oggetti
/*13*/ interface MyOBJ{
    firstName: string
    lastName: string
    age:number
}
/*14)*/ interface User{
    email: string
    phone?: number
}
/*15)*/ interface Student{
    name:string
    voto: number
}
const Students: Student[] = [
    {
        name:'Davide',
        voto:7,
    },
    {
        name:'Giorgio',
        voto:4,
    },
    {
        name:'Rachele',
        voto:9,
    },
    {
        name:'Andrea',
        voto:8,
    },
]
/*16)*/interface Veicolo{
    engine: boolean
    wheels: number
    color: string
}
interface Automobile extends Veicolo{
    brand: string

}
/*17)*/ const Panda: Automobile={
engine:true,
wheels:4,
color:'black',
brand:'FIAT'
}
// 18) I generics sono un tipo che viene fornito come argomento in un interfaccia, fornisce un parametro e può rendere generica la proprietà di un oggetto
// 19) SI
/*20)*/ interface MyFetch <A>{

}