class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

    insertRecur(word, root=this.root) {

        let letter = word[0];
        if(!root.children[letter]) {
            root.children[letter] = new Node();
        }

        if(word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter])
        }
    }


    insertIter(word) {
        let root = this.root;
        
        for(let letter of word) {
           if (!root.children[letter]) {
               root.children[letter] = new Node();
            }
            root = root.children[letter];
        }
        root.isTerminal = true;
    }

    searchRecur(word, root=this.root) {
        if(word.length === 0) return root.isTerminal;
        let letter = word[0];
        if(!root.children[letter]) return false;
        

        return this.searchRecur(word.slice(1), root.children[letter])
    }

    searchIter(word) {

        let root = this.root;

        for(let letter of word) {
            if(!root.children[letter]) return false;

            root = root.children[letter];
        }


        return root.isTerminal;
    }

    wordsWithPrefix(prefix='', root=this.root) {
        let result = [];
        let children = root.children
        for(let child in children) {
            if(prefix !== '' && prefix[0] !== child) continue;
            if (children[child].isTerminal && prefix.length < 2) result.push(child)

            let words = this.wordsWithPrefix(prefix.slice(1), children[child])
            result.push(...words.map(word => child+word))
        }

        return result;
    }
}

module.exports = {
    Node,
    Trie
};