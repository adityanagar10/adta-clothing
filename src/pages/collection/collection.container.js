import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionComponents from './collection.components'
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector'

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionLoaded
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionComponents)

export default CollectionContainer
