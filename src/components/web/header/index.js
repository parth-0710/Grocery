import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import Mobileheader from '../header/mobile-header';
import { connect } from 'react-redux';
import { getCartNumbers } from '../../../actions/productActions';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    render() {
        const { width } = this.state;
        const isMobile = width <= 800;
        if (isMobile) {
            return (
                <div>
                    <Mobileheader />
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Link to="#"><img src="images/download.png" className="img-head" alt="download" /></Link> */}
                    <Grid container className="header_info">
                        <Grid item lg={1} xl={2}></Grid>
                        <Grid item md={12} lg={11} xl={10} className="header_fixed">
                            <Grid container>
                                <Grid item md={3} lg={2} xl={2}>
                                    <div className="logo">
                                        <h1><Link to="#"><b>T<br />H<br />E</b>Big Store<span>The Best Supermarket</span></Link></h1>
                                    </div>
                                </Grid>
                                <Grid item md={6} lg={7} xl={6}>
                                    <div className="search-form">
                                        <form action="#" method="post">
                                            <input type="text" name="search" placeholder="Search for Products..." />
                                            <button className="btn search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item md={3} lg={3} xl={4}>
                                    <Grid container className="bk_cart_sd">
                                        <Grid item md={6} lg={6} xl={6} className="btn_login">
                                        <Link to={"/login"}>
                                            <Button className="login" variant="outlined"><span>Login</span></Button>
                                        </Link>
                                        </Grid>
                                        <Grid item md={6} lg={6} xl={6} className="cart">
                                            <Link to="/carts">
                                                <Button className="cart_item" variant="outlined">
                                                    <span className="item_count">{this.props.cartProps.cart}</span>
                                                    <i className="fa fa-shopping-cart my-cart-icon" aria-hidden="true" /><span>Cart</span>
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className="header_info_2">
                        {/* nav bar  */}
                        <Grid item md={1} lg={1} xl={1} className="cart_nav_header"></Grid>
                        <Grid item  md={11} lg={11} xl={11} className="cart_nav_header">
                       
                           
                        </Grid>
                        {/* end nav bar  */}
                    </Grid>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { getCartNumbers })(Header);

