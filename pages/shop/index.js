import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useLazyQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';

import ALink from '../../components/common/ALink';
import SearchForm from "../../components/common/partials/search-form";
import Pagination from '../../components/features/pagination';
import ProductsGrid from '../../components/partials/products-collection/product-grid';

import { GET_PRODUCTS } from '../../server/queries';
import withApollo from '../../server/apollo';

function Shop () {
    const router = useRouter();
    const query = router.query;
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [ perPage, setPerPage ] = useState( 12 );
    const [ sortBy, setSortBy ] = useState( query.sortBy ? query.sortBy : 'default' );
    const products = data && data.products.data;
    const totalPage = data ? parseInt( data.products.total / perPage ) + ( data.products.total % perPage ? 1 : 0 ) : 1;

    useEffect( () => {
        let offset = document.querySelector( '.main-content' ).getBoundingClientRect().top + window.pageYOffset - 58;
        setTimeout( () => {
            window.scrollTo( { top: offset, behavior: 'smooth' } );
        }, 200 );

        let page = query.page ? query.page : 1;

        getProducts( {
            variables: {
                search: query.search,
                colors: query.colors ? query.colors.split( ',' ) : [],
                sizes: query.sizes ? query.sizes.split( ',' ) : [],
                min_price: parseInt( query.min_price ),
                max_price: parseInt( query.max_price ),
                category: query.category,
                tag: query.tag,
                sortBy: sortBy,
                from: perPage * ( page - 1 ),
                to: perPage * page
            }
        } );
    }, [ query, perPage, sortBy ] )

    function onPerPageChange ( e ) {
        setPerPage( e.target.value );
        router.push( {
            pathname: router.pathname,
            query: {
                ...query,
                page: 1
            }
        } );
    }

    function onSortByChange ( e ) {
        router.push( {
            pathname: router.pathname,
            query: {
                ...query,
                sortBy: e.target.value,
                page: 1
            }
        } )
        setSortBy( e.target.value );
    }

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <main className="main">
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        {
                            query.category ?
                                <>
                                    <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>games</ALink></li>
                                    {
                                        data && data.products.categoryFamily.map( ( item, index ) => (
                                            <li className="breadcrumb-item" key={ `category-family-${index}` }><ALink href={ { query: { category: item.slug } } } scroll={ false }>{ item.name }</ALink></li>
                                        ) )
                                    }
                                    <li className="breadcrumb-item active">
                                        {
                                            query.search ?
                                                <>
                                                    Search - <ALink href={ { query: { category: query.category } } } scroll={ false }>{ query.category }</ALink> / { query.search }
                                                </>
                                                : query.category
                                        }
                                    </li>
                                </>
                                : query.search ?
                                    <>
                                        <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>games</ALink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{ `Search - ${query.search}` }</li>
                                    </>
                                    : query.tag ?
                                        <>
                                            <li className="breadcrumb-item"><ALink href={ { query: {} } } scroll={ false }>games</ALink></li>
                                            <li className="breadcrumb-item active" aria-current="page">{ `Product Tag - ${query.tag}` }</li>
                                        </>
                                        : <li className="breadcrumb-item active" aria-current="page">Games</li>
                        }
                    </ol>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 main-content">
                        <nav className="toolbox sticky-header mobile-sticky" >

                            <div className="toolbox-right">
                                <div className="toolbox-item toolbox-show">
                                    <SearchForm />
                                </div>
                            </div>

                            <div className="toolbox-left">
                                <div className="toolbox-item">
                                    <div className="select-custom">
                                        <select name="category" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                            <option value="default">Category</option>
                                            <option value="popularity">Art</option>
                                            <option value="rating">Photography</option>
                                            <option value="date">Games</option>
                                            <option value="price">Animation</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="toolbox-item">
                                    <div className="select-custom">
                                        <select name="collections" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                            <option value="default">Collections</option>
                                            <option value="popularity">NFSH2Artboard</option>
                                            <option value="rating">NFSH2Artboard</option>
                                            <option value="date">NFSH2Artboard</option>
                                            <option value="price">NFSH2Artboard</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="toolbox-item">
                                    <div className="select-custom">
                                        <select name="collections" className="form-control">
                                            <option value="default">All</option>
                                            <option value="possible">possible</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="toolbox-item">
                                    <div className="select-custom">
                                        <select name="orderby" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                            <option value="default">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="toolbox-item toolbox-show">
                                    <label>Show:</label>

                                    <div className="select-custom">
                                        <select name="count" className="form-control" value={ perPage } onChange={ ( e ) => onPerPageChange( e ) }>
                                            <option value="12">12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                        </nav>

                        <ProductsGrid products={ products } loading={ loading } perPage={ perPage } />

                        { loading || ( products && products.length ) ?
                            <nav className="toolbox toolbox-pagination">
                                <div className="toolbox-item toolbox-show">
                                    {/* <label>Show:</label>

                                    <div className="select-custom">
                                        <select name="count" className="form-control" value={ perPage } onChange={ e => onPerPageChange( e ) }>
                                            <option value="12">12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                        </select>
                                    </div> */}
                                    <div className="toolbox-right">
                                        <div className="toolbox-item toolbox-show">
                                            <SearchForm />
                                        </div>
                                    </div>

                                    <div className="toolbox-left">
                                        <div className="toolbox-item">
                                            <div className="select-custom">
                                                <select name="category" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                                    <option value="default">Category</option>
                                                    <option value="popularity">Art</option>
                                                    <option value="rating">Photography</option>
                                                    <option value="date">Games</option>
                                                    <option value="price">Animation</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="toolbox-item">
                                            <div className="select-custom">
                                                <select name="collections" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                                    <option value="default">Collections</option>
                                                    <option value="popularity">NFSH2Artboard</option>
                                                    <option value="rating">NFSH2Artboard</option>
                                                    <option value="date">NFSH2Artboard</option>
                                                    <option value="price">NFSH2Artboard</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="toolbox-item">
                                            <div className="select-custom">
                                                <select name="collections" className="form-control">
                                                    <option value="default">All</option>
                                                    <option value="possible">possible</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="toolbox-item">
                                            <div className="select-custom">
                                                <select name="orderby" className="form-control" value={ sortBy } onChange={ e => onSortByChange( e ) }>
                                                    <option value="default">Default sorting</option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="price">Sort by price: low to high</option>
                                                    <option value="price-desc">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="toolbox-item toolbox-show">
                                            <label>Show:</label>

                                            <div className="select-custom">
                                                <select name="count" className="form-control" value={ perPage } onChange={ ( e ) => onPerPageChange( e ) }>
                                                    <option value="12">12</option>
                                                    <option value="24">24</option>
                                                    <option value="36">36</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                
                                <Pagination totalPage={ totalPage } />
                            </nav>
                            : ''
                        }
                    </div>
                </div>
            </div>

            <div className="mb-2"></div>
        </main>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Shop );