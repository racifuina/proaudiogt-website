import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/1.jpg'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className="couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <h3>Jessica Henry</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={coupleImg1} alt=""/>
                                    </div>
                                </div>
                                <div className="text-grid groom">
                                    <h3>Daniel Watson</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;