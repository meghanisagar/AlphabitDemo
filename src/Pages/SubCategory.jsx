import { useEffect, useState } from "react";
import { baseURL } from "../Global/Utils";
import { Spinner, Alert } from "react-bootstrap";
import { Card, Col, Row } from "antd";
import { Divider } from "antd";

const SubCategory = () => {
  let [errorDetails, setErrorDetails] = useState(null);
  let [subCategoryData, setSubCategoryData] = useState([]);
  let [loader, setLoader] = useState(true);

  const getSubCategoryData = (api_url) => {
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
          setSubCategoryData(data);
        },
        (error) => {
          setErrorDetails(error.message);
          setLoader(false);
          setSubCategoryData([]);
        }
      );
  };

  useEffect(() => {
    getSubCategoryData("ecommerce/category/getChildCategories?browsePath=6648217031/6648218031/11987349031/11987350031");
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
            getSubCategoryData("ecommerce/category/getChildCategories?browsePath=6648217031/6648218031/11987349031/11987350031")
          }
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorDetails}</p>
        </Alert>
      )}

      <Divider orientation="left" plain>
        List of Sub - Categories
      </Divider>
      <Row>
        {subCategoryData?.map((category) => {
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

export default SubCategory;
