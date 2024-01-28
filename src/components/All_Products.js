import React, { Component, useEffect, useState } from 'react'

import Product_list from './Product_list'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { json,useParams } from 'react-router-dom';
// export default class All_Products extends Component {
//     static defaultProps = {
//         category: "blush"
//     }
//     static propTypes = {
//         category: PropTypes.string
//     }
//     constructor() {
//         super();
//         console.log("This is constructor");
//         this.state = {
//             makeup_list: [],
//             loading: false
//         }

//     }
//     componentDidMount() {
//         fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${this.props.category}`)
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     makeup_list: json,
//                     loading: true,
//                 });
//             });

//     }

//     render() {
//         const capitalizeFirstLetter = (str) => {
//             return str.charAt(0).toUpperCase() + str.slice(1);
//         }

//         const capitalizedString = capitalizeFirstLetter(this.props.category);
//         return (
//             <div>
//                 <div className='container my-3'>

//                     <h2 className='text-center' style={{ color: "lightpink", margin: "40px 0px" }}>{this.props.category === '' ? "All Products" : capitalizedString}</h2>
//                     {!this.state.loading && <Spinner />}
//                     <div className='row'>
//                         {this.state.makeup_list.map((element) => {
//                             return <div className="col-md-3" key={element.id}>
//                                 <Product_list title={element.brand} description={element.name.slice(0, 50)} imageURL={element.api_featured_image} web_link={element.product_link} />
//                             </div>
//                         })}

//                     </div>
//                 </div>
//             </div>
//         )


//     }
// }

const All_Products = (props) => {
    const [makeup_list, setmakeup_list] = useState([])
    const [loading, setloading] = useState(false)
    const { category } = useParams();
    const capitalizeFirstLetter = (str) => {
        console.log(str);
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const capitalizedString = capitalizeFirstLetter(props.category);

    useEffect(() => {
        fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${props.category}`)
      .then(res => res.json())
      .then((json) => {
        setmakeup_list(json); 
        setloading(true)
    });
    }, [category]);
    return (
        <div>
            <div className='container my-3'>

                <h2 className='text-center' style={{ color: "lightpink", fontWeight: 'bold',margin: "40px 0px",marginTop:"70px" }}>{props.category === '' ? "All Products" : capitalizedString}</h2>
                {!loading && <Spinner />}
                <div className='row'>
                    {makeup_list.map((element) => {
                        return <div className="col-md-3" key={element.id}>
                            <Product_list title={element.brand} description={element.name.slice(0, 50)} imageURL={element.api_featured_image} web_link={element.product_link} />
                        </div>
                    })}

                </div>
            </div>
        </div>
    )


}

All_Products.defaultProps = {
    category: "blush"
}
All_Products.propTypes = {
    category: PropTypes.string
}
export default All_Products