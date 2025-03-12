const diff = (obj1, obj2) => {
    const obj1Key = Object.keys(obj1);
    const obj1Value = Object.values(obj1);
    const obj2Key = Object.keys(obj2);
    const obj2Value = Object.values(obj2);
    let result = [];
    for (const key1 of obj1Key) {
        for (const key2 of obj2Key)
        if (key1 == key2) {result.push(key1);
        }
    }
    let resultString = '';

    for (const key1 of obj1Key){
    if (result.includes(key1) && obj1[key1] == obj2[key1]){resultString = `${resultString}\n   ${key1}: ${obj1[key1]} `;}
    else if (result.includes(key1) && obj1[key1] !== obj2[key1]){resultString = `${resultString}\n - ${key1}: ${obj1[key1]}\n + ${key1}: ${obj2[key1]} `;}
    else if (!result.includes(key1)){resultString = `${resultString}\n - ${key1}: ${obj1[key1]} `;}
}

for (const key2 of obj2Key){
    if (!result.includes(key2)){resultString = `${resultString}\n + ${key2}: ${obj2[key2]} `;}
}

const resultStringArray = resultString.split('\n');
return resultStringArray;
};
export default diff;


  


