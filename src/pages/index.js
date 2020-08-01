import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

import recMarissaLimsiacoImg from '../assets/images/rec_marissa_limsiaco.png';
import recGirishKapoorImg from '../assets/images/rec_girish_kapoor.png';
import recHieuHoImg from '../assets/images/rec_hieu_ho.png';

import thumb01 from '../assets/images/thumbs/01.jpg';
import thumb02 from '../assets/images/thumbs/02.jpg';
import thumb03 from '../assets/images/thumbs/03.jpg';
import thumb04 from '../assets/images/thumbs/04.jpg';
import thumb05 from '../assets/images/thumbs/05.jpg';
import thumb06 from '../assets/images/thumbs/06.jpg';

import full01 from '../assets/images/fulls/01.jpg';
import full02 from '../assets/images/fulls/02.jpg';
import full03 from '../assets/images/fulls/03.jpg';
import full04 from '../assets/images/fulls/04.jpg';
import full05 from '../assets/images/fulls/05.jpg';
import full06 from '../assets/images/fulls/06.jpg';

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Wakeboarding',
    description: `Life is better on the water.`,
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Toys',
    description: `Why not tow your boat with a Viper powered V10 truck?`,
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Baseball with the family',
    description: `Our family loves baseball!`,
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Swinging for the fences',
    description: `My son about to hit a homerun off of his best friend...`,
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Low, but not slow',
    description: `Too many mods to list here, but wow it's fun to drive`,
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Full Boost',
    description: `Race ready from the dealership`,
  },
];

class HomeIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    return (
      <Layout>
        <Helmet htmlAttributes={{ lang : 'en' }}>
          <title>Brandon Lind</title>
          <meta name="description" content="The personal site for Brandon Lind" />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Professionalism
              </h2>
            </header>
            <p>
              Sounding my own horn is completely out of character for { ' ' }
              me, so I prefer to let my colleagues, clients, and { ' ' }
              mentors do the talking. I instinctively fall into the { ' ' }
              practice of { ' ' }
              <a href="https://www.google.com/search?q=Confident+Humility" target="_blank" rel="noopener noreferrer">confident humility</a> { ' ' }
              for my style of leadership. If this aligns with someone { ' ' }
              you're looking to work with, { ' ' }
              <a href="#contactme" className="smooth-scroll">get in touch with me</a> { ' ' }
              and let's have a coffee or a beer.
            </p>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/brandon-lind" target="_blank" rel="noopener noreferrer" className="icon style2 fa-linkedin" title="Connect with me on LinkedIn"><span className="label">LinkedIn</span></a></li>
              <li><a href="#contactme" className="icon style2 fa-envelope-o smooth-scroll" title="Contact me"><span className="label">Contact me</span></a></li>
              <li><a href="https://github.com/ripvanbl/brandonlind" target="_blank" rel="noopener noreferrer" className="icon style2 fa-github" title="View my Github account"><span className="label">Github</span></a></li>
              <li><a href="https://s3.amazonaws.com/brandonlind.com/resume/Brandon+Lind+Resume.pdf" target="_blank" rel="noopener noreferrer" className="icon style2 fa-file-pdf-o" title="View my resume in PDF format"><span className="label">View my resume in PDF format</span></a></li>
            </ul>
            <hr />
            <blockquote>&ldquo;...He is hands down one of the best technology leaders I have had the pleasure of working with...&rdquo;<br /><img src={recMarissaLimsiacoImg} alt="Quote from Marissa Limsiaco" /></blockquote>
            <blockquote>&ldquo;...Brandon's technical abilities and attention to detail are exemplary. He is a asset for any team or organization...&rdquo;<br /><img src={recGirishKapoorImg} alt="Quote from Girish Kapoor" /></blockquote>
            <blockquote>&ldquo;...Brandon was also one of my best manager. He has an excellent people management skill that make his people feel very comfortable to work with him. Brandon is always open with new ideas and encourage/support his people to do so...&rdquo;<br /><img src={recHieuHoImg} alt="Quote from Hieu Ho" /></blockquote>
            <blockquote><a href="https://www.linkedin.com/in/brandon-lind" target="_blank" rel="noopener noreferrer">Read more recommendations on my LinkedIn profile</a></blockquote>
          </section>

          <section id="two">
            <h2>Slices of life</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="contactme">
            <h2>Get In Touch</h2>
            <p>
              If you'd like to contact me, simply fill out this form and I'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
