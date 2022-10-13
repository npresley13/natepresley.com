import * as React from 'react';
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageTitle="Contact Me">
            <form method="post" action="#">
                <div>
                    <label>
                        First Name
                        <input type="text" name="first-name" id="first-name" />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="last-name" id="last-name" />
                    </label>
                </div>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                
                <button className="button" type="submit">Send</button>
                
            </form>
        </Layout>
    )
}

export default contactPage