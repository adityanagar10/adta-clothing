import { takeLatest, call, put } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils' 
import { fetchCollectionsSuccess, fetchCollectionError } from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log('collection saga mein mereko fire kara haiii');
    try{const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap , snapshot)
    yield put(fetchCollectionsSuccess(collectionMap))
    }
    catch(error){
    yield put(fetchCollectionError(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}