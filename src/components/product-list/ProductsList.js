import React, { Component } from 'react';
import data from '../../assets/data';
import './ProductsTable.scss';
import _ from 'lodash';
import ProductItem from "../product-item/ProductItem";
import OrderingSelect from "../ordering-select/OrderingSelect";
import Pagination from "material-ui-flat-pagination";

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            offset: 0,
            rowsPerPage: 12,
            orderBy: 'id',
            order: 'desc'
        };
    }

    componentDidMount() {
        this.setState({
            products: data.map((item) => {
                return {
                    id: parseInt(item.id),
                    productName: item.product_name,
                    brandName: item.brand_name,
                    actualPrice: parseFloat(item.actual_price),
                    fileName: item.filename
                }
            })
        });
    }

    handlePageChange = (offset) => {
        window.scrollTo(0, 0);
        this.setState({ offset });
    };

    createSortHandler = order => {
        if (order === this.state.order) return;

        const orderBy = order !== 'none' ? 'actualPrice' : 'id';
        const orderNew = order !== 'none' ? order : 'desc';

        this.setState({ order: orderNew, orderBy, page: 0, offset: 0 });
    };

    render() {
        const { products, rowsPerPage, orderBy, order, offset } = this.state;

        return (
           <div className={'items-list'}>
               <div className={'row items-list__ordering'}>
                   <OrderingSelect label={'Sort By Price'} onOrderingChanged={this.createSortHandler}/>
               </div>
               <div className={'row'}>
                   {_.orderBy(products, [orderBy], [order])
                       .slice(offset, offset + rowsPerPage)
                       .map((item) => (
                           <div key={item.id} className={'col-12 col-md-6 col-lg-4 col-xl-3'}>
                               <ProductItem productName={item.productName}
                                            brandName={item.brandName}
                                            actualPrice={item.actualPrice}
                                            fileName={item.fileName}/>
                           </div>
                       ))
                   }
               </div>

               <div className={'items-list__pagination row'}>
                   <Pagination
                       limit={rowsPerPage}
                       offset={this.state.offset}
                       total={this.state.products.length}
                       classes={{rootStandard: 'custom-class', rootEnd: 'custom-class'}}
                       onClick={(e, offset) => this.handlePageChange(offset)}
                   />
               </div>
           </div>
        );
    }
}

export default ProductsList;
