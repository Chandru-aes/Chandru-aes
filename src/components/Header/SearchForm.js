/**
 * Search Form
 */
 import React, { Component } from 'react'
 import { Input } from 'reactstrap';
 import { Link } from 'react-router-dom';
 
 export default class SearchForm extends Component {
	 render() {
		 return (
			 <Link>
			 <div className="search-wrapper">
				 <Input type="search" className="search-input-lg" placeholder="Search.." />
			 </div>
			 </Link>
		 )
	 }
 }
 