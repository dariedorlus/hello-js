const halfPyramidSolver = (rowCount, print) => {

    for(let i = 0; i < rowCount; i++)
    {
        let row = '';
        for(let j = 0; j < i+1; j++){
            row += print
        }
        console.log(row)
    }

    //throw new Error("Pyramid solver 1. Oh No!")
    const promise = new Promise((resolve, reject) => {
        resolve(rowCount*2)
    })
    return promise
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

const minMax = arr => {
    if(!arr || arr.length === 0){
        throw new Error("Invalid array")
    }

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    return {min, max}
}

// console.time("Solution1")
// halfPyramidSolver(7, "#")
// console.timeEnd('Solution1')

// console.log(`\n-----------------------------------------------------`)

// console.time("Solution2")
// halfPyramidSolver2(7, "#")
// console.timeEnd('Solution2')


const pyramidSolver = (rowcount,  print) => {
//  function pyramidSolver(rowcount,  print)  {
    return new Promise ((resolve, reject) => {
        if(!rowcount  || !print) // if(!(rowcount  || print))
        {
            reject("Row count and/or print not provided.")
        }

        //const input = {rowcount: rowcount, print: print}

        resolve({rowcount, print})


    })
}

// pyramidSolver(10, "@")
// .then(({rowcount, print}) => halfPyramidSolver(rowcount, print))
// .then( newRowcount => halfPyramidSolver2(newRowcount, "#"))
// .catch((error) => {
//     console.log("Oh NO!", error)
// })

const nicePyramidSolver = async (rowCount, print) => {
    
   try {
        let res = await pyramidSolver(rowCount, print)

        if(!res){
            console.error("Something went horribly wrong")
        }

        //console.log(res)

        let newCount = await halfPyramidSolver(res.rowcount, res.print)

        let finalCount  = halfPyramidSolver2(newCount)

        console.log(finalCount);
    } catch (error) {
        console.log("Oh No no no no no.", error)
    }

}

nicePyramidSolver(5, "#")

test("", ()=> {
    //Arrange

    //Act

    //Assert
})