const fs = require('fs');

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
        let nameArray = fs.readFileSync('./src/names.txt', 'utf8').split('\n');
        return nameArray.map(val=>{
            return val.trim();
        });
    }
    
    
    getWords(){
        let wordsList = fs.readFileSync('./src/randomWords.txt', 'utf8').split(' ');
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