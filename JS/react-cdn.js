const parent = document.getElementById('root');
const element = React.createElement('h1', {}, 'this is new heading');
const ele1 = React.createElement('h2', {}, 'shopping cart');
const item1 = React.createElement('li', {}, 'item 1');
const item2 = React.createElement('li', {}, 'item 2');
const list = React.createElement('ul', {}, item1, item2);
const para = <p>this is new paragraph</p>;

let li = [];
for(var i = 0 ; i < 5; i++){
    const elem = React.createElement('li', {}, `item ${i}`);
    li.push(elem);
}

const lst = React.createElement('ul', {className: 'lst'}, li);

const root = ReactDOM.createRoot(parent);
/*root.render(element);
root.render(ele1);*/            // render again a same variable will override previous one
                              // this can be resolve using an array
root.render([element, ele1, list, lst, para]); 