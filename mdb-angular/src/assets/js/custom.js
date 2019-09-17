$('#height').keyup(function(){ // run anytime the value changes
    var weight  = parseFloat($('#weight').val());   // get value of field
    var height = parseFloat($('#height').val())  / 100; // convert it to a float
    var toMeter = weight / ((height * height));
    var shows = document.getElementById('total_expenses2').value = toMeter.toFixed(2);
    var show = 18.5;
    switch (true){
    case show < 18.5:
    alert("1. น้ำหนักน้อยกว่ามาตรฐาน");
    $("#total_expenses2").css('color', 'red');
    break;
    
    case show >= 18.5 && show < 23:
     alert("2. อ้วนระดับ1");
    break;
    
    case show >= 23 && show < 30:
     alert("3. อ้วนระดับ2");
    break;
    
    case show >= 30:
     alert("4. อ้วนระดับ3");
    break;
    }
});
