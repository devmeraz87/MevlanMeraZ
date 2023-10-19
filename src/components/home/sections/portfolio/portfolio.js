import Link from "next/link";
import {  BiRightArrowAlt } from "react-icons/bi"


const Portfolio = () => {
    
 
    return (
        <>
           <section className="_portfolio" data-cursor-text="Portfolio">
                <div className="_container">
                    <div className="_content">
                        <div className="_portfolio_cintext">
                            <div className="_portfolio_context_row">
                                <div className="_portfolio_context_col">
                                    <div className="_portfolio_context_col_row _portfolio_context_header">
                                        <div className="_sub_heading">
                                            <div className="_sub_heading_line"></div>
                                            <span>Portfolio</span>
                                        </div>
                                        <div className="_portfolio_heading">
                                            <span>All Creative Work,</span>
                                            <span>Selected project.</span>
                                        </div>
                                        <div className="_portfolio_lead">
                                            <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                            <span>voluptatem accusantium.</span>
                                        </div>
                                        <Link href={"/"} className="_global_link_04MT">
                                            <span className="__flex">
                                                <span>Explore more</span>
                                                <span className="_arrow_right">
                                                    <BiRightArrowAlt />
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="_portfolio_context_col_row">
                                        <Link href={"/"} data-cursor-img="/images/web-showcase/seone.png" data-cursor-text="Seone">
                                            <div className="_portfolio_image">
                                                <img src="/images/web-showcase/seone.png" alt="Seone" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="_portfolio_context_col">
                                    <div className="_portfolio_context_col_row">
                                        <Link href={"/"} data-cursor-img="/images/web-showcase/beserver.png" data-cursor-text="BeServer">
                                            <div className="_portfolio_image">
                                                <img src="/images/web-showcase/beserver.png" alt="BeServer" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="_portfolio_context_col_row">
                                        <Link href={"/"} data-cursor-img="/images/web-showcase/energetic.png" data-cursor-text="Energetic">
                                            <div className="_portfolio_image">
                                                <img src="/images/web-showcase/energetic.png" alt="Energetic" />
                                            </div>
                                        </Link>
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
 
export default Portfolio;