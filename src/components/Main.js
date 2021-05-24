import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import List from "./List";
import Filters from "./Filters";

export default function({
  entities,
  loading,
  filters,
  selectedFilter,
  onSelectFilter
}) {
  return (
    <Container fluid className="py-2 bg-dark Main">
      <Row>
        <Col xs="12" md="6" className="m-auto">
          <Card className="border-0">
            <CardHeader className="border-0 bg-secondary">
              <Filters
                loading={loading}
                selected={selectedFilter}
                filters={filters}
                onSelect={onSelectFilter}
              />
            </CardHeader>
            <CardBody className="p-0">
              <List items={entities} filter={selectedFilter} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
