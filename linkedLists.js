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
        prepend: function prepend(head, value) {
            let newHead = node(value);
            newHead.next = head;
            head = newHead;
            listMain = linkedList(newHead);
        }
    }
}


let listMain = linkedList(node1);

listMain.append(node1, 'test1');
listMain.append(node1, 'test2');
listMain.prepend(node1, 'prepended');

console.log(listMain.head.next.next);