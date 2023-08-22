//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let map = {};
let arr2 = [];
for(let i in arr){
    let result = arr[i].replace(/\ba *\b|\ban *\b|\bthe *\b/gi,"");
    map[result] = arr[i];
    arr2.push(result);
}

arr2.sort();

for(let i=0;i<arr2.length;i++){
    arr2[i] = map[arr2[i]];
}

const bandList = document.getElementById('band');

arr2.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
});

