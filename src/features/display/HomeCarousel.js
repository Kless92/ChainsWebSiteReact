import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import imagOne from '../../app/assets/imag/IMG_7885.JPG';
import imagTwo from '../../app/assets/imag/IMG_7896.JPG';
import imagThr from '../../app/assets/imag/IMG_7876.JPG';
import imagFou from '../../app/assets/imag/IMG_8734.JPG';
import imagFive from '../../app/assets/imag/IMG_8205.JPG';
import imagSix from '../../app/assets/imag/IMG_8206.PNG';
import imagSev from '../../app/assets/imag/IMG_8207.PNG';
import imagEig from '../../app/assets/imag/IMG_8208.PNG';
import imagNine from '../../app/assets/imag/IMG_8210.PNG';
import imagTen from '../../app/assets/imag/IMG_8212.PNG';
import imagElev from '../../app/assets/imag/IMG_8213.PNG';
import imagTwel from '../../app/assets/imag/image000002.JPG';
import imag3Ten from '../../app/assets/imag/IMG_0159.jpg';
import imag4Ten from '../../app/assets/imag/IMG_4674.jpg';
import imag5Ten from '../../app/assets/imag/IMG_4880.jpg';
import imag6Ten from '../../app/assets/imag/IMG_4976.jpg';
import imag7Ten from '../../app/assets/imag/IMG_5111.jpg';
import imag8Ten from '../../app/assets/imag/IMG_5167.jpg';
import imag9Ten from '../../app/assets/imag/IMG_5229.jpg';
import imagTwen from '../../app/assets/imag/IMG_5246.jpg';
import imagTwe1 from '../../app/assets/imag/IMG_9926.JPG';

const items = [
  {
    src: imagOne,
    altText: '',
    caption: ''
  },
  {
    src: imagTwo,
    altText: '',
    caption: ''
  },
  {
    src: imagThr,
    altText: '',
    caption: ''
  },
  {
    src: imagFou,
    altText: '',
    caption: ''
  },
  {
    src: imagFive,
    altText: '',
    caption: ''
  },
  {
    src: imagSix,
    altText: '',
    caption: ''
  },
  {
    src: imagSev,
    altText: '',
    caption: ''
  },
  {
    src: imagEig,
    altText: '',
    caption: ''
  },
  {
    src: imagNine,
    altText: '',
    caption: ''
  },
  {
    src: imagTen,
    altText: '',
    caption: ''
  },
  {
    src: imagElev,
    altText: '',
    caption: ''
  },
  {
    src: imagTwel,
    altText: '',
    caption: ''
  },
  {
    src: imag3Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag4Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag5Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag6Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag7Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag8Ten,
    altText: '',
    caption: ''
  },
  {
    src: imag9Ten,
    altText: '',
    caption: ''
  },
  {
    src: imagTwen,
    altText: '',
    caption: ''
  },
  {
    src: imagTwe1,
    altText: '',
    caption: ''
  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} class='carouselSize'/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        data-bs-theme="dark"
      >
        {/*CarouslIndicator is the dotted line that each dote is every picer in array */}
        {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default HomeCarousel;
