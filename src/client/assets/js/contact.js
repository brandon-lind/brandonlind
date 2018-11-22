(function(document) {
    /* global React */
    /* global ReactDOM */
    
    class ContactForm extends React.Component {
      constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.messageInput = React.createRef();
      }
      
      handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.nameInput.current.value} ${this.emailInput.current.value} ${this.messageInput.current.value}`);
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
        	<div class="fields">
        		<div class="field half">
        			<label for="name">Name</label>
        			<input type="text" ref={this.nameInput} />
        		</div>
        		<div class="field half">
        			<label for="email">Email</label>
        			<input type="email" ref={this.emailInput} />
        		</div>
        		<div class="field">
        			<label for="message">Message</label>
        			<textarea rows="6" ref={this.messageInput}></textarea>
        		</div>
        	</div>
        	<ul class="actions special">
        		<li><button type="submit">Send Message</button></li>
        	</ul>
        </form>
        );
      }
    }
    
    ReactDOM.render(
      <ContactForm />,
      document.getElementById('contactme')
    );
})(document);