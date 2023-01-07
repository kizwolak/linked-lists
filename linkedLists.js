function node(value) {
    return {
        value: value,
        next: null,
    }
}

const node1 = node('test');

function linkedList (head) {
    if (head === undefined) head = null;
    let size = 0;
    return {
        head,
        append: function append(value) {

        },
    }
}


const listMain = linkedList(node1);
console.log(listMain.head);
