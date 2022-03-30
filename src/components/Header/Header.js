import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../customlink(display active route)/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='navBar'>
            <div>
                <img style={{height:'50px',width:'50px',borderRadius:'20px'}} src="https://media.istockphoto.com/vectors/shopping-bag-with-cart-logo-designillustrator-vector-id1029895828?k=20&m=1029895828&s=612x612&w=0&h=3HonEkELnrH_KEli4TvlFXtuQfwmR-bTgUjW31gIB9s=" alt="" />
            </div>
            <ul className='customLink-style'>
            {/*href ar vitor jei url gula dewa hoisey segula app.js a Route a jei path use korsi segulai and click korley page reload korey home,products or about page a niye jassey so now the problem is reloading, we need to prevent this reloading problem */}
            {/*to solve the page reloading problem we will use  '<Link to="/">Home</Link>' in the place of '<a href="/">Home</a>'*/}
                {/*<Link className='LinkStyle' to="/">Home</Link>
                <Link className='LinkStyle' to="/products">Products</Link>
                <Link className='LinkStyle' to="/posts">Posts</Link>
                <Link className='LinkStyle' to="/about">About</Link>*/}

                <CustomLink className='LinkStyle' to="/">Home</CustomLink>
                <CustomLink className='LinkStyle' to="/products">Products</CustomLink>
                <CustomLink className='LinkStyle' to="/posts">Posts</CustomLink>
                <CustomLink className='LinkStyle' to="/about">About</CustomLink>
            </ul>
        </div>
    );
};

export default Header;