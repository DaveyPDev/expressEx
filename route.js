




const express = require('express');
const ExpressError = require('./expressError');
const { convertValNumArr } = require( './maths' );

const app = express();

const { convertValNumArr, findMode, findMean, findMedian } = require('./maths')

function attemptToSaveToDB() {
    throw "Connection Error"
}

app.get("/mean", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("invalid nums", 400)
    }
    let numsStrs = req.query.nums.split(',')
    let nums = convertValNumArr(numsStrs)
    if(nums instanceof Error) {
        throw new ExpressError(nums.msg)
  }

  let results = {
    operation: 'mean',
    results: findMean(nums)
  }

    return res.send(results)
})


app.get("/median", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("invalid nums", 400)
    }
    let numsStrs = req.query.nums.split(',')
    let nums = convertValNumArr(numsStrs)
    if(nums instanceof Error) {
        throw new ExpressError(nums.msg)
  }

  let results = {
    operation: 'median',
    results: findMean(nums)
  }

    return res.send(results)
})
app.get("/mode", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("invalid nums", 400)
    }
    let numsStrs = req.query.nums.split(',')
    let nums = convertValNumArr(numsStrs)
    if(nums instanceof Error) {
        throw new ExpressError(nums.msg)
  }

  let results = {
    operation: 'mode',
    results: findMean(nums)
  }

    return res.send(results)
})




app.use((req, res, next) =>
{
    const e = new ExpressError('Page not found', 404)
    next(e)
})

app.use((err, req, res, next) => 
{
    let status = err.status || 500
    let msg = err.msg

    return res.status(status).json( 
        {
            error: { msg, status }
        }
    )
})

app.listen(3000, () =>
{
    console.log('Server is running on port: 3000')
})