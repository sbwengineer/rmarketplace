import { withRouter } from 'next/router';

// Import Custom Component
import ALink from "../ALink";

// Import Utils
import { mainMenu } from "../../../utils/data/menu";

function MainMenu ( { router } ) {
    const pathname = router.pathname;

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    return (
        <>
            <nav className="main-nav">
                <ul className="menu sf-js-enabled sf-arrows">
                    <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                        <ALink href="/shop" className="sf-with-ul"><i className="icon-user mr-3"></i>User Info</ALink>
                        <div className="megamenu megamenu-fixed-width megamenu-1col">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="submenu">
                                        <li>Username</li>
                                        <li>Address:</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                        <ALink href="/shop" className="sf-with-ul"><i className="icon-mode-grid mr-3"></i>Category</ALink>
                        <div className="megamenu megamenu-fixed-width megamenu-1col">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.categories.map( ( category, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ category.url }` }>{ category.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                        <ALink href="/product/default/war-3" className="sf-with-ul"><i className="icon-bars mr-3"></i>Collections</ALink>
                        <div className="megamenu megamenu-fixed-width megamenu-1col">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.collections.map( ( collection, index ) => (
                                                <li key={ "menu-item" + index }>
                                                    <ALink href={ `${ collection.url }` }>{ collection.title }</ALink>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li> */}

                    {/* <li><a href="https://1.envato.market/DdLk5" target="_blank"><i
                        className="icon-star-empty mr-3"></i>Buy Porto</a></li>
                    <li className="menu-deal">
                        <ALink href="#"><i className="icon-tag-percent mr-3"></i>Deals</ALink>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default withRouter( MainMenu );