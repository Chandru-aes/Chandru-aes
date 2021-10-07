/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import { Media, Badge } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 
 // api
 import api from 'Api';
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 
 // For Basic Table
 let id = 0;
 
 function createData(name, calories, fat, carbs, protein) {
     id += 1;
     return { id, name, calories, fat, carbs, protein };
 }
 
 const data = [
     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
     createData('Eclair', 262, 16.0, 24, 6.0),
     createData('Cupcake', 305, 3.7, 67, 4.3),
     createData('Gingerbread', 356, 16.0, 49, 3.9),
 ];
 
 class PreprodcutionTable extends Component {
 
     state = {
         employeePayroll: null
     }
 
     componentDidMount() {
         this.getEmployeePayrolls();
     }
 
     // get employee payrols
     getEmployeePayrolls() {
         api.get('employeePayrols.js')
             .then((response) => {
                 this.setState({ employeePayroll: response.data });
             })
             .catch(error => {
                 // error handling
             })
     }
 
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
         return (
             <div className="table-wrapper">
                 <PageTitleBar title={<IntlMessages id="sidebar.forecasting" />} match={this.props.match} />
                
                 <RctCollapsibleCard heading="Forecast List" fullBlock>
                     <div className="type-contianer">
                     <Badge className="mb-10 mr-10" href="#" color="primary">Seasonal</Badge>
                     <Badge className="mb-10 mr-10 bg-average" href="#" color="">Average</Badge>
                    </div>
                
                     <div className="table-responsive">
                         <Table>
                             <TableHead>
                                 <TableRow>
                                     <TableCell>ID</TableCell>
                                     <TableCell>Buyer</TableCell>
                                     <TableCell>Division</TableCell>
                                     <TableCell>Season</TableCell>
                                     <TableCell>Year</TableCell>
                                     <TableCell>Location</TableCell>
                                     <TableCell>Forecast type</TableCell>
                                     <TableCell>Projection Qty</TableCell>
                                     <TableCell>Confirmed Qty</TableCell>
                                     <TableCell>Activity</TableCell>
                                 </TableRow>
                             </TableHead>
                             <TableBody>
                                 <TableRow className="table-primary">
                                     <TableCell>#10001</TableCell>
                                     <TableCell>Buyer 1</TableCell>
                                     <TableCell>INV-001001</TableCell>
                                     <TableCell>Autumn</TableCell>
                                     <TableCell>2021</TableCell>
                                     <TableCell>Coimbatore</TableCell>
                                     <TableCell>Type 1</TableCell>
                                     <TableCell>50</TableCell>
                                     <TableCell>10</TableCell>
                                     <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
                                 </TableRow>
                                 <TableRow className="table-primary">
                                     <TableCell>#10002</TableCell>
                                     <TableCell>Buyer 1</TableCell>
                                     <TableCell>INV-001001</TableCell>
                                     <TableCell>Autumn</TableCell>
                                     <TableCell>2021</TableCell>
                                     <TableCell>Coimbatore</TableCell>
                                     <TableCell>Type 1</TableCell>
                                     <TableCell>50</TableCell>
                                     <TableCell>10</TableCell>
                                     <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
                                 </TableRow>
                                 <TableRow className="table-primary">
                                     <TableCell>#10003</TableCell>
                                     <TableCell>Buyer 1</TableCell>
                                     <TableCell>INV-001001</TableCell>
                                     <TableCell>Autumn</TableCell>
                                     <TableCell>2021</TableCell>
                                     <TableCell>Coimbatore</TableCell>
                                     <TableCell>Type 1</TableCell>
                                     <TableCell>50</TableCell>
                                     <TableCell>10</TableCell>
                                     <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
                                 </TableRow>
                                 <TableRow className="table-primary">
                                     <TableCell>#10004</TableCell>
                                     <TableCell>Buyer 1</TableCell>
                                     <TableCell>INV-001001</TableCell>
                                     <TableCell>Autumn</TableCell>
                                     <TableCell>2021</TableCell>
                                     <TableCell>Coimbatore</TableCell>
                                     <TableCell>Type 1</TableCell>
                                     <TableCell>50</TableCell>
                                     <TableCell>10</TableCell>
                                     <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
                                 </TableRow>
                             </TableBody>
                         </Table>
                     </div>
                 </RctCollapsibleCard>
             </div>
         );
     }
 }
 
 export default PreprodcutionTable;
 