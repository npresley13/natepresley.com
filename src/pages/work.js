import * as React from 'react'
import Layout from '../components/layout'

const WorkPage = () => {
    return (
        <Layout pageTitle="Work Experience">
            <div className="timeline">
            <div className="timeline-component">
                <div className="timeline-date timeline-left">
                    <h2>2020</h2>
                </div>
            </div>
            <div className="timeline-middle">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component job-description">
                <h3>Strong Hold</h3>
                <h4>Ecommerce Manager</h4>
                <p>When I was brought on at Strong Hold, I was asked to be the web master and bring Strong Hold in to the 21st century. My primary focus was to build the Strong Hold storefront and improve direct online sales. In 2019 Strong Hold was averaging $11,000/year in ecommerce sales.In 2022 we are on pace to hitting $1.2 Million in revenue.</p>
            </div>
            <div className="timeline-component job-description">
                <h3>New Peaks Marketing</h3>
                <h4>Founder / Digital Marketing Specialist</h4>
                <p>New Peaks Marketing was my first attempt at starting my own business. I was able to build many connections through my involvement with the American Advertising Federation and working for a marketing agency. I leveraged these connections to build a network of freelancers to start my own mini marketing agency.</p>
            </div>
            <div className="timeline-middle">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component">
                <div className="timeline-date timeline-right">
                    <h2>2019</h2>
                </div>
            </div>

            <div className="timeline-component">
                <div className="timeline-date timeline-left">
                    <h2>2017</h2>
                </div>
            </div>
            <div className="timeline-middle">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component job-description">
                <h3>Makespace!</h3>
                <h4>Digital Marketing Coordinator</h4>
                <p>Makespace! was my first real role in the tech industry. I started as an Account Manager where I was told to manage 20+ active website builds within my first week of being there. It was very much a sink or swim scenerio, but, with the help of some amazing co-workers, I was able to be successful in my role.</p>
            </div>
            
            <div className="timeline-component job-description">
                <h3>Jewish Community Center</h3>
                <h4>Personal Trainer</h4>
                <p>Physical fitness has always been a major part of my life. In highschool I competed in physical fitness competitions - think crossfit games for JROTC cadets. So I thought that personal training would be an excellent career choice for me. After about 2 years of training professionally, I realized that the work was not as fulfilling as I hoped it'd be. It was time to turn my attention to Business Marketing.</p>
            </div>
            <div className="timeline-middle">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component">
                <div className="timeline-date timeline-right">
                    <h2>2015</h2>
                </div>
            </div>
            
            <div className="timeline-component">
                <div className="timeline-date timeline-left">
                    <h2>2013</h2>
                </div>
            </div>
            <div className="timeline-middle">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component job-description">
                <h3>Workout Anytime</h3>
                <h4>Sales Associate</h4>
                <p>I started off doing sales for Workout Anytime with a plan to become a Personal Trainer eventually. While at Workout Anytime, I learned how to sell gym memberships, and how to sell them well. I quickly became the top sales person, leading membership sales several months in a row, despite being in the  worst location.</p>
            </div>
        </div>
        </Layout>
    )
}

export default WorkPage