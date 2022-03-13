import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as WishlistAction } from "../../../store/wishlist";
import { actions as CartAction } from "../../../store/cart";
import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from '../../common/ALink';
// import ProductCountdown from '../product-countdown';

function ProductOne ( props ) {
    const router = useRouter();
    const { adClass = "", link = "default", product } = props;


    // function isSale () {
    //     return product.price[ 0 ] !== product.price[ 1 ] && product.variants.length === 0 ?
    //         '-' + ( 100 * ( product.price[ 1 ] - product.price[ 0 ] ) / product.price[ 1 ] ).toFixed( 0 ) + '%'
    //         :
    //         product.variants.find( variant => variant.sale_price ) ? "Sale" : false;
    // }

    function isInWishlist () {
        return product && props.wishlist.findIndex( item => item.slug === product.slug ) > -1;
    }

    function onWishlistClick ( e ) {
        e.preventDefault();
        if ( !isInWishlist() ) {
            let target = e.currentTarget;
            target.classList.add( "load-more-overlay" );
            target.classList.add( "loading" );

            setTimeout( () => {
                target.classList.remove( 'load-more-overlay' );
                target.classList.remove( 'loading' );
                props.addToWishList( product );
            }, 1000 );
        } else {
            router.push( '/pages/wishlist' );
        }
    }

    function onAddCartClick ( e ) {
        e.preventDefault();
        props.addToCart( product );
    }

    function onQuickViewClick ( e ) {
        e.preventDefault();
        props.showQuickView( product.slug );
    }

    return (
        <div className={ `product-default media-with-lazy ${adClass}` }>
            <figure>
                <ALink href={ `/product/${link}/${product.slug}` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                </ALink>

                {/* <div className="label-group">
                    { product.is_hot ? <div className="product-label label-hot">HOT</div> : '' }

                    { isSale() ? <div className="product-label label-sale">{ isSale() }</div> : '' }
                </div> */}

                <div className="btn-icon-group">
                    {
                        product.variants.length > 0 ?
                            <ALink href={ `/product/default/${product.slug}` } className="btn-icon btn-add-cart"><i
                                className="fa fa-arrow-right"></i></ALink>
                            : <a href="#" className="btn-icon btn-add-cart product-type-simple" title="Add To Cart" onClick={ onAddCartClick }><i
                                className="icon-shopping-cart"></i></a>
                    }
                </div>

                <a href="#" className="btn-quickview" title="Quick View" onClick={ onQuickViewClick }>Quick View</a>
            </figure>

            <div className="product-details">
                <h3 className="product-title">
                    <ALink href={ `/product/default/${product.slug}` }>{ product.name }</ALink>
                </h3>

                <div className="price-box">
                    {
                        <span className="product-price">{ product.price[ 0 ] + ' BNB'  }</span>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { ...WishlistAction, ...CartAction, ...ModalAction } )( ProductOne );