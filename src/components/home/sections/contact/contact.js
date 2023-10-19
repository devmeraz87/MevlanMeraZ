import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const Contact = () => {
    
 
    return (
        <>
            <section className="_section _contact">
                <div className="_container">
                    <div className="_content">
                        <div className="_contact_context">
                            <div className="_contact_context_content">
                                <div className="_contact_context_content_left">
                                    <div className="_contact_left_sub_heading">
                                        <span className="_sub_heading_line"></span>
                                        <span>Contact</span>
                                    </div>
                                    <h1 className="_contact_left_heading">
                                        <span>Any Type Of Query</span>
                                        <span>& Discussion.</span>
                                    </h1>
                                    <div className="_contact_left_lead">
                                        <p>
                                            <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                            <span>voluptatem accusantium.</span>
                                        </p>
                                    </div>
                                    <Link className="_global_link_04MT _contact_link" href={"/"} data-cursor="-hidden">
                                        <span className="__flex">
                                            <span>devmeraz.com</span>
                                            <span>
                                                <div className="_arrow_right">
                                                    <BiRightArrowAlt />
                                                </div>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="_contact_context_content_right">
                                    <h1 className="_contact_right_heading">
                                        <span>You can't use up creativity,</span>
                                        <span>the more you use, more you have</span>
                                        <span>in your signifant mind.</span>
                                    </h1>
                                    <div className="_contact_right_lead">
                                        <p>
                                            <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                            <span>voluptatem accusantium doloremque laudantium,</span>
                                            <span>totam rem aperiam, eaque ipsa.</span>
                                        </p>
                                    </div>
                                    <div className="_experiance_year_and_clients">
                                        <div className="_ex_and_clie _experiance_year">
                                            <div className="_number">14</div>
                                            <div className="_text">
                                                <span>Years of</span>
                                                <span>Experience.</span>
                                            </div>
                                        </div>
                                        <div className="_ex_and_clie _clients">
                                            <div className="_number">187</div>
                                            <div className="_text">
                                                <span>Satisfied</span>
                                                <span>Clients.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Contact;