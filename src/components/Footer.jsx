function Footer() {
  return (
    <section className="w-full max-w-full m-0 py-10 box-border bg-[#505050] mt-[5%]">
      <div className="text-center pb-[25px] text-black">
        <a
          href="#"
          className="text-[24px] border border-black w-[40px] h-[40px] leading-[38px] inline-block text-center rounded-full mx-2 opacity-75 hover:opacity-100"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          className="text-[24px] border border-black w-[40px] h-[40px] leading-[38px] inline-block text-center rounded-full mx-2 opacity-75 hover:opacity-100"
        >
          <i className="fab fa-snapchat"></i>
        </a>
        <a
          href="#"
          className="text-[24px] border border-black w-[40px] h-[40px] leading-[38px] inline-block text-center rounded-full mx-2 opacity-75 hover:opacity-100"
        >
          <i className="fab fa-x"></i>
        </a>
        <a
          href="#"
          className="text-[24px] border border-black w-[40px] h-[40px] leading-[38px] inline-block text-center rounded-full mx-2 opacity-75 hover:opacity-100"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <ul className="mt-0 p-0 list-none text-[18px] leading-[1.6] mb-0 text-center text-white">
        <li className="inline-block px-[15px]">
          <a
            href="/"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            Hem
          </a>
        </li>
        <li className="inline-block px-[15px]">
          <a
            href="/om"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            Om oss
          </a>
        </li>
        <li className="inline-block px-[15px]">
          <a
            href="/tjanster"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            Tjänster
          </a>
        </li>
        <li className="inline-block px-[15px]">
          <a
            href="/projekt"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            Våra projekt
          </a>
        </li>
        <li className="inline-block px-[15px]">
          <a
            href="/rot"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            ROT-Avdrag
          </a>
        </li>
        <li className="inline-block px-[15px]">
          <a
            href="/kontakt"
            className="no-underline opacity-80 hover:opacity-100 hover:text-blue-500"
          >
            Kontakta oss
          </a>
        </li>
      </ul>
      <p className="mt-[15px] text-center text-[13px] text-[#aaa]">
        Max Hedström © 2025
      </p>
    </section>
  );
}

export default Footer;
