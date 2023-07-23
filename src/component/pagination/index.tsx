import React from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    pageLength: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({page, setPage, pageLength}) => {
    const handlePage = (page: number) => setPage(page);

    return (
        <Pagination>
            <Pagination.First onClick={()=>handlePage(0)} disabled={page === 0 ? true : false}/>
            <Pagination.Prev onClick={()=>handlePage(page - 1)} disabled={page === 0 ? true : false}/>
            {Array.from( { length: pageLength }, (_, index) => (
                <Pagination.Item key={index} onClick={()=>handlePage(index)} active={page === index ? true : false}>{index+1}</Pagination.Item>
            ))}
            <Pagination.Next onClick={()=>handlePage(page + 1)} disabled={page === pageLength-1 ? true : false}/>
            <Pagination.Last onClick={()=>handlePage(pageLength-1)} disabled={page === pageLength-1 ? true : false}/>
        </Pagination>
    );
};

export default PaginationComponent;