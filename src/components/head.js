import * as React from 'react'

const Head = ({pageTitle, metaDescription}) => (
    <>
        <title>Nathan Presley | {pageTitle}</title>
        <meta 
        name="description"
        content={metaDescription}
        >
        </meta>
    </>
)

export default Head
