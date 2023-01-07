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
        },
        showHead: () => {
            console.log(head);
        },
        tail: function tail(head) {
            let current = head;
            if (current.next === null) console.log(`Tail: ${current.value}`);
            else {
                tail(current.next);
            }
        },
        atIndex: function atIndex(head, number) {
            let index = 0;
            let current = head;
            while (index !== number) {
                index += 1;
                current = current.next;
            }
            if (index === number) return current.value;
        },
        pop: function pop(head) {
            let current = head;
            while (current.next.next !== null) {
                current = current.next;
            }
            console.log(current.next);
            console.log(current.next.next);
            current.next = current.next.next;
            console.log(current.next);
        } 
    }
}


let listMain = linkedList(node1);

listMain.append(node1, 'test1');
listMain.append(node1, 'test2');
listMain.prepend(node1, 'prepended');

listMain.pop(listMain.head);

console.log(listMain.head.next.next);