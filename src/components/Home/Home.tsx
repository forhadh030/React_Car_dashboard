import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import HomeImg from '../../assets/images/car_sales.jpg'

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${HomeImg})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
})

export const Home = (props: Props) => {
    const classes = useStyles();
    return (
    <>
        { <Navbar /> }
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/Dashboard' className={classes.button_text}>Sell Your Car!</Link>
                </Button>
            </div>
        </div>
    </>
  )
};