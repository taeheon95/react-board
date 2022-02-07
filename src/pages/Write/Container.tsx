import React, { ChangeEventHandler, useCallback, useState } from "react";
import Presenter from "./Presenter";

function Container() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);

  const onChangeTitle = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setTitle(e.target.value);
    },
    []
  );
  const onChangeContent = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setContent(e.target.value);
    },
    []
  );

  const addTag = useCallback((tag: string) => {
    setTagList((prevState) => prevState.concat(tag));
  }, []);
  const removeTag = useCallback((tag: string) => {
    setTagList((prevState) => prevState.filter((existTag) => existTag !== tag));
  }, []);

  return (
    <Presenter
      title={title}
      content={content}
      tagList={tagList}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      addTag={addTag}
      removeTag={removeTag}
    />
  );
}

export default Container;
