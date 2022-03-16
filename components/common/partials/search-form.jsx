import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useLazyQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../ALink';

// Import Apollo Server and Query
import { GET_PRODUCTS } from '../../../server/queries';
import withApollo from '../../../server/apollo';

function SearchForm ( props ) {
    const router = useRouter();
    const [ cat, setCat ] = useState( "" );
    const [ search, setSearch ] = useState( "" );
    const [ searchProducts, { data } ] = useLazyQuery( GET_PRODUCTS );
    const [ timer, setTimer ] = useState( null );

    useEffect( () => {
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return ( () => {
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        } )
    }, [] )

    useEffect( () => {
        setSearch( "" );
        setCat( "" );
    }, [ router.query.slug ] )

    useEffect( () => {
        if ( search.length > 2 ) {
            if ( timer ) clearTimeout( timer );
            let timerId = setTimeout( () => {
                searchProducts( { variables: { search: search, category: cat } } );
                setTimer( null );
            }, 500 );

            setTimer( timerId );
        }
    }, [ search, cat ] )

    useEffect( () => {
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }, [ router.pathname ] )

    function removeXSSAttacks ( html ) {
        const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        // Removing the <script> tags
        while ( SCRIPT_REGEX.test( html ) ) {
            html = html.replace( SCRIPT_REGEX, "" );
        }

        // Removing all events from tags...
        html = html.replace( / on\w+="[^"]*"/g, "" );

        return {
            __html: html
        }
    }

    function matchEmphasize ( name ) {
        let regExp = new RegExp( search, "i" );
        return name.replace(
            regExp,
            ( match ) => "<strong>" + match + "</strong>"
        );
    }

    // function onSearchClick ( e ) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.currentTarget.parentNode.classList.toggle( 'show' );
    // }

    function onBodyClick ( e ) {
        if ( e.target.closest( '.header-search' ) ) return e.target.closest( '.header-search' ).classList.contains( 'show-results' ) || e.target.closest( '.header-search' ).classList.add( 'show-results' );

        document.querySelector( '.header-search.show' ) && document.querySelector( '.header-search.show' ).classList.remove( 'show' );
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }

    function onCatSelect ( e ) {
        setCat( e.target.value );
    }

    function onSearchChange ( e ) {
        setSearch( e.target.value );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: search,
                category: cat
            }
        } );
    }

    return (
        <div className={ `header-icon header-search header-search-popup header-search-category d-none d-sm-block mb-0 ${props.adClass}` }>
            {/* <a href="#" className="search-toggle" role="button" onClick={ onSearchClick }><i className="icon-magnifier"></i></a> */}
            <form action="#" method="get" onSubmit={ ( e ) => onSubmitSearchForm( e ) }>
                <div className="header-search-wrapper">
                    <input type="search" className="form-control" name="q" id={ `${props.type === 1 ? 'q' : 'qqq'}` } placeholder="I'm searching for..." value={ search }
                        required onChange={ ( e ) => onSearchChange( e ) } />
                    <button className="btn icon-search-3" type="submit"></button>

                    <div className="live-search-list bg-white">
                        { search.length > 2 && data && data.products.data.map( ( product, index ) => (
                            <ALink href={ `/product/default/${product.slug}` } className="autocomplete-suggestion" key={ `search-result-${index}` }>
                                <LazyLoadImage src={ process.env.NEXT_PUBLIC_ASSET_URI + product.small_pictures[ 0 ].url } width={ 40 } height={ 40 } alt="product" />
                                <div className="search-name" dangerouslySetInnerHTML={ removeXSSAttacks( matchEmphasize( product.name ) ) }></div>
                                <span className="search-price">
                                    {
                                        product.price[ 0 ] == product.price[ 1 ] ?
                                            <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                            : product.variants.length > 0 ?
                                                <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) } &ndash; { '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                                : <>
                                                    <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                                    <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                                </>
                                    }
                                </span>
                            </ALink>
                        ) )
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}

export default withApollo( { ssr: typeof window === 'undefined' } )( SearchForm );