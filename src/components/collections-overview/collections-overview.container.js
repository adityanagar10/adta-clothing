import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'
import {selectIsFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import collectionsOverview from './collections-overview.components'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching,
 })
 

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer


