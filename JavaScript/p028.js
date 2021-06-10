let n=1001
let res = 1
for (let i=3; i<=n; i+=2) {
  let rb = i**2; 
  let lb = rb - i + 1
  let tl = lb - i + 1
  let rt = tl - i + 1
  res += rb + lb + tl +rt
}
console.log(res)
