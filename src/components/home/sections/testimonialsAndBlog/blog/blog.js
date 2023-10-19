import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi"

const HomeBlog = () => {
    
 
    return (
        <>
            <div className="_home_blog">
                <div className="_container">
                    <div className="_content">
                        <div className="_home_blog_context">
                            <div className="_home_blog_context_left">
                                <div className="_home_blog_sub_heading">
                                    <div className="_home_blog_sub_heading_line"></div>
                                    <span>Blog</span>
                                </div>
                                <h1 className="_home_blog_heading">
                                    <span>What's new?</span>
                                    <span>My blog and news.</span>
                                </h1>
                            </div>
                            <div className="_home_blog_context_right">
                                <ul className="_home_blog_lists">
                                    <li className="_home_blog_list_item">
                                        <Link href={"/"}>
                                            <span className="_blog_publish_date_and_name">
                                                <span className="_date">Feb 26</span>
                                                <span className="_dot"></span>
                                                <span>Blog</span>
                                            </span>
                                            <span className="_blog_title">Lets this be a lesson to you</span>
                                            <span className="_right_arrow">
                                                <BiRightArrowAlt />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="_home_blog_list_item">
                                        <Link href={"/"}>
                                            <span className="_blog_publish_date_and_name">
                                                <span className="_date">Feb 14</span>
                                                <span className="_dot"></span>
                                                <span>Blog</span>
                                            </span>
                                            <span className="_blog_title">How do you use time tracking for project?</span>
                                            <span className="_right_arrow">
                                                <BiRightArrowAlt />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="_home_blog_list_item">
                                        <Link href={"/"}>
                                            <span className="_blog_publish_date_and_name">
                                                <span className="_date">Feb 9</span>
                                                <span className="_dot"></span>
                                                <span>Blog</span>
                                            </span>
                                            <span className="_blog_title">Ego and emphaty in design</span>
                                            <span className="_right_arrow">
                                                <BiRightArrowAlt />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeBlog;