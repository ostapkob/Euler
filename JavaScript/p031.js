let coins = [1, 2, 5, 10, 20, 50, 100, 200]
// let max_coins = {}
// coins.map(x => max_coins[x]=200/x)
let sum = 200

let res = 0
for (let a=0; a<=sum/coins[0]; a++) {
  for (let b=0; b<=sum/coins[1]; b++) {
    if (a*coins[0]+b*coins[1]>sum) continue
    for (let c=0; c<=sum/coins[2]; c++) {
      if (a*coins[0]+b*coins[1]+c*coins[2]>sum) continue
      for (let d=0; d<=sum/coins[3]; d++) {
        if (a*coins[0]+b*coins[1]+c*coins[2]+d*coins[3]>sum) continue
        for (let e=0; e<=sum/coins[4]; e++) {
          if (a*coins[0]+b*coins[1]+c*coins[2]+d*coins[3]+e*coins[4]>sum) continue
            for (let f=0; f<=sum/coins[5]; f++) {
              if (a*coins[0]+b*coins[1]+c*coins[2]+d*coins[3]+e*coins[4]+f*coins[5]>sum) continue
              for (let g=0; g<=sum/coins[6]; g++) {
              if (a*coins[0]+b*coins[1]+c*coins[2]+d*coins[3]+e*coins[4]+f*coins[5]+g*coins[6]>sum) continue
                if (a*coins[0]+b*coins[1]+c*coins[2] +d*coins[3] + e*coins[4] + f*coins[5] + g*coins[6] == sum)  {
                  res++
              }
            }
          }
        }
      }
    }
  }
}

console.log(res)


