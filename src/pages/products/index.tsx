import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../store/product/product.selector';
import { Card, Table } from 'react-bootstrap';

const ProductPage: React.FC = () => {
  const products = useSelector(selectProduct);

  return (
    <React.Fragment>
      <Card>
        <Card.Header>
          <Card.Title>Product List</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Supplier</th>
                <th>Category</th>
                <th>Quantity per Unit</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Order</th>
                <th>ReorderLevel</th>
                <th>Discontinued</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td>{product.ProductID}</td>
                  <td>{product.ProductName}</td>
                  <td>{product.SupplierID}</td>
                  <td>{product.CategoryID}</td>
                  <td>{product.QuantityPerUnit}</td>
                  <td>{product.UnitPrice}</td>
                  <td>{product.UnitsInStock}</td>
                  <td>{product.UnitsOnOrder}</td>
                  <td>{product.ReorderLevel}</td>
                  <td>{product.Discontinued === 1 ? 'Yes' : 'No'}</td>
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ProductPage;