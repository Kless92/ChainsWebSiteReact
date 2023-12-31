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

const items = [
  {
    src: imagOne,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: imagTwo,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: imagThr,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: imagFou,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: imagFive,
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: imagSix,
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: imagSev,
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: imagEig,
    altText: 'Side 8',
    caption: 'Slide 8'
  },
  {
    src: imagNine,
    altText: 'Slide 9',
    caption: 'Slide 9'
  },
  {
    src: imagTen,
    altText: 'Slide 10',
    caption: 'Slide 10'
  },
  {
    src: imagElev,
    altText: 'Slide 11',
    caption: 'Slide 11'
  },
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
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default HomeCarousel;
