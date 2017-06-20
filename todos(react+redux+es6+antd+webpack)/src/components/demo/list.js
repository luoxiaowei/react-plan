import React, { Component } from 'react';
import { Link } from 'react-router';
import { List, Button} from 'antd-mobile';
import classnames from 'classnames';
import PropTypes from 'prop-types';
const Item = List.Item;
class DemoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClass = this.handleClass.bind(this);
    }
    componentWillMount() {
    }
    handleAdd() {
        this.props.actions.addNumber(1);
    }
    handleClass() {
        this.setState({
            classHide: !this.state.classHide
        });
    }
    render() {
        return (
            <div>
                <List className={classnames('list', {'hide-or-show': this.state.classHide})}>
                    <Item
                        extra={<Button inline size="small" onClick={this.handleAdd}>点击</Button>}>
                        <Link to="/404">Redux <span>{this.props.demo.num}</span></Link>
                    </Item>
                    <Item
                        extra={<Button inline size="small" onClick={this.handleClass}>点击</Button>}>
                        <Link to="/404">classnames <span>{this.state.classHide ? 'show': 'hide'}</span></Link>
                    </Item>
                </List>
            </div>
        );
    }
}

DemoList.propTypes = {
    actions: PropTypes.object,
    api: PropTypes.object,
    demo: PropTypes.object,
};

export default DemoList;

