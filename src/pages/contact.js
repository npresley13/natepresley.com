import * as React from 'react';
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageTitle="Contact Me">
            <form method="POST" action="https://getform.io/f/f53674dc-c09b-4deb-8550-2c33f52f3643">
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