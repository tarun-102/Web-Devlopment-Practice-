$(document).ready(function () {

    let count = 10;
    let intervalid;

    function colorgenerator() {
        let box = $(".box")
        box.each(function () {
            let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            $(this).css("background-color", color);
        });

    }

    $("#addbox").click(function () {    
        for (let i = 1; i <= 10; i++) {
            count++
            $(".box-container").append(`<div class="box" id="${count}">Box ${count} </div>`)
        }
    })

    $("#removebox").click(function () {
        for (let i = 1; i <= 10; i++) {
            if (count == 10) break;
            $(".box").last().remove()
            count--
        }
    })
    $("#remallbox").click(function () {

        while (count > 10) {
            $(".box").last().remove()
            count--
        }
    })

    $("#randomebox").click(function () {
        colorgenerator()
    })

    $("#remcolbox").click(function () {
        $(".box").css("background-color", "white")
    })

    $("#circlebox").click(function () {
        $(".box").css("border-radius", "50%")
    })
    $("#squarebox").click(function () {
        $(".box").css("border-radius", "0%")
    })

    $("#startfun").click(function () {
        intervalid = setInterval(colorgenerator, 200)
    })
    $("#stopfun").click(function () {
        clearInterval(intervalid)
    })

    $("#starteffect").click(function () {
        let isCircle = false;
        intervalid = setInterval(() => {
            colorgenerator()
            $(".box").css(
                "border-radius", isCircle ? "50%" : "0%"
            );
            isCircle = !isCircle
        }, 300)
    })

    $("#stopeffect").click(function () {
        clearInterval(intervalid)
    })

    $("form").submit(function (e) {
        e.preventDefault()
        let number = $("#number").val()
        let color = $("#color").val()

        $(".box").each(function () {
            let id = $(this).attr("id")
            if (id == number) {
                $(this).css("background", color)
            }
            if ($("#showbox").prop("checked") && id == number) {
                $(this).show()
                $("#showbox").prop("checked", false)
            }
            if ($("#hidebox").prop("checked") && id == number) {
                $(this).hide()
                $("#hidebox").prop("checked", false)
            }
        })
    })

})