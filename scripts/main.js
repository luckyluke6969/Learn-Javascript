$(document).ready(function() {

$('#addOne').hover( function() {
    var value = $('#name').val();
    $('ul').append('<li>' + value + '</li>');
    $('ul li:eq(0)').remove();
    $('#footer').toggle();
});

function go(name, age) {
    if(age<21) {
        return name;
    } else if(age==21) {
   return name + '!';
    } else {
        return age;
    }
}

alert( go('Luke', 24))

});













