import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import FooterContactForm from "./footerContactForm/footerContactForm";

const FooterContact = () => {
    
 
    return (
        <>
            <div className="_footer_contact">
                <div className="_container">
                    <div className="_content">
                        <div className="_footer_contact_context">
                            <div className="_footer_contact_context_left">
                                <div className="_footer_contact_context_left_heading">
                                    <span>Got a project?</span>
                                    <span>Let's talk.</span>
                                </div>
                                <div className="_footer_contact_context_left_lead">
                                    <p>
                                        <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                        <span>voluptatem accusantium.</span>
                                    </p>
                                </div>
                                <Link className="_global_link_04MT _showcase_link" href={"/"} data-cursor="-hidden">
                                    <span className="__flex">
                                        <span>devmeraz87.com</span>
                                        <span>
                                            <div className="_arrow_right">
                                                <BiRightArrowAlt />
                                            </div>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                            <div className="_footer_contact_context_right">
                                <div className="_footer_contact_context_left_heading">
                                    <span>Estimate your project?</span>
                                    <span>Let me know here.</span>
                                </div>
                                
                                <FooterContactForm />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FooterContact;