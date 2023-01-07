function node(value) {
    return {
        value: value,
        next: null,
    }
}

const node1 = node('test');

function linkedList (head) {
    if (head === undefined) head = null;
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
        },
        size: function size(head) {
            let current = head;
            let counter = 0;
            while (current !== null) {
                counter += 1;
                current = current.next;
            }
            console.log(counter);
            return counter;
        }
    }
}


let listMain = linkedList(node1);

listMain.append(node1, 'test1');
listMain.append(node1, 'test2');
listMain.prepend(node1, 'prepended');

listMain.size(listMain.head);