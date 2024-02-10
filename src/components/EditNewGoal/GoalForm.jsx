import { Component } from "react";

export class GoalForm extends Component {
    state = {
        goal: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    render () {
        return (
            <form ></form>
        )
    }
}