# COBA COBA
## INI ADALAH CODEKU
<br>

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
```