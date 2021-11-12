function soNgay() {
    let a = parseFloat(document.getElementById("month").value);
    let b = document.getElementById('hienthi');
    
    switch(a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            b.innerHTML=" thang co 31 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            b.innerHTML='thang co 30 ngay';
            break;
        case 2:
            b.innerHTML="thang co 28 ngay hoac 29 ngay";
            break;
        default:
            b.innerHTML="khong phai thang"
    }

}
    