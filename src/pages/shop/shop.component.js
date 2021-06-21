import React from 'react';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopSections} from '../../redux/shop/shop.selector'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview/preview.collection'

const ShopPage = ({collections}) => (<div className="shop-page">
{
    collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key = {id} {...otherCollectionProps}/>
    ))
}
</div>)
   
const mapStateToProps = createStructuredSelector({
    collections: selectShopSections
})

export default connect(mapStateToProps)(ShopPage);