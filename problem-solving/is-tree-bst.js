/*

Given a tree, check if tree is BST

*/

const isBst = (tree) => {
    if(!tree.root) return null;
    return isBstChild(tree.root, Infinity, -Infinity);
}

const isBstChild = (root, upper = Infinity, lower = -Infinity) => {
    if(!root) return true;
    if(root.data >= upper || root.data <= lower) {
        return false;
    }
    return isBstChild(root.left, root.data, lower) && isBstChild(root.right, upper, root.data);
}

let tree = {
    root: {
        data: 4,
        left: {
            data: 2,
            left: {
                data: 1
            },
            right: {
                data: 3
            }
        },
        right: {
            data: 6,
            left: {
                data: 5
            },
            right: {
                data: 7
            }
        }
    }
}
let tree2 = {
    root: {
        data: 4,
        left: {
            data: 2,
            left: {
                data: 1
            },
            right: {
                data: 3
            }
        },
        right: {
            data: 5,
            left: {
                data: 3
            },
            right: {
                data: 7
            }
        }
    }
}
console.log('valid', isBst(tree));
console.log('invalid', isBst(tree2));
console.log('null', isBst({}));