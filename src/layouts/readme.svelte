<article>
  <h2>Security Concern</h2>

  <p>
    Some websites are so abominable that they actually store users' passwords in
    clear text, so if the database is attacked or compromised, your passwords
    and other information will be exposed!
  </p>

  <h2>How to prevent it?</h2>
  <p>
    We can encrypt our password before registering for an account, enter the
    encrypted password into the registration list and then submit the
    registration application, which will solve the problem of the website
    storing your real password, and the next time you log in, you can use the
    encrypted password to log in.
  </p>
  <p>
    Although this can prevent the leakage of plaintext passwords, if each site
    to do so, when one of the site data leakage, hackers can also apply the
    encrypted password to other sites to log in to steal your wealth on other
    sites!
  </p>
  <p>
    So can we generate different encrypted passwords for each website? How to do
    it?
  </p>
  <p>
    Suppose your password is <code>123456</code> and you need to register a
    website called <code>ABC</code>, then I can use <code>123456ABC</code> for
    encryption, and there is another <code>DEF</code> website use
    <code>123456DEF</code>
    for encryption, and so on we can have endless encrypted passwords, even if the
    data of <code>ABC</code> website is compromised. Even if the
    <code>ABC</code>
    site is compromised, all the hacker gets is an encrypted string, which doesn't
    work for <code>DEF</code>.
  </p>
  <p>
    Of course, this is just a simple example, you should not do that when you
    really use it, it is better to add some other characters to modify, such as
    your birthday, initials, your favorite people, objects, landscapes, food,
    animal initials, pet's name and so on.
  </p>
  <p>
    <code>UnPwd</code> is doing just that, encrypting it for you.
    <code>UnPwd</code> doesn't store your passwords, everything is done in your device,
    it doesn't connect to the Internet, and it doesn't send any requests to encrypt
    your passwords offline!
  </p>
  <p>For example after encryption with <code>UnPwd</code>.</p>
  <ul>
    <li><code>ABC_Panda</code> =&gt; <code>9d75c6681599c9e425a8c746</code></li>
    <li>
      <code>ABC_Hamburger</code> =&gt; <code>7e01288b2e8cfad74454be2d</code>
    </li>
    <li><code>Panda_ABC</code> =&gt; <code>7f6da876fd1e6d998ab4dfc2</code></li>
    <li>
      <code>Panda&gt;ABC</code> =&gt; <code>6c0df4522d75fc6c9aaf92d0</code>
    </li>
    <li><code>ABC.Panda</code> =&gt; <code>5f11445d77d5cda23879d74a</code></li>
  </ul>
</article>

<style>
  article {
    margin-top: 40px;
    word-break: break-word;
    line-height: 1.75;
    font-weight: 400;
    font-size: 16px;
    overflow-x: hidden;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid #d8dee4;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    line-height: inherit;
    margin-top: 0;
    margin-bottom: 16px;
  }

  ul {
    padding-left: 28px;
  }

  li {
    margin-bottom: 0;
    list-style: inherit;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
  }
</style>
