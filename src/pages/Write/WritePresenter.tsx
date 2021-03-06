import React, { ChangeEventHandler } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import HashTagList from "../../components/HashTagList";
import logHoc from "../../hoc/logHoc";

interface PresenterProps {
  title: string;
  content: string;
  tagList: string[];
  onChangeTitle: ChangeEventHandler<HTMLInputElement>;
  onChangeContent: ChangeEventHandler<HTMLTextAreaElement>;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

function WritePresenter(props: PresenterProps) {
  const {
    title,
    content,
    tagList,
    onChangeTitle,
    onChangeContent,
    addTag,
    removeTag,
  } = props;
  return (
    <>
      <Form.Group className="mb-4">
        <Form.Label>제목</Form.Label>
        <FormControl
          value={title}
          onChange={onChangeTitle}
          placeholder="제목을 입력해주세요."
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>태그</Form.Label>
        <HashTagList tagList={tagList} addTag={addTag} removeTag={removeTag} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>내용</Form.Label>
        <FormControl
          as="textarea"
          rows={10}
          value={content}
          onChange={onChangeContent}
        />
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
        <Button>등록</Button>
        &nbsp;
        <Button variant="secondary">취소</Button>
      </Form.Group>
    </>
  );
}

export default logHoc<PresenterProps>(WritePresenter);
