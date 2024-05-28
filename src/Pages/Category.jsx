import { useEffect, useState } from "react";
import { baseURL } from "../Global/Utils";
import { Spinner, Alert } from "react-bootstrap";
import { Card, Col, Row } from "antd";
import { Divider } from "antd";

const Category = () => {
  let [errorDetails, setErrorDetails] = useState(null);
  let [categoryData, setCategoryData] = useState([]);
  let [loader, setLoader] = useState(true);

  const getCategoryData = (api_url) => {
    fetch(`${baseURL}${api_url}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error Occurred!");
        }
        return response.json();
      })
      .then(
        (data) => {
          setErrorDetails("");
          setLoader(false);
          setCategoryData(data);
        },
        (error) => {
          setErrorDetails(error.message);
          setLoader(false);
          setCategoryData([]);
        }
      );
  };

  useEffect(() => {
    getCategoryData("ecommerce/category/getMainCategories");
  }, []);
  return (
    <>
      {loader && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {errorDetails && (
        <Alert
          variant="danger"
          onClose={() =>
            getCategoryData("ecommerce/category/getMainCategories")
          }
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorDetails}</p>
        </Alert>
      )}

      <Divider orientation="left" plain>
        List of Categories
      </Divider>
      <Row >
        {categoryData?.map((category, index) => {
          return (
            <Col span={8}>
              <Card title={category.label}>{category.productType}</Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Category;
