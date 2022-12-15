console.log("Hallo du schon wieder!!");


/* DU EI! */
function news(){
    let neu = 3;
    var eier = "Eier";
    var du = "du Ei!!";
    document.write("<p>" + "Du hast" + " " + neu + " " + eier + " " + du + "</p>");
};

/* DISTANCE TO MILES */
function mToKm(miles){
    return miles * 1.609;
};
mToKm(3);

/* PIZZA ORDER */
function getPizzaOrder(name, ingredient){
    return name + ' wants to order pizza with ' + ingredient + '.';
};
    getPizzaOrder('Peter', 'Hawaii');


/* TO UPPER CASE */
function toUpperCase(text){
    return text.toUpperCase();
};

/* CALCULATE RADIUS */
function circumference(radius){
    return radius * 2 * Math.PI
};

/* NICE WEATHER */
function weather(niceWeather){
    if  (niceWeather){
        return "go for a walk";
    }
    else {
        return "stay at home and watch netflix";
    }
};

/* AGE VERIFICATION */
function old(age){
    if (age>=18){
        return'You can sign in you Perv.';
    }
    else{
        return'You must be at least 18 to sign up.'
    }
}

/* WEEK DAYS */
function weekDays(day){
    switch (new Date()){
        case "Monday":
            return"Damnit, it's Monday again🤮";
            break;
        case "Tuesday":
            return"Yeah! I'm awake😴😴";
            break;
        case "Wednesday":
            return"Almost there🪗";
            break;
        case "Thursday":
            return"Party Time🥳🥳🥳🥳";
            break;
        case "Friday":
            return"Party On🤤🤤";
            break;
        case "Saturday":
            return"Ooooh Yeah🥳🥳";
            break;
        case "Sunday":
            return"Again?!!🤮🔨";
            break;
    }
}


/* DAILY ACTIVITIES */
function daily(){
    let dailyActivities = ['eat', 'sleep', 'shower'];
        dailyActivities.push('cook', 'clean');
    for (let i = 0; i <= 7; i++){
        document.writeln(dailyActivities[i].toUpperCase()); 
    };
}

/* WEATHER DATA */
function  logWeatherData() {
    let weatherData = { 
        date: '2022-12-01',
        temperature: 30,
        humidity: 10
    };

    document.writeln(weatherData.date + '<br>');
    document.writeln(weatherData.humidity + '<br>');
    document.writeln(weatherData['temperature']+ '<br>');

    weatherData.temperature = 40;
    document.writeln(weatherData['temperature'] + '<br>');

    let property = 'humidity';
    weatherData[property] = 99;
    document.writeln(weatherData[property]);
}

/* FULL NAME */
function bigName(){
    const user = {    
        lastName:       "Grimes",
        firstName:  "Petra",
        id:         5566,
        fullName:   function(){
            return this.firstName + " " + this.lastName;
        }
    };
document.writeln(user.fullName());
}


/* FULL */
function divi(a){
a = a / 2;
document.writeln(a);
}

/* HEROES */
function logUsers() {
    const users =[
    {
        lastName:   "Man",
        firstName:  "Spider",
        age:        22,
        origin:     "USA"
    },{
        lastName:   "Man",
        firstName:  "Iron",
        age:        44,
        origin:     "USA"
    },{
        lastName:    "Man",
        firstName:  "Super",
        age:        2,
        origin:     "Krypton"
    },{
        lastName:   "Man",
        firstName:  "Bat",
        age:        38,
        origin:     "USA"
    },{
        lastName:   "America",
        firstName:  "Captain",
        age:        86,
        origin:     "USA"
    },{
        lastName:   "Samurai",
        firstName:  "Silver",
        age:        21,
        origin:     "Japan"
    },{
        lastName:   "the Untouchable",
        firstName:  "Unus",
        age:        24,
        origin:     "Turkey"
    },{
        lastName:   "von Strucker",
        firstName:  "Baron",
        age:        65,
        origin:     "Germany"
    },{
        lastName:   "Chi",
        firstName:  "Shang",
        age:        42,
        origin:     "China"
    },{
        lastName:   "Burb",
        firstName:  "Rio",
        age:        35,
        origin:     "Switzerland"
    }
];

    /* // VORLAGE
    document.write("<h3>TITLE </h3>");
    document.write("<ul>")
        for (let i = 0; i <= users.length; i++) { //LOOP
                document.write("<li>");
                document.write(
                    [users[i].firstName + ' ' + users[i].lastName + ', ' +users[i].age
                );
                document.write("</li>");        
    };  
    document.write("<ul>")
    */

// a), b), c), ALL HEROES
    document.write("<h6> A,B,C) ALL HEROES </h6>");
    document.write("<ul>");
        for (let i = 0; i < users.length; i++) { //LOOP
                document.write("<li>");
                document.write(
                    [i] + ': ' + users[i].firstName + ' ' + users[i].lastName + ', ' +users[i].age + ', ' + users[i].origin 
                );
                document.write("</li>");        
    } 
    document.write("</ul>");
    document.write("<p></p>")

// CHALLANGE D LIST THOSE YOUNGER OR SAME AS 40
    document.write("<h6> D) THOSE YOUNGER OR SAME AS 40</h6>");
    document.write("<ul>");
        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            if (user.age <= 40){ 
                    document.write("<li>");
                    document.write(
                        i + ": " + user.firstName + ' ' + user.lastName+ ', ' +user.age + ', ' + user.origin
                    );
                    document.write("</li>");
                }
    }   
    document.write("</ul>");
    document.write("<p></p>")

// CHALLANGE E LIST THOSE OLDER OR SAME AS 30
    document.write("<h6> E) THOSE OLDER OR SAME AS 30</h6>");
    document.write("<ul>");
        for (let i = 0; i < users.length; i++) {
            if (users[i].age >= 30) writeToListItem(users[i], i);
            }   
    document.write("</ul>");
    document.write("<p></p>");    

// CHALLANGE F LIST THOSE WICH ARE FROM CH OR DE
    document.write("<h6> F) THOSE WICH COME FROM 'CH' AND 'DE'</h6>");
    document.write("<ul>");
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.origin === "Switzerland" || user.origin === "Germany") writeToListItem(user, i);
    }
    document.write("</ul>");

// CHALLANGE G LIST OF THOSE NOT FROM SWITZERLAND AND YOUNGER THAN 30
    document.write("<h6> G) THOSE NOT FROM 'CH' AND YOUNGER THAN 30</h6>");
    document.write("<ul>");
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.origin !== "Switzerland" && user.age < 30) writeToListItem(user, i);
    }
    document.write("</ul>"); 
  


// CHALLANGE H  A FUNCTION RECALL TO SHOW THOSE NOT FROM SWITZERLAND AND OLDER THAN 20
function filter(users,i,older20){
    document.write("<h6> H) THOSE NOT FROM 'CH' AND OLDER THAN 20</h6>");
    document.write("<ul>");
    for (let i = 0; i < users.length; i++); {
        let user = users[i];
        if (older20AndCH(user)) writeToListItem(user, i);
    }
    document.write("</ul>");
    }



function older20AndCH(user) { // FUNCTION SWISS AND OLDER THAN 20
    return (user.origin !== "Schweiz" && user.age > 20);
    }

function writeToListItem(user, i){ // FUNCTION TO DOCUMENT.WRITE SHORTENING
    document.write('<li>');
    document.write(
        i + ': ' + user.firstName + ' ' + user.lastName + ', ' + user.age + ', ' + user.origin
    );
    document.write('</li>');
    }

}    





/* !== nicht gleich, && heist ...und.. */