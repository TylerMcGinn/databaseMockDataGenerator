(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


module.exports = class Users{
    constructor(){
        this.length = this.listLenght();
        this.firstNames = this.makeRandomFirstNames();
        this.lastNames = this.makeRandomLastNames();
        this.birthdays = this.makeRandomBirthDays(this.length);
        this.addresses = this.makeRandomAddresses(this.length);
        this.phoneNumbers = this.makeRandomPhoneNumbers(this.length);
        this.emails = this.makeRandomEmails(this.length);
        this.list = this.makeList();
    }
    
    listLenght(){
        return this.getNames().length;
    }

    getNames(){
        let nameArray = "Jamee Egan  \r\nWhitney Coots  \r\nMargareta Hemminger  \r\nMaple Hobart  \r\nEric Ewers  \r\nWilfred Weckerly  \r\nTesha Weed  \r\nRosia Ryman  \r\nCarleen Brice  \r\nFederico Stillson  \r\nNena Hoffer  \r\nFredricka Heald  \r\nCatina Noren  \r\nSandee Dargie  \r\nEhtel Sandler  \r\nYulanda Sutcliffe  \r\nMolly Mister  \r\nTamika Doll  \r\nPasty Seckman  \r\nCheree Revilla  \r\nJude Aiello  \r\nKiana Amato  \r\nCharmain Epping  \r\nOlinda Frigo  \r\nAlejandrina Malachi  \r\nLoan Adkins  \r\nAudra Buss  \r\nMallory Cornish  \r\nDonnie Beaufort  \r\nGavin Haan  \r\nBreanne Zapien  \r\nRobbin Kidder  \r\nLeigh Shorty  \r\nCarter Lary  \r\nSadye Gatts  \r\nSid Trowbridge  \r\nSang Hickel  \r\nIndia Fehrenbach  \r\nEliseo Folsom  \r\nBrooke Gallow  \r\nKylie Keppler  \r\nLanora Merle  \r\nManuela Vales  \r\nIrvin Miele  \r\nLazaro Hosack  \r\nLynell Engelking  \r\nElly Goodrum  \r\nMiquel Pauli  \r\nSharyn Ritter  \r\nVerla Banh  \r\n\r\n".split('\n');
        return nameArray.map(val=>{
            return val.trim();
        });
    }
    
    
    getWords(){
        let wordsList = "Swordman xenocrates lumpier boghazkeui alessandro etym confraternity sahaptin chlortetracycline burlier overnegligent. Carpetless myrtle determine tieclasp boozier woomera covet bowers protanopic godendag johnsonese. Reinfusing feather avengeful anagenesis choirlike eurydamas unarchitected lousewort tidily pharmacologist prestudious. nonconsoling assoil sourish nondescribable unpathetic phonetical carbuncled noncosmic rheotron unilluminative. Clearheadedly dichroic bloodlessness eyeleting iceman ringbolt cubature pennsylvanian coder".split(' ');
        return wordsList.map(word=>{
           return word.includes('.') ? word.replace('.','') :  word;
        });
    }
    
    
    makeRandomFirstNames(){
        let firstNames = [];
        this.getNames().forEach(name=>{
            let splitName = name.split(' ');
            firstNames.push(splitName[0]);
        });
        return firstNames;
    }
    
    
    makeRandomLastNames(){
        let lastNames = [];
        this.getNames().forEach(name=>{
            let splitName = name.split(' ');
            lastNames.push(splitName[1]);
        });
        return lastNames;
    }
    
    
    makeRandomBirthDays(length){
        let birthdays = [];
        for(let i=0; i<length; i++){
            let day = Math.floor(Math.random()*31);
            let month = Math.floor(1+(Math.random()*12))
            let year = Math.floor(Math.random()*119)+1900;
            birthdays.push(`${day}/${month}/${year}`);
        }
        return birthdays;
    }


    makeRandomAddresses(length){
        let addresses = [];
        let words = this.getWords();
        let addressPostfix = ["Boulvard", "Ave", "Drive", 'Street', "Way", "Place"];
        for(let i=0; i<length; i++){
            let addressNumber = Math.floor(Math.random()*1000);
            let randomPostfix = addressPostfix[Math.round(Math.random()*5)]; 
            addresses.push(`${addressNumber} ${words[i]} ${randomPostfix}`);
        }
        return addresses;
    }


    makeRandomPhoneNumbers(length){
        let phoneNumbers = [];
        for(let i = 0; i < length; i++){
            let phoneNumber = '';
            for(let i = 0; i < 10; i++){
                phoneNumber += Math.floor(Math.random()*10);
            }
            let arr = Array.from(phoneNumber);
            arr.splice(3,0,'-');
            arr.splice(7,0,'-');
            phoneNumbers.push(arr.join(''));
        }
        return phoneNumbers;
    }
    

    makeRandomEmails(length){
        let emails = [];
        let names = this.getNames();
        let emailPostfix = ['@hotmail.com', "@gmail.com", "@shaw.ca", "@yahoo.com", "@AOL.com"];
        for(let i=0; i<length; i++){
            let randomPostfix = emailPostfix[Math.round(Math.random()*4)]; 
            emails.push(`${names[i].replace(' ', '')}${randomPostfix}`);
        }
        return emails;
    }

    makeList(){
        let list = {};
        for(let i=0; i<this.length; i++){
            list[`${i}`] = {
                first_name:this.firstNames[i],
                last_name:this.lastNames[i],
                dob:this.birthdays[i],
                address:this.addresses[i],
                phone:this.phoneNumbers[i],
                email:this.emails[i]
            };
        }
        return list;
    }
}
},{}],2:[function(require,module,exports){
const Users = require('./Users');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#sendData').click(function(){
let users = new Users();

    // let userRequest = {0:{first_name:'tyler',last_name:'mcginn'}, 1:{first_name:'max', last_name:'tougas'}};
    $.ajax({
        method:"POST",
        url:"../Server/server.php",
        data:users.list,
        success:function(res){
            $('.message').append(res);
        }
    });
});
// class User{
//     constructor(userData){
//         this.firstName = userData.firstNames;
//         this.lastName = this.makeRandomLastName(this.getNames())[index];
//         this.dob = this.makeRandomBirthDay()[index];
//     }
// }



},{"./Users":1}]},{},[2]);
