import AboutImage from '../../assets/logo.jpg'
import CV from '../../assets/logo.jpg'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from '../about/data.js'
import './about.css'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className='about__cards'>
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis itaque eius aliquid explicabo commodi corporis blanditiis,
                        voluptas ratione alias at, repellat asperiores eaque mollitia? Explicabo, ullam!
                        Tempore reprehenderit libero quam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis itaque eius aliquid explicabo commodi corporis blanditiis,
                        voluptas ratione alias at, repellat asperiores eaque mollitia? Explicabo, ullam!
                        Tempore reprehenderit libero quam.
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About