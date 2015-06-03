$(document).ready(function(){

    $('input.money').focusout(function () {
        var num = $(this).val();
        var words = toWords(num);
        $('.words').html(words);
    });

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    var today = mm+'/'+dd+'/'+yyyy;
    // document.getElementById('date').write(today);
    document.getElementById('date').innerHTML = today;

    check = function () {
        alert('Thank you ' + $('.name').val() + ', your request for a check from Bjargne Melgaard for ' + $('.words').html() + 'dollars has been submitted. ' );
    }

    });