function extractEmails(text) {
  const pattern = /(?<=\s|^)[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z]+(-[A-Za-z]+)*(\.[A-Za-z]+(-[A-Za-z]+)*)+/g;

  const matches = text.match(pattern);

  if (matches) {
    matches.forEach(email => console.log(email));
  }
}


extractEmails(`
Here are some emails: info@softuni-bulgaria.org, 
no-reply@github.com, s.peterson@mail.uu.net, 
--123@gmail.com, .info@info.info, _steve@yahoo.cn
`);
