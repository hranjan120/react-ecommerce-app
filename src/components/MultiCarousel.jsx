import PropTypes from "prop-types";
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import '../assets/carousel.css'

const MultiCarousel = (props) => {
    const { children, show } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        <ArrowLeft color="#a3de83" size={26} />
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        <ArrowRight color="#a3de83" size={26} />
                    </button>
                }
            </div>
        </div>
    )
}

MultiCarousel.propTypes = {
    children: PropTypes.array.isRequired,
    show: PropTypes.number.isRequired,
}

export default MultiCarousel