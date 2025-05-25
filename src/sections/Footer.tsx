import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const Footer = () => {
  const footerLinks = [
    {
      title: "Youtube",
      href: "https://www.youtube.com/@umairfaruk",
    },
    {
      title: "Github",
      href: "https://github.com/umairfaruk",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/itx__u_m_a_i_r/",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/umair-farooq-aa7755203/",
    },
  ];
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
      <div className="container">
        <div className="border-t  border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights Recived</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((item) => (
              <a href={item.href} target="_blank" className="inline-flex gap-1.5 cursor-pointer">
                <span className="font-semibold">{item.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
