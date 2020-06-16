$(document).ready(function () {
    console.log("function working")
    $("#currentDay").text(moment().format("MMM Do YYYY"));

    var timeList = [
        "9 AM ",
        "10 AM ",
        "11 AM ",
        "12 PM ",
        "1 PM ",
        "2 PM",
        "3 PM ",
        "4 PM ",
        "5PM ",
    ];
})

    var currentTime = moment().format("h A");
    var timeList = timeList.length
    for (var i = 0; i < timeList.length; i++) {
        var container = $(".time-block");
        var hourList = timeList[i];
        var timeRow = $("<div class= 'row'>");
        var timeCol = $("<div class= 'col-sm-1 hour'>");
        var scheduleCol = $("<textarea>", {
            class: "col-sm-8 time-sensitive form-control",
            id: "text-" + i
        });
        var saveCol = $("<button>", {
            class: "col-sm-1 saveBtn",
            id: "btn-" + i
        });
        timeRow.text(hourList);
        timeRow.append(timeCol).append(scheduleCol).append(saveCol);
        container.append(timeRow);
        scheduleCol.after(saveCol);
        $(".saveBtn").html('<svg xmlns="http;//www.w3.org/2000/svg" height="24" viewBox="0 0');
        saveCol.addClass(".saveBtn i:hover");
        if (hourList === currentTime) {
            $(scheduleCol).addClass("present");
        } else if (hourList < currentTime) {
            $(scheduleCol).addclass("past");
        } else {
            $(scheduleCol).addClass("future");
        }
        $("#btn-" + i).on("click", function (event) {
            // console.log this
            console.log(this);
            var text = $(".form-control").val();
            event.preventDefault();
            if (text != "") {
                console.log(text);
            } else {
                console.log("this is empty");
            }
            localStorage.setItem("text", Json.stringify(text))

        });
    }