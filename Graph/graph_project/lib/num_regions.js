function numRegions(graph) {
    let seen = new Set();
    let seeing = new Set();
    let counter = 0;

    for(let key in graph) {
        if(dfs(key)) {
            counter++;
        }
    }
    return counter;

    function dfs(num) {
        if(seen.has(num)) return false;
        // if(seeing.has(num)) return true;

        // seeing.add(num)
        seen.add(num);

        for(let v of graph[num]) {
            dfs(v)
        }

        // seeing.delete(num);
        // seen.add(num);
        return true;
    }
}

module.exports = {
    numRegions
};