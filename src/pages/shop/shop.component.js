import React from 'react';
<<<<<<< HEAD
import {Route} from 'react-router-dom'
=======
import {Routes} from 'react-router-dom'
>>>>>>> 30c7ac91c8787b100d531b3e9d997db05e7c2c6b
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.components';
const ShopPage = ({match}) => (

<div className="shop-page">
<<<<<<< HEAD
<Route exact path= {`${match.path}`} component = {CollectionsOverview} />
   <Route path = {`${match.path}/:collectionId`} component= {CollectionPage} />
</div>

)
=======
{
    <Routes exact path= {`${match.path}`} component = {CollectionsOverview} />
}
</div>)
>>>>>>> 30c7ac91c8787b100d531b3e9d997db05e7c2c6b
   


export default ShopPage;