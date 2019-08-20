# e-commerce

aplikasi e-commerce


<br><br><br>


# User

## Login
<hr>

Melakukan login ke aplikasi e-commerce

**Url** : `/user/login`

**Methode** : `POST`

**Auth Required** : No

**Request Body** :

```json
    {
        "email": "johndoe@mail.com",
        "password": "12345"
    }
```
**Success Status Code** : `200`

**Sucess respons** :
```json

```
<br>

## Logout
<hr>

Keluar dari aplikasi

**Url** : `/user/registrasi`

**Methode** : `POST`

**Auth Required** : No

**Request Body** :

```json
    {
        "username": "johndoe",
        "email": "johndoe@mail.com",
        "password": "12345"
    }
```
**Success Status Code** : `201`

**Sucess respons**

```json

```
<br>

## Register User
<hr>

Melakukan registrasi sebagai user ke aplikasi e-commerce

**Url** : `/user/registrasi`

**Methode** : `POST`

**Auth Required** : No

**Request Body** :

```json
    {
        "username": "johndoe",
        "email": "johndoe@mail.com",
        "password": "12345"
    }
```
**Success Status Code** : `201`

**Sucess respons** :

```json

```
<br>

## Register Admin
<hr>

Melakukan registrasi sebagai admin pada aplikasi e-commerce

**Url** : `/user/registrasi/admin`

**Methode** : `POST`

**Auth Required** : No

**Request Body** :

```json
    {
        "username": "",
        "email": "",
        "password": ""
    }
```
**Success Status Code** : `201`

**Sucess respons**

```json

```
<br>

## GetAll
<hr>

Mengambil semua data produk yang ada di database

**Url** : `/product`

**Methode** : `GET`

**Auth Required** : No

**Request Body** :

```json
    {
        "email": "",
        "password": ""
    }
```
**Success Status Code** : `200`

**Sucess respons**
```json
```
<br>

## GetOne
<hr>

Mengambil satu data terpilih yang ada di database

**Url** : `/product/:id`

**Methode** : `GET`

**Auth Required** : No

**Request Body** :

```json
    {
        "email": "",
        "password": ""
    }
```
**Success Status Code** : `200`

**Sucess respons**
```json
```
