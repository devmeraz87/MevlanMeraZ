import { PiPenNib, PiMonitor } from "react-icons/pi"
import { IoCubeOutline } from "react-icons/io5"

const Team = () => {
    
 
    return (
        <>
            <section className="_section _team">
                <div className="_container">
                    <div className="_content">
                        <div className="_team_context">
                            <div className="_team_cards">
                                <div className="_team_card _team_card_active" data-cursor-text="Product">
                                    <div className="_card_icon _card_icon_cube">
                                        <IoCubeOutline />
                                    </div>
                                    <div className="_project_name_and_project_number">
                                        <div className="_project_name">
                                            <span>Product</span>
                                            <span>Designer.</span>
                                        </div>
                                        <div className="_project_number">
                                            124 Projects
                                        </div>
                                    </div>
                                </div>
                                <div className="_team_card" data-cursor-text="Branding">
                                    <div className="_card_icon _card_icon_pen">
                                        <PiPenNib />
                                    </div>
                                    <div className="_project_name_and_project_number">
                                        <div className="_project_name">
                                            <span>Branding</span>
                                            <span>Designer.</span>
                                        </div>
                                        <div className="_project_number">
                                            37 Projects
                                        </div>
                                    </div>
                                </div>
                                <div className="_team_card" data-cursor-text="Full Stack">
                                    <div className="_card_icon">
                                        <PiMonitor />
                                    </div>
                                    <div className="_project_name_and_project_number">
                                        <div className="_project_name">
                                            <span>Full Stack</span>
                                            <span>Developer.</span>
                                        </div>
                                        <div className="_project_number">
                                            62 Projects
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
 
export default Team;