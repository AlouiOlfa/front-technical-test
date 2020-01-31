import * as React from "react";

import Catalogue from './Catalogue'
import {useEffect, useState} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

const Home = () => {
 const [products, setProducts] = useState([]);
 const [isEmpty, setIsEmpty] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const getProductsList = (limit: number = 20) => {
     axios
         .get(`http://localhost:8080/products?_page=${currentPage}&_limit=${limit}`)
         .then(res => {
             if(Array.isArray(res.data) && res.data.length > 0){
                 setProducts(res.data);
             } else {
                 setCurrentPage(currentPage-1);
                 setIsEmpty(true);
             }
         });
 };
 const handlePagination = (toPage: number) => {
     // @ts-ignore
     setCurrentPage(toPage, () => {
         console.log('page changed :', currentPage);
     })
};

    useEffect(() => {
  const fetchUrl = async () => {
      getProductsList( 20)
  };
  fetchUrl();
 }, [currentPage]);
console.log('products after', products);

 return (
     <div>

         <Button style={{ marginLeft:'370px'}}  disabled={currentPage<2} onClick={() => { handlePagination(currentPage-1)}}>Précéddant </Button>
         <span>Page : {currentPage}</span>
         <Button disabled={isEmpty} onClick={() => { handlePagination(currentPage+1)}}>Suivant </Button>
         <Catalogue products={products} />
     </div>
 );
};

export default Home;
