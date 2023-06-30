const nums = [ 1, 3, 5, 7 ]


function convertValNumArr(numStr) {
    let nums = []

    for (let i = 0; i < numStr.length; i++) {
        let valNum = Number(numStr[i])

        if (Number.isNaN(valNum)) {
            return new Error(
                `Value ${numStr[i]} is not a valid number`
            )
        }
        nums.push(valNum)
    }
    return nums
}

function findMean(nums) {
    if(nums.length === 0) 
        return 0
    return nums.reduce(function (sum, val) {
        return sum + val
    }) / nums.length
}

function findMedian(nums) {
     let sortNums = nums.sort((a, b) => a - b)
     let midIdx = Math.floor(sortNums.length / 2)

     if (sortNums.length % 2 === 1) {
        return sortNums[midIdx]
     } else {
        let midVal = sortNums.slice(midIdx - 1, midIdx + 1)
        return (midVal[0] + midVal[1] / 2)
     }
}

function createFreqCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1
        return acc
    }, {})
}

function findMode() {
    let freqCounter = createFreqCounter(arr)

    let count = 0
    let freqVal
    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            freqVal = key
            count = freqCounter[key]
        }
    }
    return +freqVal
}


module.exports = {
    findMean,
    findMedian,
    findMode,
    createFreqCounter,
    convertValNumArr
}
