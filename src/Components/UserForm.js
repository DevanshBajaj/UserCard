import React from 'react';
import Button from '../Components/Button/Button';
const UserForm = () => {

    const formSubmitHandler = event => {
        event.preventDefault()
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={'form-control'}>
                <label>Username</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Age(Years)</label>
                <input type="number" min="1" step="1"></input>
            </div>
            <Button type="submit"/>
        </form>
    )
};

export default UserForm;