/* Definiere alle möglichen Wertekombinationen der
  Booleschen Variablen a, b und c.
*/
let combinations = [
    [false, false, false], // tripel
    [false, false, true],
    [false, true, false],
    [false, true, true],
    [true, false, false],
    [true, false, true],
    [true, true, false],
    [true, true, true]
 ];
 
 // Generate einen output string (HTML fragment) mit Titel.
 let html = line("Calculate logical expression with JavaScript");
 
 // Schleife (Loop) über alle Kombinationen von Booleschen Werten.
 for (let i = 0; i < combinations.length; i++) {
    let tripel = combinations[i];
 
    // html = html + makeTestReport(...); append html to the existing html
    html += makeTestReport(tripel[0], tripel[1], tripel[2]);
 }
 
 // Schreibe den Output in das <p> tag.
 writeOutput(html);
 
 // SUPPORT FUNCTIONS ------------------------------------------------
 
 function makeTestReport(a, b, c) {
    // Berechne das resultat der ersten Formel ab + ¬ac + bc
    // "¬" wird mit Alt Gr + 6 erzeugt - danke Chaimaa.
    let result1 = (a && b) || (!a && c) || (b && c);
 
    // Berechne das resultat der zweiten Formel ab + ¬ac
    let result2 = (a && b) || (!a && c);
 
    // Generate einen output string (HTML fragment).
    let html = line(); // Empty line. This is the same as html = html + line(); line("Calculate logical expression with JavaScript");
    html += line(`With a = ${a}, b = ${b} and c = ${c}`);
    html += line(`ab + ¬ac + bc = ${result1}`);
    html += line(`ab + ¬ac = ${result2}`);
 
    return html; // HTML Fragment zurückgeben.
 }
 
 function line(text) { 
    if (text) {
        // Das argument text ist ein nicht leerer String.
        return text + '<br>';
    }
    else return '<br>'; 
 }
 
 function writeOutput(html) {
    document.getElementById("output").innerHTML = html;
    // Wäre auch möglich mit document.querySelector("#output")
    // innerText wäre für Text ohne HTML-Tags
 }
 