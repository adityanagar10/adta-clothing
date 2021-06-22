import React from 'react';
import {Routes} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

const ShopPage = () => (

<div className="shop-page">
{
    <Routes exact path= {`${match.path}`} component = {CollectionsOverview} />
}
</div>)
   


export default ShopPage;