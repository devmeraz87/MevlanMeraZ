import Link from "next/link";
import { AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin, BiRightArrowAlt } from "react-icons/bi"
// import { BiDownArrowAlt } from "react-icons/bs"

const Showcase = () => {
    
 
    return (
        <>
            <div className="_showcase _home" data-cursor-text="Tanji<3">
                <div className="_container">
                    <div className="_content">
                        <div className="_home_showcase_context">
                            <div className="_showcase_context_content">
                                <div className="_home_showcase_context_left">
                                    <div className="_my_name">
                                        <span className="_name_top">Mevlan</span>
                                        <span className="_name_bottom">{"MeraZ."}</span>
                                    </div>
                                    <div className="_social">
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
                                <div className="_home_showcase_context_right">
                                    <div className="_sub_heading">
                                        <div className="_sub_heading_line"></div>
                                        <span>Introduction</span>
                                    </div>
                                    <h1 className="_showcase_heading">
                                        <span>Website Designer and</span>
                                        <span>Developer, based in </span>
                                        <span>Bangladesh.</span>
                                    </h1>
                                    <div className="_showcase_lead">
                                        <p>
                                            <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                            <span>voluptatem accusantium doloremque laudantium,</span>
                                            <span>totam rem aperiam, eaque ipsa.</span>
                                        </p>
                                    </div>
                                    <Link className="_global_link_04MT _showcase_link" href={"/"} data-cursor="-hidden">
                                       <span className="__flex">
                                            <span>My story</span>
                                            <span>
                                                <div className="_arrow_right">
                                                    <BiRightArrowAlt />
                                                </div>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Showcase;