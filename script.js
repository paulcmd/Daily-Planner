function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {

        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column
        var column1 = $('<div class="col-sm-2"> <p class="hour">' + timeFormat(i) + '</p>');

        //create column 2
        var column2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

        //create column 3
        var column3 = $(`<div class="col-sm-2"><button class="saveBtn" id[[]]=${i}><i class="fas fa-save"></i></button>`)

        // append col to row
        row.append(column1);
        row.append(column2);
        row.append(column3);

        // last step add rows to container
        $(".container").append(row);

        getLocalStorage(i);
    }

    function timeFormat(hours) {
        var time = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + time;
    }
    timeFormat();

    function updateColors()
    {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++)
        {
            console.log(currentTime, $(`#${i}`).data("time"));

            if ($(`#${i}`).data("time") == currentTime)
            {
                $(`#text${i}`).addClass( "present");
            }

            else if (currentTime < $(`#${i}`).data("time"))
            {
                $(`#text${i}`).addClass( "future");
            }
        }
    }

    setInterval(function() {
        updateColors();
    }, 1000);

    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
        var eventId = $(this).attr('id');
        var eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });});