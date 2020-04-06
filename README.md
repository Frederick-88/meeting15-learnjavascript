# HELLO, THIS IS HOW YOU MAKE CONTACTS WITH JAVASCRIPT
## THIS IS THE CODE FOR HTML FILE
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- <script src="script.js"></script> -->
    <script src="project.js"></script>
</body>
</html>
```
## AND THIS IS THE CODE FOR JAVASCRIPT FILE
```javascript
const listContact = [{
        id: 1,
        name: 'Frederick',
        phone: '0858-3599-8805',
        email: 'frederickfd88@gmail.com'
    },
    {
        id: 2,
        name: 'Bill',
        phone: '0858-3599-8805',
        email: 'frederickfd88@gmail.com'
    },
    {
        id: 3,
        name: 'Kevin',
        phone: '0858-3599-8805',
        email: 'frederickfd88@gmail.com'
    },
    {
        id: 4,
        name: 'Meliodas',
        phone: '0858-3599-8805',
        email: 'frederickfd88@gmail.com'
    },
    {
        id: 5,
        name: 'Bagas',
        phone: '0858-3599-8805',
        email: 'frederickfd88@gmail.com'
    }
]
// console.log(listContact);


const modifyData = listContact.map((data, index, array) => {
    return {
        id: index + 1,
        name: data.name,
        phone: data.phone,
        email: data.email,
        asal: 'Batam'
    }
});

// FUNCTION TAMPILIN DATA
console.log(modifyData);


// FUNCTION TAMBAH DATA
const tambahanData = {
    id: 6,
    name: "Evan",
    phone: "0823-8888-8888",
    email: "bebasevan@gmail.com",
    asal: 'Tanjung Pinang'
}
modifyData.push(tambahanData)
console.log(modifyData);

// FUNGSI INPUT UNTUK TAMBAH DATA


// FUNCTION KURANGI DATA

// modifyData.pop()
// console.log(modifyData);

// FILTER CONTACT
const filter = modifyData.filter((data,index,array) => {
    if (data.asal == "Tanjung Pinang")
        return true;
    return false;
});
console.log(filter);

// CARA NAMPILIN SEMUA CONTACT SECARA FULL
const showContacts = (nampilin) => {
    for(let index=0; index < nampilin.length; index++){
        const nampilinFix = nampilin[index];
        console.log(`No ID:${nampilinFix.id} Nama:${nampilinFix.name} No Telp:${nampilinFix.phone} Email:${nampilinFix.email} Asal:${nampilinFix.asal}`);
    }
}
showContacts(modifyData)
// MODIFYDATA INI AKAN MEREPLACE NAMPILIN
```

## HAVE FUN AND ENJOY.