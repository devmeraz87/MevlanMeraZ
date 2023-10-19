import { BiRightArrowAlt } from "react-icons/bi";
import { ImAttachment } from "react-icons/im"

const FooterContactForm = () => {
    
 
    return (
        <>
            <form className="_footer_contact_form">
                <div className="_form_group">
                    <label htmlFor="name">What's your name?</label>
                    <input className="_form_control" type="text" id="name"  autoComplete="off"/>
                </div>
                <div className="_form_group">
                    <label htmlFor="email">Your fancy email</label>
                    <input className="_form_control" type="email" id="email"  autoComplete="off"/>
                </div>
                <div className="_form_group">
                    <div className="_input_file_and_submit_button_group">
                        <div className="_input_file_group">
                            <div className="_input_file_opener">
                                <span className="_about_project_attach_title">Tell me about your project</span>
                                <label className="_file_label" htmlFor="file">
                                    <span className="cursor-pointer"><ImAttachment /></span>
                                </label>
                            </div>
                            <input className="_form_control _file" type="file" id="file" />
                        </div>
                        <div className="_submit_button_group">
                            <button type="submit"data-cursor="-hoverable"><BiRightArrowAlt /></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default FooterContactForm;