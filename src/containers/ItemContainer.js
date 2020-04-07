import Products from '../Screens/Products';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    items: state.items,
});


/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
    // onIncrement: () => dispatch(actions.increment()),
    // onDecrement: () => dispatch(actions.decrement()),
    // onSetColor: () => {
    //     const color = 'black'; // 임시
    //     dispatch(actions.setColor(color));
    // }
    onFetchItems: () => dispatch(actions.fetch_data())
});

// Products 컴포넌트의 Container 컴포넌트
// Products 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);


export default ItemContainer;