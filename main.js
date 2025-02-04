arry =[];
function output(number){
    for(let h = 0;h<=number;h++)arry[h]=0;
    eularfunction(number);
    console.log(arrytonum(arry,number))
}  
function eularfunction(number){
    let input = parseInt(number);
    for(let i = 2; i<=input;i++){
        if(testprim(i)===true & testrelativeprime(i,input)===false){
            arry[i]++;
            return eularfunction(number/i)
        }
    }
}
function uproot(input){
    for (let i=0;i<input;i++){if(i**2>=input){return i+1}}
}
function testprim(num){
    for(let i=1;i<uproot(num);i++){
        for (let j = 2;j<uproot(num);j++){if(num%j === 0&& i%j ===0)return false}
    }
    return true;
}
function testrelativeprime(a,b){
    let k = Math.min(a,b);
    for(let i=2;i<=k;i++){
        if(a%i === 0 && b%i ===0)return false
    }
    return true
}
function arrytonum(arry,num){
    let sum = 0;
    for(let k = 0;k<arry.length;k++){
        if(!(arry[k]===0) && testprim(k)===true){
            for(let j = 1;j<=Math.floor(num/k);j++)arry[j*k] = 1
        }
    }
    arry.forEach(element => sum = sum +element);
    return num-sum
}
console.time('time')
for(let i = 1;i<=10000;i++){
    output(i);
}
console.timeEnd('time')
//if just easy force it may take more much time for a long time run ,as 10**10
//this is the sum of eular function 
