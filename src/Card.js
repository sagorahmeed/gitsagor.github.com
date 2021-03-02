import React, { Component } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Data from './data.json'

export default class Card extends Component {
    render() {
        return (
            <div>
            <Container>
                <div>
                    <Grid container className="gridContainer">
                    <Grid item className="CardItem">
                            <div className="singleCard">
                                <div className="cardHeader">
                                    <h3 className="cardHeading">{Data[0].heading}</h3>
                                    <p className="cardTitle">{Data[0].title}</p>
                                    <h1 className="cardMoney">{Data[0].price}</h1>
                                    <span className="dcircle"></span>
                                </div>
                                <div className="cardBodyTitle">
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$1}</p>
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$2}</p>
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$3}</p>
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$4}</p>
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$5}</p>
                                    <p className="title"><i class="fas fa-check"></i> {Data[0].bodytitl$6}</p>
                                </div>
                                <div className="buttonBdy">
                                    <a href="#" className="subscribeButton" type="button">{Data[0].button}</a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            </div>
        )
    }
}
