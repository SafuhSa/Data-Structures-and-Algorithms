class MaxHeap {
    constructor() {
        this.array = [null];
    }
    getParent(idx) {
        if (idx < 2) return null;
        return Math.floor(idx/2)
    }

    getLeftChild(idx) {
        if(idx < 1) return null;

        return (idx*2)
    }

    getRightChild(idx) {
        if(idx < 1) return null;

        return (idx*2 +1)
    }

    siftUp(idx) {
        if(idx === 1) return;
        
        let parentidx = this.getParent(idx);
        let parentval = this.array[parentidx];
        let val = this.array[idx];

        if (val > parentval) {
            this.array[parentidx] = val;
            this.array[idx] = parentval;
            this.siftUp(parentidx)
        }
        return;
    }

    insert(val) {
        this.array.push(val)
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if (idx === this.array.length - 1);

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];

        if (leftVal === undefined && rightVal === undefined) return;

        let swapIdx;
        if (leftVal < rightVal) {
            swapIdx = rightIdx;
        }else {
            swapIdx = leftIdx;
        }

        if(this.array[swapIdx] > this.array[idx]) {
            [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
            this.siftDown(swapIdx);
        }
        return;
    }

    deleteMax() {
        if(this.array.length === 1) return null;
        if(this.array.length === 2) return this.array.pop();
        let val = this.array[1];

        this.array[1] = this.array.pop();

        this.siftDown(1)

        return val;
    }
}


module.exports = {
    MaxHeap
};