import Link from "next/link";
import GitHubIcon from "../../../../public/svg_icons/GitHubIcon";

const Footer = () => {
  return (
    <div className="bg-[#27252c] w-full h-auto flex items-center justify-center">
      <div className="flex w-auto py-10">
        <p className="text-[#e6e6e6] text-xl mr-1">&copy;</p>
        <p className="text-[#e6e6e6] text-xl italic">Miloš Milivojević</p>
      </div>
      <Link href={"https://github.com/Milos2824"} className="w-auto h-auto ml-10">
        <GitHubIcon color="#e6e6e6" className="w-8"/>
      </Link>
    </div>
  )
}

export default Footer;