import { connect } from 'react-redux';
import * as timerActions from '../../redux/timerActions';
import Timer from './Timer';

const mapStateToProps = state => ({
  value: state.value,
  step: state.step.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
