import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import carInterior from '../../assets/images/myNavLogo.png';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    logo: {
        content: `url(${carInterior})`,
        minWidth: '5%',
        maxWidth: '5%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundImage: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);',
        zIndex: 1,
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})
    
export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <Suspense fallback={'loading...'}>
                            <li>
                                <Button>
                                    <Link to='/Weather' className={`${classes.navbarItem} ${classes.psides}`}>Temperature</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/Dashboard' className={`${classes.navbarItem} ${classes.psides}`}>Sell Car</Link>
                                </Button>
                            </li>
                        <AuthCheck fallback={
                            <li>
                            <Button>
                                <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                            </Button>
                            </li>
                        }>
                            <li>
                                <Button>
                                    <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Home</Link>
                                </Button>
                            </li>
                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    )
}