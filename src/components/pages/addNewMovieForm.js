import React, { Component } from 'react'
import { Button, Form, Image, Segment, Input } from 'semantic-ui-react'
import InlineErrors from './inlineErrors';


class AddNewMovieForm extends Component {

    state = {
        title: '',
        cover: '',
        errors: {}
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        });
    }

    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = 'Can not be blank!'
        if (!this.state.cover) errors.cover = 'Can not be blank!'
        return errors;
    };

    render() {
        const {errors} = this.state;
        return (
        <div>
            <h2>Add New Movie</h2>
            <Segment inverted>
                <Form inverted onSubmit={this.onSubmit} >
                <Form.Field error={!!errors.title}>
                    <label>Title</label>
                    { errors.title && <InlineErrors  message={errors.title} /> }
                    <Input placeholder='title' id='title' name='title' value={this.state.title} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field error={!!errors.cover}>
                    <label>Cover Url</label>
                    { errors.cover && <InlineErrors  message={errors.cover} /> }
                    <Input placeholder='cover url' id='cover' name='cover' value={this.state.cover} onChange={this.handleChange} />
                </Form.Field>
                
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Image src={this.state.cover} size='small' />
                <Button type='submit'>Add</Button>
                </Form>
            </Segment>
        </div>
        );
    }
}



export default AddNewMovieForm;