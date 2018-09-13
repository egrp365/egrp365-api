egrp365-api
============
Client for API https://egrp365.ru. For more information go to the https://egrp365.ru/api.php

Usage
-----
```js
let Egrp365 = new (require('egrp365'))('{apiKey}')

// https://egrp365.ru/api.php#getDocs
Egrp365.getDocs().then(function (result) {
  console.log(result)
})

// https://egrp365.ru/api.php#getObjectsByKadnum
Egrp365.getObjectsByKadnum({kadnum: 'kadnum', reestr: 'reestr'}).then(function (result) {
  console.log(result)
})

// https://egrp365.ru/api.php#getObjectsByAddress
Egrp365.getObjectsByAddress({
  region: 'region',
  city: 'city',
  area: 'area',
  street: 'street',
  house: 'house',
  building: 'building',
  appartament: 'appartament',
  fiasid: 'fiasid',
  reestr: 'reestr',
}).then(function (result) {
  console.log(result)
})

// https://egrp365.ru/api.php#getInfoByObjectId
Egrp365.getInfoByObjectId({objectid: 'objectid'}).then(function (result) {
  console.log(result)
})

// https://egrp365.ru/api.php#postOrder
Egrp365.postOrder({
  kadnum: 'kadnum',
  objectid: 'objectid',
  order_docs: 'order_docs',
  email: 'email',
  phone: 'phone',
  address: 'address',
}).then(function (result) {
  console.log(result)
})

// https://egrp365.ru/api.php#getOrderStatus
Egrp365.getOrderStatus({orderid: 'orderid', email: 'email'}).then(function (result) {
  console.log(result)
})

```
