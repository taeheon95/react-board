import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import HashTagInput from "../../components/HashTagInput";

const TextArea = styled(FormControl)`
  height: 500px;
`;

function Write() {
  return (
    <>
      <Form.Group className="mb-4">
        <Form.Label>제목</Form.Label>
        <FormControl />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>태그</Form.Label>
        <HashTagInput />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>내용</Form.Label>
        <FormControl as="textarea" rows={10} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>글쓴이</Form.Label>
        <FormControl disabled defaultValue={"test"} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>첨부파일</Form.Label>
        <InputGroup className="mb-4">
          <FormControl type="file" />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-4">
        <Button>저장</Button>
        &nbsp;
        <Button variant="secondary">취소</Button>
      </Form.Group>
    </>
  );
}

export default Write;
