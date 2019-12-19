import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title, code, date, price, share, rate, share_after_tax } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                {title} {code} {date} {price} {share} {rate} {share_after_tax}
                
                {/* <button  style={btnStyle}>x</button> */}
                
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'20%',
    cursor:'pointer',
    float:'right'
}
const itemStyle = {
    backgroungColor: '#f4f4f4'
}

export default TodoItem
