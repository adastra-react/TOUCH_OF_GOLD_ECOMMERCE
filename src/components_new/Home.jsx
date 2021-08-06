// import { Swiper, SwiperSlide } from 'swiper/react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import Header from './Header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HeroSlider from './HeroSliderOne';
// import Footer from './FooterFeet';
import supportImg_1 from '../assets/img/support-1.png';
import supportImg_2 from '../assets/img/support-2.png';
import supportImg_3 from '../assets/img/support-3.png';
import supportImg_4 from '../assets/img/support-4.png';
import diamond_1 from '../assets/img/diamond_1.png';
import diamond_2 from '../assets/img/diamon_2.png';
import diamond_3 from '../assets/img/diamond_3.png';
import Girl_Two from '../assets/img/girl-2.png';
import ProductGridListSingle from './ProductGridListSingle';// requires a loader
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import 'swiper/swiper.scss';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

function Home({ products, handleAddToCart, totalItems }) {

    const classes = useStyles();

    // if (!products.length) return <p>Loading...</p>;
    console.log(products)

    return (
        <div className="home">
            <Header totalItems={totalItems} />
            <div className="home_container">
                <div className="home_slider">
                    <div className="home_text_cont">
                        
                        <h1>
                            SUMMER OFFER
                            <p></p>
                            2021 COLLECTION
                        </h1>
                    </div>
                    <div className="home_img_cont">
                        <img src={Girl_Two} alt="" />
                    </div>
                </div>
                <br />
                <div className="about_container">
                    <div className="about_text_cont">
                        <p className="about_header_text" >Who Are We</p>
                        <br />
                        <h3>Welcome to Touch Of Gold</h3>
                        <br />
                        <p className="about_para_text">We aim to carry nothing less than the best quality of the top brands to our valued customers. In doing so, we will remain as one the most respected duty free jewelry store in Jamaica.</p>
                        <br />
                    </div>
                    <div className="about_card_cont">
                        {/* <div className="about_"> */}
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={diamond_3}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Vision
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                We strive to provide phenomenal customer service, great value, and support to our customers. Always and forever.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions> */}
                            </Card>

                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={diamond_1}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Mission
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                We have committed ourselves to make each and every customer feel at home and feel like family. We promise that each and every visit will surely be a memorable one.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions> */}
                            </Card>
                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={diamond_2}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Our Goal
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions> */}
                            </Card>
                            
                        {/* </div> */}
                    </div>
                </div>
                <div className="jumbotron">
                    <div className="jumbo_items_cont">
                        {/* <div className="img_cont"> */}
                            <img className="jumbo_img" src={supportImg_1} alt="" />
                        {/* </div> */}
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Free Shipping
                            </p>
                            <p className="jumbo_para jumbo_para_second">Shipping through DHL</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_2} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">Support 24/7</p>
                            <p className="jumbo_para jumbo_para_second">100% after sales customer support</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_3} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Money Return
                            </p>
                            <p className="jumbo_para jumbo_para_second">refund on defective merchendise</p>
                         </div>
                    </div>
                    <div className="jumbo_items_cont">
                         <img className="jumbo_img" src={supportImg_4} alt="" />
                         <div className="jumbo_items">
                            <p className="jumbo_para">
                                Order Discount
                            </p>
                            <p className="jumbo_para jumbo_para_second">Discounts available at checkout</p>
                         </div>
                    </div>
                </div>
                <div className="daily_deals_cont">
                    <div className="daily_deals_head_cont">
                    <div className="comp_rout_indicator" >
                        <p>Go to the shop page for all products</p>
                    </div>
                        <div className="grid_list">
                            {products.map((product) => {
                                return(
                                    <ProductGridListSingle
                                        product={product}
                                        handleAddToCart={handleAddToCart}
                                        key={product.id}
                                    />
                                )
                            })}
                            </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Home
