function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "Nat-Rodriguez GitHub",
      link: "https://github.com/Nat-Rodriguez"
    },
    {
      name: "Find Me On LinkedIn!",
      link: "www.linkedin.com/in/natalie-rodriguez-16913620a"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
