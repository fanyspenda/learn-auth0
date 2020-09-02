# Catatan Belajar Auth0

## 1. **Auth0** Itu Apa?

Sebuah service yang membuat otomatis autentikasi.

## 2. Kenapa harus pake` **Auth0**?

-   Untuk mempercepat pengembangan Aplikasi (**Frontend** tidak perlu buat login page sendiri, **backend** tidak perlu buat `logic` untuk autentikasi).

## 3. Cara Konfigurasi **Auth0** di FrontEnd (_Create-React-App_)

### 3.1. Login

-   Bungkus komponen dengan `<Auth0Provider>`, isi props `domain`, `clientId`, dan `RedirectUri`.
-   panggil fungsi `loginWithRedirect()` (dari _hooks_ `useAuth0`) ketika tombol Login diklik.

### 3.2. Logout

-   Bungkus komponen dengan `<Auth0Provider>`, isi props `domain`, `clientId`, dan `RedirectUri`.
-   panggil fungsi `loginWithRedirect()` (dari _hooks_ `useAuth0`) ketika tombol Login diklik.

> **Note:**
>
> -   `isAuthenticated` memiliki nilai default `false`.
