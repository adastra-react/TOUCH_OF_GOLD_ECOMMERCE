import React from 'react';
import Header from '../components_new/Header';
import { Link } from 'react-router-dom';
import '../Styles/Contact.css';

function Contact({ totalItems }) {
    return (
        <div>
            <Header totalItems={totalItems} />
            <div>
                <div className="comp_rout_indicator" >
                        <p> <Link className="header_nav_link" to="/" >Home</Link> / Contact</p>
                </div>
                <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div className="textcenter">
              {/* <span className="shtext">Contact Us</span> */}
              <span className="seperator" />
              <h1>Drop Us a Mail</h1>
            </div>
          </section>
          <section className="section2 clearfix">
            <div className="col2 column1 first">
            <div className="mapouter"><div className="gmap_canvas"><iframe width={584} height={550} id="gmap_canvas" src="https://maps.google.com/maps?q=Glendevon%20Montego%20Bay&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://getasearch.com">getasearch.com</a><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:550px;width:584px;}" }} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:550px;width:584px;}" }} /></div></div>
            </div>
            <div className="col2 column2 last">
              <div className="sec2innercont">
                <div className="sec2addr">
                  <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
                  <p><span className="collig">Phone :</span> +91 976885083</p>
                  <p><span className="collig">Email :</span> vivek.mengu016@gmail.com</p>
                  <p><span className="collig">Fax :</span> +91 9768850839</p>
                </div>
              </div>
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                <form action>
                  <div className="clearfix">
                    <input className="col2 first" type="text" placeholder="FirstName" />
                    <input className="col2 last" type="text" placeholder="LastName" />
                  </div>
                  <div className="clearfix">
                    <input className="col2 first" type="Email" placeholder="Email" />
                    <input className="col2 last" type="text" placeholder="Contact Number" />
                  </div>
                  <div className="clearfix">
                    <textarea name="textarea" id cols={30} rows={7} defaultValue={"Your message here..."} />
                  </div>
                  <div className="clearfix"><input type="submit" defaultValue="Send" /></div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
            </div>
        </div>
    )
}

export default Contact
