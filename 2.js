var a = prompt("Nhap chuoi so ");
var str = a.toString();
var result = [str[0]];
for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
        result.push("-", str[i]);

    } else {
        result.push(str[i]);

    }
}
document.write(result.join(""));
console.log(a);