import * as React from "react";
import  { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { useRouter } from 'next/router';
import {Container} from "react-bootstrap";
import useStyles from './style'
import StyledButton from "../../Component/StyledButton";
const Product = () => {
    const router = useRouter();
    const classes = useStyles();
    const [article, setArticle] = useState({title:'', image:'', price:'', vendor:''});

    useEffect(() => {
        const fetchUrl = async () => {
            const article = router.query.handle;
            axios
                .get(`http://localhost:8080/products?handle=${article}`)
                .then(res2 => {
                    setArticle(res2.data[0]);
                    console.log('res',res2.data);});
        }; fetchUrl();
    }, []);

    return (
        <Container>
        <h1>{router.query.title}</h1>
       <Card className={classes.card}>
             <CardActionArea>
                <CardMedia
                     className={classes.media}
                     image={article.image}
                    title="Contemplative Reptile"
                 />
               <CardContent>
                    <p className={classes.text1}>
                        {article.title}
                    </p>
                     <p className={classes.text1}>
                         {article.price}£
                    </p>
                   <p className={classes.text2}>
                         {article['compare_at_price']}£
                    </p>
                   <p className={classes.text1}>
                         {article.vendor}
                    </p>
                 </CardContent>
           </CardActionArea>
            <CardActions>
                <StyledButton>
                    Ajouter
                </StyledButton>
            </CardActions>
         </Card>
        </Container>
    );
};

export default Product;
