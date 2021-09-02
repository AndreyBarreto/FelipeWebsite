import "./style.css";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

function About(props) {
    var items = [
        {
            img: `${process.env.PUBLIC_URL}/mo-logo.png`
        },
        {
            img: `${process.env.PUBLIC_URL}/mo-logo.png`

        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img
                src={`${process.env.PUBLIC_URL}/lipeHome.png`}
                alt="person picture"
            />


        </Paper>
    )
}
export default About;
