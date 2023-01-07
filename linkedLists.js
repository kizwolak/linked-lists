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
        append: function append(head, value) {
            let current = head;
            if (current.next === null) current.next = node(value);
            else {
                append(current.next, value);
            }
        },
    }
}


const listMain = linkedList(node1);

listMain.append(node1, 'test1');
listMain.append(node1, 'test2');


console.log(listMain.head.next);
console.log(listMain.head);
