import * as React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as PropTypes from 'prop-types'
import { Container} from 'react-bootstrap';
import { Column, Row } from 'simple-flexbox';
import Link from 'next/link'
import StyledButton from '../../Component/StyledButton';
import * as _ from 'lodash';

import "../../index.scss";
import useStyles from './style'
const Catalogue = ({products}) => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                {_.chunk(products, 4).map((prods: any,index :number) => (
                    <Row key={index}>
                    {prods.map((prod: any, elIndex :number) => (
                        <Column flexGrow={1} key={elIndex}>
                            <Link href={`/product?handle=${prod.handle}`}  as={`/product`}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={prod['product_image']}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <p className={classes.text}>
                                            {prod.title}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <StyledButton>
                                        Ajouter
                                    </StyledButton>
                                </CardActions>
                            </Card>
                            </Link>
                        </Column>
                    ))}
                </Row>
                ))}
            </Container>
        </div>
    );
};
Catalogue.propTypes = {
    products: PropTypes.array,
};
export default Catalogue;
