import React from "react";
import Header from "./header";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";
import avtManh from '../images/manh.jpg'
import avtMinh from '../images/minh.jpg'

const content = [
    {
        title: "AI Care – Follow your loved ones",
        description: "You may delay, but time will not.",
        button: "Mobile Developer",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
        user: "Nguyen Khanh",
        userProfile: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/240114556_3018639968417018_2856334078982333709_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7WLyT2LFy-kAX9zMOhX&_nc_ht=scontent.fhan3-5.fna&oh=00_AT_2rqp_WYU4huI0kE4SlkMzX7ULnseOZ1TiEDRxPBhjxQ&oe=62E0188D"
    },
    {
        title: "Take care of your family members",
        description:
            "If you have a place to go, it is a home. If you have someone to love, it is a family. If you have both, it is a blessing.",
        button: "Backend Developer",
        image: "https://i.imgur.com/DCdBXcq.jpg",
        user: "Nguyen Duc Manh",
        userProfile: avtManh,
    },
    {
        title: "A man should never neglect his family for business.",
        description:
            "Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter",
        button: "AI Engineer",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Nguyen Hoang Minh",
        userProfile: avtMinh
    }
];

const Test = () => (
    <div style={{ height:"100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
       
        <Slider className="slider-wrapper" autoplay={1500}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                    <section>
                        <img src={item.userProfile} alt={item.user} />
                        <span>
                            Posted by <strong>{item.user}</strong>
                        </span>
                    </section>
                </div>
            ))}
        </Slider>
    </div>
);

export default Test;
