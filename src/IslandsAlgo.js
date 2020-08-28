
class IslandsAlgo {
    // export  function
    findIslands(matrix) {
        let listIslans = [];

        let rows = matrix.length;
        let cols = matrix[0].length;
        let visitArr = new Array(rows);
        visitArr.fill(new Array(cols).fill(false));

        for (let i = 0; i < rows; i++)
            visitArr[i] = new Array(cols).fill(false);

        const checking = [
            { row: -1, col: 0 },
            { row: -1, col: 1 },
            { row: -1, col: -1 },
            // { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 0, col: -1 },
            { row: 1, col: -1 },
            { row: 1, col: 1 },
            { row: 1, col: 0 }]

        let num = -1;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (!visitArr[row][col] && matrix[row][col]) {
                    let currCol = col, currRow = row;
                    num = num + 1;
                    listIslans[num] = [];
                    listIslans[num].push({ col: currCol, row: currRow })
                    let poolIsland = [];
                    poolIsland.push({ col: currCol, row: currRow });
                    while (poolIsland.length) {
                        let item = poolIsland.pop();
                        for (let index in checking) {
                            currCol = item.col + checking[index].col;
                            currRow = item.row + checking[index].row;
                            while (currCol >= 0 && currCol < cols && currRow >= 0 && currRow < rows && visitArr[currRow][currCol] === false && matrix[currRow][currCol]) {
                                //we didn't visit yet
                                visitArr[currRow][currCol] = true;
                                listIslans[num].push({ col: currCol, row: currRow })
                                poolIsland.push({ col: currCol, row: currRow });
                            }
                        }
                    }
                }
                visitArr[row][col] = true;
            }
        }
        return (listIslans);
    }

    randomIslandMatrix(maxHeight, maxWidht) {
        let arr = new Array(maxHeight)
        let drawList = []
        for (let row = 0; row < maxHeight; row++) {
            arr[row] = new Array(maxWidht).fill(false);
            for (let col = 0; col < maxWidht; col++) {
                const random = Math.random();
                if (random < 0.1) {
                    arr[row][col] = (random < 0.1);
                    drawList.push({ col, row })
                }
            }
        }
        return ([arr, drawList])
    }
}

export default IslandsAlgo;
