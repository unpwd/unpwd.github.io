<h2 align="center">Unified Password</h2>

<div align="center">
  <img width="300" alt="Generate unique passwords for different platforms with just one common password" src="public/Logo.png">
</div>

## Security Concern

Some websites are so abominable that they actually store users' passwords in clear text, so if the database is attacked or compromised, your passwords and other information will be exposed!

## How to prevent it?

We can encrypt our password before registering for an account, enter the encrypted password into the registration list and then submit the registration application, which will solve the problem of the website storing your real password, and the next time you log in, you can use the encrypted password to log in.

Although this can prevent the leakage of plaintext passwords, if each site to do so, when one of the site data leakage, hackers can also apply the encrypted password to other sites to log in to steal your wealth on other sites!

So can we generate different encrypted passwords for each website? How to do it?

Suppose your password is `123456` and you need to register a website called `ABC`, then I can use `123456ABC` for encryption, and there is another `DEF` website use `123456DEF` for encryption, and so on we can have endless encrypted passwords, even if the data of `ABC` website is compromised. Even if the `ABC` site is compromised, all the hacker gets is an encrypted string, which doesn't work for `DEF`.

Of course, this is just a simple example, you should not do that when you really use it, it is better to add some other characters to modify, such as your birthday, initials, your favorite people, objects, landscapes, food, animal initials, pet's name and so on.

`UnPwd` is doing just that, encrypting it for you. `UnPwd` doesn't store your passwords, everything is done in your device, it doesn't connect to the Internet, and it doesn't send any requests to encrypt your passwords offline!

For example after encryption with `UnPwd`. 
- `ABC_Panda` => `9d75c6681599c9e425a8c746`
- `ABC_Hamburger` => `7e01288b2e8cfad74454be2d`
- `Panda_ABC` => `7f6da876fd1e6d998ab4dfc2`
- `Panda>ABC` => `6c0df4522d75fc6c9aaf92d0`
- `ABC.Panda` => `5f11445d77d5cda23879d74a`