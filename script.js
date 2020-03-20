function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $('#text${key}').text(value);
    }
}

$(document).ready(function () {
$("#currentDay").text(moment().format("dddd, MMMM Do"));
for (var i = 9; i < 18; i++){

    //create a row
    var row = $('<div data-time=${i} id="${i}" class = "row"> ');

    //create the first part of the column
    var column1 = $(`<div class="col-sm-2"> <p class = "hour">${timeFormat(i)}</p>`);

    //create the second part of the column
    var column2 = $('<div class="col-sm-8 past" <textarea id= text${i} class="description" placeholder="Add your event here..."></textarea');

    //create the third part of the column
    var column3 = $('<div class="col-sm-2"><button class="saveBtn" id="${i}><i class="fas fa-save"></i><button</div>')

    //append column to row
    row.append(column1);
    row.append(column2);
    row.append(column3);

    //a
}
})