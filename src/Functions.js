const randomizeField = (field, initialBombCount) => {
    const width = field.length
    const height = field[0].length
    let bombCount = initialBombCount
    
    while (bombCount !== 0) {
        const randomRow = Math.floor(Math.random() * height) // 14
        const randomColumn = Math.floor(Math.random() * width) // 12

        if (field[randomColumn][randomRow] !== -1) {
            field[randomColumn][randomRow] = -1
            bombCount --
        }
    }
}

const assignValues = (field) => {
    for (let i = 0; i < field.length; i++) {
        for (let t = 0; t < field[0].length; t++) {
            if (field[i][t] === -1) continue
            let value = 0

            if (i < field.length - 1) if (field[i + 1][t] === -1) value ++ // right
            if (t < field[0].length - 1) if (field[i][t + 1] === -1) value ++ // down

            if (i > 0) if (field[i - 1][t] === -1) value ++ // left
            if (t > 0) if (field[i][t - 1] === -1) value ++ // top

            if (i < field.length - 1 && t <  field[0].length - 1) if (field[i + 1][t + 1]) value ++ // bottom right
            if (i > 0 && t >  0) if (field[i - 1][t - 1] === -1) value ++ // top left

            if (i < field.length - 1 && t > 0) if (field[i + 1][t - 1] === -1) value ++ // top right
            if (i > 0 && t < field[0].length) if (field[i - 1][t + 1] === -1) value ++ // bottom left

            field[i][t] = value
        }
    }
}

const createBoard = (width, height) => {
    let output = []
    for (let i = 0; i < width; i++) {
        let row = []
        for (let j = 0; j < height; j++) {
            row.push(0)
        }

        output.push(row)
    }

    return output
}

const generateBoard = (width, height, bombCount) => {
    let field = createBoard(width, height)

    randomizeField(field, bombCount)
    assignValues(field)

    return field
}

const copyToBoolean = (field) => {
    let output = []
    for (let i = 0; i < field.length; i++) {
        let row = []
        for (let j = 0; j < field[0].length; j++) {
            row.push(false)
        }      

        output.push(row) 
    }

    return output
}

const getNeighbors = (field, row, col) => {
    let neighbors = []

    if (row < field.length - 1) neighbors.push([row + 1, col])  // right 
    if (col < field[0].length - 1) neighbors.push([row, col + 1]) // down

    if (row > 0) neighbors.push([row - 1, col]) // left
    if (col > 0) neighbors.push([row, col - 1]) // top

    if (row < field.length - 1 && col <  field[0].length - 1) neighbors.push([row + 1, col + 1]) // bottom right
    if (row > 0 && col >  0) neighbors.push([row - 1, col - 1]) // top left

    if (row < field.length - 1 && col > 0) neighbors.push([row + 1, col - 1]) // top right
    if (row > 0 && col < field[0].length) neighbors.push([row - 1, col + 1]) // bottom left


    return neighbors
}

const revealBombs = (playground, booleanBoard) => {
    let board = booleanBoard
    for (let i = 0; i < playground.length; i++) {
        for (let j = 0; j < playground[0].length; j++) {
            if (playground[i][j] === -1) board[i][j] = true
        }
    }

    return board
}

const increase = (value, func) => { 
    if (value + 1 < 30) func(value + 1)
}
const decrease = (value, func) => { 
    if (value - 1 > 8) func(value - 1)
}

export { generateBoard, copyToBoolean, getNeighbors, revealBombs, increase, decrease }