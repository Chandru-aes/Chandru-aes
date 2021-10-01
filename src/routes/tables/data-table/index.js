/**
 * Data Table
 */
 import React from 'react';
 import MUIDataTable from "mui-datatables";
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 class DataTable extends React.Component {
	 render() {
		 const columns = ["Name", "Title", "Location", "Age", "Salary"];
		 const data = [
			 ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
			 ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
			 ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
			 ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
			 ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
			 ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
			 ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
			 ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
			 ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
			 ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
			 ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
			 ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
			 ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
			 ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
			 ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
			 ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
			 ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
			 ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
			 ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
			 ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
			 ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
			 ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
			 ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
			 ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
			 ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
			 ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
			 ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
			 ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
			 ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
			 ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
		 ];
		 const options = {
			 filterType: 'dropdown'
		 };
		 return (
		 
			 <div className="data-table-wrapper">
				 <PageTitleBar title={<IntlMessages id="sidebar.dataTable" />} match={this.props.match} />
				 {/* <div className="alert alert-info">
					 <p>MUI-Datatables is a data tables component built on Material-UI V1.
			 It comes with features like filtering, view/hide columns, search, export to CSV download, printing, pagination, and sorting.
			 On top of the ability to customize styling on most views, there are two responsive modes "stacked" and "scroll" for mobile/tablet
			 devices. If you want more customize option please <a href="https://github.com/gregnb/mui-datatables" className="btn btn-danger btn-small mx-10">Click </a> here</p>
				 </div> */}
				 <RctCollapsibleCard heading="" fullBlock>
					 <MUIDataTable
						 title={"Employee list"}
						 data={data}
						 columns={columns}
						 options={options}
					 />
				 </RctCollapsibleCard>
				 <div className="table-style-1">
					 <table className="table table-striped table-bordered">
		 <thead>
			 <tr>
				 <th>Name</th>
				 <th>Position</th>
				 <th>Office</th>
				 <th>Age</th>
				 <th>Start date</th>
				 <th>Salary</th>
			 </tr>
		 </thead>
		 <tbody>
			 <tr>
				 <td>Tiger Nixon</td>
				 <td>System Architect</td>
				 <td>Edinburgh</td>
				 <td>61</td>
				 <td>2011/04/25</td>
				 <td>$320,800</td>
			 </tr>
			 <tr>
				 <td>Garrett Winters</td>
				 <td>Accountant</td>
				 <td>Tokyo</td>
				 <td>63</td>
				 <td>2011/07/25</td>
				 <td>$170,750</td>
			 </tr>
			 <tr>
				 <td>Ashton Cox</td>
				 <td>Junior Technical Author</td>
				 <td>San Francisco</td>
				 <td>66</td>
				 <td>2009/01/12</td>
				 <td>$86,000</td>
			 </tr>
			 <tr>
				 <td>Cedric Kelly</td>
				 <td>Senior Javascript Developer</td>
				 <td>Edinburgh</td>
				 <td>22</td>
				 <td>2012/03/29</td>
				 <td>$433,060</td>
			 </tr>
			 <tr>
				 <td>Airi Satou</td>
				 <td>Accountant</td>
				 <td>Tokyo</td>
				 <td>33</td>
				 <td>2008/11/28</td>
				 <td>$162,700</td>
			 </tr>
			 <tr>
				 <td>Brielle Williamson</td>
				 <td>Integration Specialist</td>
				 <td>New York</td>
				 <td>61</td>
				 <td>2012/12/02</td>
				 <td>$372,000</td>
			 </tr>
			 <tr>
				 <td>Herrod Chandler</td>
				 <td>Sales Assistant</td>
				 <td>San Francisco</td>
				 <td>59</td>
				 <td>2012/08/06</td>
				 <td>$137,500</td>
			 </tr>
			 <tr>
				 <td>Rhona Davidson</td>
				 <td>Integration Specialist</td>
				 <td>Tokyo</td>
				 <td>55</td>
				 <td>2010/10/14</td>
				 <td>$327,900</td>
			 </tr>
			 <tr>
				 <td>Colleen Hurst</td>
				 <td>Javascript Developer</td>
				 <td>San Francisco</td>
				 <td>39</td>
				 <td>2009/09/15</td>
				 <td>$205,500</td>
			 </tr>
			 <tr>
				 <td>Sonya Frost</td>
				 <td>Software Engineer</td>
				 <td>Edinburgh</td>
				 <td>23</td>
				 <td>2008/12/13</td>
				 <td>$103,600</td>
			 </tr>
			 <tr>
				 <td>Jena Gaines</td>
				 <td>Office Manager</td>
				 <td>London</td>
				 <td>30</td>
				 <td>2008/12/19</td>
				 <td>$90,560</td>
			 </tr>
			 <tr>
				 <td>Quinn Flynn</td>
				 <td>Support Lead</td>
				 <td>Edinburgh</td>
				 <td>22</td>
				 <td>2013/03/03</td>
				 <td>$342,000</td>
			 </tr>
			 <tr>
				 <td>Charde Marshall</td>
				 <td>Regional Director</td>
				 <td>San Francisco</td>
				 <td>36</td>
				 <td>2008/10/16</td>
				 <td>$470,600</td>
			 </tr>
			 <tr>
				 <td>Haley Kennedy</td>
				 <td>Senior Marketing Designer</td>
				 <td>London</td>
				 <td>43</td>
				 <td>2012/12/18</td>
				 <td>$313,500</td>
			 </tr>
			 <tr>
				 <td>Tatyana Fitzpatrick</td>
				 <td>Regional Director</td>
				 <td>London</td>
				 <td>19</td>
				 <td>2010/03/17</td>
				 <td>$385,750</td>
			 </tr>
			 <tr>
				 <td>Michael Silva</td>
				 <td>Marketing Designer</td>
				 <td>London</td>
				 <td>66</td>
				 <td>2012/11/27</td>
				 <td>$198,500</td>
			 </tr>
			 <tr>
				 <td>Paul Byrd</td>
				 <td>Chief Financial Officer (CFO)</td>
				 <td>New York</td>
				 <td>64</td>
				 <td>2010/06/09</td>
				 <td>$725,000</td>
			 </tr>
			 <tr>
				 <td>Gloria Little</td>
				 <td>Systems Administrator</td>
				 <td>New York</td>
				 <td>59</td>
				 <td>2009/04/10</td>
				 <td>$237,500</td>
			 </tr>
			 <tr>
				 <td>Bradley Greer</td>
				 <td>Software Engineer</td>
				 <td>London</td>
				 <td>41</td>
				 <td>2012/10/13</td>
				 <td>$132,000</td>
			 </tr>
			 <tr>
				 <td>Dai Rios</td>
				 <td>Personnel Lead</td>
				 <td>Edinburgh</td>
				 <td>35</td>
				 <td>2012/09/26</td>
				 <td>$217,500</td>
			 </tr>
		   
			 <tr>
				 <td>Michael Bruce</td>
				 <td>Javascript Developer</td>
				 <td>Singapore</td>
				 <td>29</td>
				 <td>2011/06/27</td>
				 <td>$183,000</td>
			 </tr>
			 <tr>
				 <td>Donna Snider</td>
				 <td>Customer Support</td>
				 <td>New York</td>
				 <td>27</td>
				 <td>2011/01/25</td>
				 <td>$112,000</td>
			 </tr>
		 </tbody>
	 </table>
</div>
 
<div className="table-style-2">
	<table className="table table-hover responsive nowrap">
		 <thead>
		   <tr>
			 <th>Client Name</th>
			 <th>Phone Number</th>
			 <th>Profession</th>
			 <th>Date of Birth</th>
			 <th>App Access</th>
			 <th>Actions</th>
		   </tr>
		 </thead>
		 <tbody>
		   <tr>
			 <td>
			   <a href="#">
				 <div className="d-flex align-items-center">
				   <div className="avatar avatar-blue mr-3">EB</div>
 
				   <div className="">
					 <p className="font-weight-bold mb-0">Ethan Black</p>
					 <p className="text-muted mb-0">ethan-black@example.com</p>
				   </div>
				 </div>
			   </a>
			 </td>
			 <td>(784) 667 8768</td>
			 <td>Designer</td>
			 <td>09/04/1996</td>
			 <td>
			   <div className="badge badge-success badge-success-alt">Enabled</div>
			 </td>
			 <td>
			   <div className="dropdown">
				 <button className="btn btn-sm btn-icon" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					   <i className="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top"
						 title="Actions"></i>
					 </button>
				 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
				   <a className="dropdown-item" href="#"><i className="bx bxs-pencil mr-2"></i> Edit Profile</a>
				   <a className="dropdown-item text-danger" href="#"><i className="bx bxs-trash mr-2"></i> Remove</a>
				 </div>
			   </div>
			 </td>
		   </tr>
 
		   <tr>
			 <td>
			   <a href="#">
				 <div className="d-flex align-items-center">
				   <div className="avatar avatar-pink mr-3">JR</div>
 
				   <div className="">
					 <p className="font-weight-bold mb-0">Julie Richards</p>
					 <p className="text-muted mb-0">julie_89@example.com</p>
				   </div>
				 </div>
			   </a>
			 </td>
			 <td> (937) 874 6878</td>
			 <td>Investment Banker</td>
			 <td>13/01/1989</td>
			 <td>
			   <div className="badge badge-success badge-success-alt">Enabled</div>
			 </td>
			 <td>
			  
			 </td>
		   </tr>
		 </tbody>
	   </table>
	   </div>
	  
			 </div>
		 );
	 }
 }
 
 export default DataTable;
 
 