var headings1 = ["Product name:", "Quantity:", "Unit price:", "Discount:", "Net price:"];
var headings2 = ["Product name:", "Qt:", "Unit:", "Discount:", "Net:"];

$(document).ready(function() {

    checkSize();
    $(window).resize(checkSize);
});

function checkSize(){
    if ($("#resize-control").css("float") == "left" ){
        changeHeadings(true);
    }else{
        changeHeadings(false);
    }
}

function changeHeadings(select) {
    if(select==true){
        var count = 0;
        $('#bill-headings').children().each(function () {
            $(this).html(headings2[count]);
            count+=1;
        });
    }else{
        var count = 0;
        $('#bill-headings').children().each(function () {
            $(this).html(headings1[count]);
            count+=1;
        });
    }

}