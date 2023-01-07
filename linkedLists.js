function linkedList () {
    return {
        node: class Node {
            constructor(value) {
                this.value = value;
                this.next = null;
            }
        }
    }
}

const list = linkedList();

console.log(new list.node(''));

