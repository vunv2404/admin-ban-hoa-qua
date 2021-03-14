import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';
import watchProduct from './product_saga';
import watchAdmin from './admin_saga';
import watchAccount from './account_saga';
import watchOrder from './order_saga';
import watchImport from './import_saga';
import watchVendors from './vendors_saga';

function* rootSaga() {
  yield all([
    watchCategory(),
    watchProduct(),
    watchAdmin(),
    watchAccount(),
    watchOrder(),
    watchImport(),
    watchVendors(),
  ]);
}

export default rootSaga;