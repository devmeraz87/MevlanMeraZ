import Link from "next/link";
import { AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
    
 
    return (
        <>
            <footer className="_footer">
                <div className="_container">
                    <div className="_content">
                        <div className="_footer_context">
                            <div className="_footer_logo">
                                <img src="/logo.svg" alt="" />
                            </div>
                            <div className="_footer_thanks">
                                <span className="_footer_thanks_thik">Thanks for scrolling, </span>
                                <span>that's all folks.</span>
                            </div>
                            <div className="_footer_social">
                                <Link href={"/"} data-cursor="-hoverable">
                                    <AiOutlineDribbble />
                                </Link>
                                <Link href={"/"} data-cursor="-hoverable">
                                    <AiOutlineInstagram />
                                </Link>
                                <Link href={"/"} data-cursor="-hoverable">
                                    <BiLogoLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;