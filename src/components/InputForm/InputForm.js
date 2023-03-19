import { Component } from "react"
import { nanoid } from "nanoid";
import css from './InputForm.module.css';
import PropTypes from 'prop-types';


export class InputForm extends Component {
    state = {       
        name: '',
        number: ''
    }

    onInputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
       
    }
    
    submitForm = e => {
        e.preventDefault();
        const newContact = {
            name: this.state.name,
            id: nanoid(),
            number: this.state.number,
        };
        
        this.props.onSubmit(newContact);
        
       
        this.restart();
    } 
    

    restart = () => {
        setTimeout(() => {
            this.setState({ name: "", number: "" })
        }, 500);
    }
    
    render() {                
        return (
            <form
                className={css.form}
                onSubmit={this.submitForm}>
                <label htmlFor='name' className={css.label_form}>
                    <span>Name</span>
                    <input
                    onChange={this.onInputHandler}
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                />
                </label>
                <label htmlFor='number' className={css.label_form}>
                    <span>Number</span>
                    <input
                    onChange={this.onInputHandler}
                    type="tel"
                    name="number"
                        value={this.state.number}
                        className={css.input}
                />
                </label>
                
                <button type="submit" className={css.addBtn}>Add contact</button>
               
   
                
            
            </form>
            
        )
    }
} 
    
//ап 


InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
    

     
    

     


















