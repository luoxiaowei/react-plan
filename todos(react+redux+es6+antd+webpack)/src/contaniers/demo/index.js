import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as demoActions from '../../actions/demo';
import api from '../../api/demo';
import DemoList from '../../components/demo/List';
import PropTypes from 'prop-types';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            actions,
            demo
        } = this.props;
        return (
            <DemoList actions={actions} api={api} demo={demo} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    demo: state.demo
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(demoActions, dispatch)
});
const Demo = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

App.propTypes = {
    actions: PropTypes.object,
    routeParams: PropTypes.object,
    demo: PropTypes.object,
};

export default Demo;