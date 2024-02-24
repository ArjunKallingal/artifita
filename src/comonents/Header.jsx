import React from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    return (
        <div>
            <div className='header-head'>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 head-row1">
                        <InputGroup className="mb-3 head-search">
                            <input className='head-input' placeholder='Search anything...' type="text" />
                            <Button variant="warning" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="col-lg-4 head-row2">
                        <div className='head-cart d-flex text-white'>
                            <img style={{height:'30px', marginLeft:'50px'}} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" /><p>sign in</p>
                            <img style={{height:'30px',marginLeft:'30px'}} src="https://th.bing.com/th/id/R.3a142deb575a914f4539d0a7f88791b6?rik=A7ExdAnGRThXdw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fCart-PNG-Image.png&ehk=y6BrtzzSGUlZ4oIC8NSR%2bxzgS2kXfQUuoVcsh83ACP8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <a href='/cart'>cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header