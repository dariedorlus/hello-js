
// Lets solve the half pyramid problem 

const halfPyramidSolver = (rowCount, print) => {

    for(let i = 0; i < rowCount; i++)
    {
        let row = '';
        for(let j = 0; j < i+1; j++){
            row += print
        }
        console.log(row)
    }

    return rowCount
}

const halfPyramidSolver2 = (rowCount, print) => {

    let row = print

    for(let i = 0; i < rowCount; i++)
    {
        console.log(row)
        row += print

    }

    return rowCount
}


// console.time("Solution1")
// halfPyramidSolver(7, "#")
// console.timeEnd('Solution1')

// console.log(`\n-----------------------------------------------------`)

// console.time("Solution2")
// halfPyramidSolver2(7, "#")
// console.timeEnd('Solution2')

const solvePyramid = (rowCount, design) => 
    new Promise((resolve, reject) => {
        
        if(!(rowCount || design)){
            reject("Row count and/or design missing.")
        }

        resolve({rowCount, design})
    })

solvePyramid(10, "#")
.then(({rowCount, design}) => halfPyramidSolver2(rowCount, design))
.then((rowCount, {}) => halfPyramidSolver(rowCount, "@"))
.catch(err => {
    console.log("Something went seriously wrong. See", err)
})
