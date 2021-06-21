import React from 'react';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopSections} from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview/preview.collection'
import './collections-overview.styles.scss'


const CollectionOverview = ({collections}) => (
    <div className='collections-overview' >
    { 
        collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key = {id} {...otherCollectionProps}/>
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopSections
})

export default connect(mapStateToProps)(CollectionOverview)