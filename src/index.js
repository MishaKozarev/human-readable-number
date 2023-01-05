module.exports = function toReadable (n) {
    let zero = ['zero']
    let oneToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ['one hundred'];
    if (n === 0){
        return zero[0]; /*0*/
    }
    else if (n < 10){
        return oneToNine[n]; /*1,2,3...9*/
    }
    else if ((n >= 10) && (n < 20)){
        return tenToNineteen[n%10]; /*10,11,12...19*/
    }
    else if ((n >= 20) && (n < 100)){
        return (twentyToNinety[Math.floor(n/10)] + ' ' + oneToNine[n%10]).trim();  /*20,21,22...99*/
    }
    else if (n === 100){
        return hundred[0]; /*100*/
    }
    else if (n >= 100 && n < 1000){
        if ((n%100 === 0)){
            return (oneToNine[Math.floor(n/100)] + ' hundred');  /*200,300,...900*/
        }else if (n%100 < 10 && n%100 > 0 ){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + oneToNine[n%100]);  /*101,102,103,104...109*/
        }else if (n%100 < 20 && 9 < n%100){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + tenToNineteen[n%10]); /*110,111,112,113...119*/
        }else if (n%10 === 0 && n%100 !== 0){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + twentyToNinety[((n%100)/10)]);  /*120,130,140,130...190*/
        }else if (n%100 >= 20 && n%10 !== 0){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + twentyToNinety[Math.floor((n%100)/10)] + ' ' + oneToNine[n%10]);  /*121,135,149,130...199*/
        }
    }
}
