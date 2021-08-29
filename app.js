// b1
let n = parseInt(prompt("Nhập vào N"))
let a = [];
for (let i = 0; i < n; i++) {
    let d = parseInt(prompt(`Nhập vào số thứ ${i}`))
    if(d%2 == 0){
        a.push(d)
    }
}
console.log("Số lượng các phần tử chia hết cho 2 là: "+a.length)
for (let i = 0; i < a.length ; i++) {
    console.log(a[i])
}

// b2
let a = parseInt(prompt("Nhập vào phần tử a: "))
let count = 0;
n = [1,1,2,2,3,3,5,5,6,5,6,7,8,7]
for (let i = 0; i < n.length; i++) {
    if(n[i]==a){
        count++;
    }
}
console.log(count)

// b3
function songuyento(n){
    for (let i = 2; i < n; i++) {
        if(n%i==0){
            return false
        }
    }
    return true
}
n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let count = 0;
for (let i = 0; i < n.length; i++) {
    if(songuyento(n[i]) == true && n[i] != 1){
        count+=n[i];
    }
}
console.log(count)