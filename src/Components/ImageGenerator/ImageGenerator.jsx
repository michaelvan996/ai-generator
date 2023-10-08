import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
    return (
        <div className="ai-image-generator">
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_image} alt="a pretty girl" /></div>
            </div>
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Describe your image"/>
                <div className="generate-btn">Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
