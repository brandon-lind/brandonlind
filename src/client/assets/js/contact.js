(function(document) {
    /* global React */
    /* global ReactDOM */

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  class ContactForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        email: '',
        message: '',
        showSuccess: false,
        showError: false,
      };
    }
  
    handleInputChange = event => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleReset = event => {
      event.preventDefault();
  
      this.setState({
        name: '',
        email: '',
        message: '',
        showSuccess: false,
        showError: false,
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
  
      this.setState({
        showSuccess: false,
        showError: false,
      });
  
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contactme', ...this.state }),
      })
        .then(() => { this.handleSuccess(); })
        .catch(() => {
          this.setState({
            name: '',
            email: '',
            message: '',
            showSuccess: false,
            showError: true,
          });
        });
    };
  
    handleSuccess = () => {
      this.setState({
        name: '',
        email: '',
        message: '',
        showSuccess: true,
        showError: false,
      });
  
      setTimeout(() => {
        if(this.props.onContactSubmit) {
          this.props.onContactSubmit();
        } else {
          this.setState({
            showSuccess: false,
            showError: false,
          });
        }
      }, 3500);
    };
  
    render() {
      return (
        <section>
        <form
          onSubmit={this.handleSubmit}
          name="contactme"
          data-netlify="true"
          netlify-honeypot="bot-field"
          style={
            this.state.showSuccess ? { display: 'none' } : { display: 'block' }
          }
        >
          <input type="hidden" name="form-name" value="contactme" />
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                maxLength="256"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                maxLength="256"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Your Message to Me</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                maxLength="1000"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="field" style={{ display: 'none' }}>
              <label htmlFor="bot-field">Don't fill this out if you're human</label>
              <input type="text" name="bot-field" id="bot-field" />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" onClick={this.handleReset} />
            </li>
          </ul>
          <p
            className="strong"
            style={
              this.state.showError ? { display: 'block' } : { display: 'none' }
            }
          >
            Hmm, there was an issue sending the message. Would you be able to try
            again?
          </p>
        </form>
        <div 
          style={
            this.state.showSuccess ? { display: 'block' } : { display: 'none' }
          }>
          <h3>Thank you for reaching out.</h3>
          <p>I'll get back with you shortly.</p>
        </div>
        </section>
      );
    }
  }
  
  ReactDOM.render(
    <ContactForm />,
    document.getElementById('contactme-component')
  );
}(document));