const Stack = require("./Stack");

// 1. go through each character in the line
// 2. if we encounter a left parethenesis, push it to the stack
// 3. if we encounter a right parethenesis, pop from the stack
//    3.1 -- if popped item from the stack is a left parenthesis, then o
//    3.2 -- if popped item is a right parenthesis -- error
//    3.3 -- if stack's pop is null (no item on the stack) -- error
// 4. at the end of loop, if there are stuff in the stack -- error

function checkBrackets(line) {
    let s = new Stack();
    for (let char of line) {
        // if we encounter a left parenthesis, push it into the stack
        if (char == "(") {
            s.push(char);
        }
        if (char == ")") {
            let top = s.peek();
            // if top is null, then there was no left parenthesis yet to be matched
            if (top == null) {
                return false;
            } else {
                s.pop();
            }

        }
    }
    // at the end
    if (s.length() > 0) {
        return false;
    } else {
        return true;
    }
}

console.log("2+(2*2) => ", checkBrackets("2+(2*2)"));
console.log("2+(2*2)) => ", checkBrackets("2+(2*2))"));
console.log("2+((2*2) => ", checkBrackets("2+((2*2)"));