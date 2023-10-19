import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from 'swiper/modules';

import { BiSolidQuoteAltLeft } from "react-icons/bi"


import "swiper/css"
// import "swiper/css/pagination"


const TestimonialSlider = () => {

 
    return (
        <>
            <div className="_testimonial_slider_container">
                <Swiper
                    spaceBetween={30} 
                    pagination={{
                        el: "._testimonial_pagination_button_container", 
                        clickable: true,
                    }} 
                    modules={[Pagination]}
                    className={"_testimonial_slider"}
                >


                    <SwiperSlide>
                        <div className="_testimonial_slide">
                            <div className="_testimonial_slide_img">
                                <img src="/images/testimonial/testimonial.png" alt="Jared" data-cursor-text="Jared Warner" />
                            </div>
                            <div className="_testimonial_context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="_testimonial_text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="_testimonial_name_and_designation">
                                    <div className="_name">Jared Warner</div>
                                    <div className="_designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="_testimonial_slide">
                            <div className="_testimonial_slide_img">
                                <img src="/images/testimonial/testimonial.png" alt="" />
                            </div>
                            <div className="_testimonial_context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="_testimonial_text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="_testimonial_name_and_designation">
                                    <div className="_name">Jared Warner</div>
                                    <div className="_designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="_testimonial_slide">
                            <div className="_testimonial_slide_img">
                                <img src="/images/testimonial/testimonial.png" alt="" />
                            </div>
                            <div className="_testimonial_context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="_testimonial_text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="_testimonial_name_and_designation">
                                    <div className="_name">Jared Warner</div>
                                    <div className="_designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <div className="_testimonial_slide">
                            <div className="_testimonial_slide_img">
                                <img src="/images/testimonial/testimonial.png" alt="" />
                            </div>
                            <div className="_testimonial_context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="_testimonial_text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="_testimonial_name_and_designation">
                                    <div className="_name">Jared Warner</div>
                                    <div className="_designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>




                </Swiper>

                <div className="_testimonial_pagination_button_container"></div>
            </div>
        </>
    );
}
 
export default TestimonialSlider;