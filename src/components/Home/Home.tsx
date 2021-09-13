import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import car_image from '../../assets/images/charlie-deets-AkgALppFIwo-unsplash.jpg';
import {Link} from 'react-router-dom'

interface Props {
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none',
        '&:hover': {
            color: 'white',
            transition: 'color 1.4s ease-out 0.10s'
        }
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 12,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
    }
})

export const Home = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <Link to='/' className={ `${classes.logo_a} ${classes.logo_navigation}` }>Car Inventory API</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>Car Lovers Welcome!</p>
                    <Button className={classes.button} >Click Me</Button>
                </div>
            </main>
        </div>
    )
}