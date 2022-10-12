import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <div>
            <div class="hero-section">
                <div class="about-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vulputate luctus. Proin tristique felis sed orci ultrices varius. Aliquam et ipsum non turpis condimentum sollicitudin vitae eget nisl. Sed eu nibh enim. Integer pellentesque, arcu sit amet cursus egestas, felis mi vehicula est, eget hendrerit ante nibh vitae nunc. Mauris eu orci vitae leo pharetra scelerisque. Vivamus a ultricies ipsum. Sed sit amet nulla bibendum, blandit libero eu, consectetur arcu.</p>
                </div>
            </div>
            <div class="three-boxes">
                <div class="hover-box light-text">
                    <Link to="/work" className="link">
                        <h2 class="hover-box-heading center-object">Work</h2>
                    </Link>
                </div>
                <div class="hover-box light-text">
                    <Link to="/about" className="link">
                        <h2 class="hover-box-heading center-object">About</h2>
                    </Link>
                </div>
                <div class="hover-box light-text">
                    <Link to="/contact" className="link">
                        <h2 class="hover-box-heading center-object">Contact</h2>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default IndexPage