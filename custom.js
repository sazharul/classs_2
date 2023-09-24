function sum() {
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var sum = parseInt(first)+parseInt(second);
    document.getElementById('showTotal').innerHTML = sum;
}
