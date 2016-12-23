'use strict'

var dateZellFill = function(number){
    return ( "0" + number ).substr( -2 );
},
getDate = function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = dateZellFill(date.getMonth() + 1);
    let day = dateZellFill(date.getDate());
    return year + "-" + month + "-" + day;
},
getDate_YYYYMMDDhhmmss = function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = dateZellFill(date.getMonth() + 1);
    let day = dateZellFill(date.getDate());
    let hh = dateZellFill(date.getHours());
    let mm = dateZellFill(date.getMinutes());
    let ss = dateZellFill(date.getSeconds());
    return year + month + day + hh + mm + ss;
}

module.exports = { 
    getDate,
    getDate_YYYYMMDDhhmmss
};