import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (287)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce business uses digital methods to sell products and services to customers. Ecommerce businesses can be online-only or have a physical presence as well. Selling to customers online typically requires a website or digital storefront, plus a way to process payments digitally and ship orders to customers.</p>
            <p>As mobile devices become increasingly prevalent, e-commerce websites have adapted with responsive designs, catering to the growing number of users accessing these platforms through smartphones and tablets. Emphasizing security, these websites implement encryption and secure payment gateways to protect sensitive information. Additionally, features like personalized recommendations, promotions, and loyalty programs enhance customer engagement and retention.</p>
        </div>
    </div>
  )
}

export default DescriptionBox