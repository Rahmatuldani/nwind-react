import React from 'react';
import {
    Card,
    Table,
    Form,
} from 'react-bootstrap';
import { selectCustomer } from '../../store/customer/customer.selector';
import { useSelector } from 'react-redux';
import { splitArray } from '../../utils/split/split.utils';
import { PaginationComponent } from '../../component';

const LandingPage: React.FC = () => {
    const customers = useSelector(selectCustomer);
    const [search, setSearch] = React.useState<string>('');
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [customerPerRow, setCustomerPerRow] = React.useState<number>(10);

    const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);

    const filterCustomer = customers.filter((customer) => 
        customer.ContactName?.toLowerCase().includes(search.toLowerCase()) ||
        customer.Country?.toLowerCase().includes(search.toLowerCase()) ||
        customer.CompanyName?.toLowerCase().includes(search.toLowerCase()) 
    );

    const handleCustomerPerRow = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(0);
        setCustomerPerRow(parseInt(event.target.value));
    };

    const dataCustomerPerRow = splitArray(filterCustomer, customerPerRow);

    const handleChangePage = (page: number) => setCurrentPage(page);

    const displayData = () => {
        if (dataCustomerPerRow.length > 0) {
            return dataCustomerPerRow[currentPage].map((customer, i) => (
                <tr key={i}>
                    <td>{customer.CustomerID}</td>
                    <td>{customer.ContactName}</td>
                    <td>{customer.CompanyName}</td>
                    <td>{customer.Country}</td>
                    <td>{customer.Address}</td>
                    <td>{customer.Phone}</td>
                    <td>Action</td>
                </tr>
            ));
        }
        return <tr>
            <td colSpan={7} align='center'>Data Not Found</td>
        </tr>;
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header className='d-flex align-items-center'>
                    <Card.Title className='m-0 flex-grow-1'>Customer List</Card.Title>
                    <Form className='flex-grow-1' style={{ maxWidth: '300px' }}>
                        <Form.Control
                        type="search"
                        placeholder="Search by name, company, or country"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearch}
                        onKeyDown={(event)=>{if(event.key==='Enter'){event.preventDefault();}}}
                        />
                    </Form>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>Adress</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData()}
                        </tbody>
                    </Table>
                    <div className='d-flex justify-content-end'>
                        <Form className='me-3'>
                            <Form.Select aria-label='data per row' onChange={handleCustomerPerRow}>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </Form.Select>
                        </Form>
                        <PaginationComponent page={currentPage} setPage={handleChangePage} pageLength={dataCustomerPerRow.length}/>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default LandingPage;