import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import Presenter from "./WritePresenter";

interface Board {
  title: string;
  content: string;
  tagList: string[];
}

function WriteContainer() {
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

  const addTag = useCallback<(tag: string) => void>((tag: string) => {
    setTagList((prevState) => prevState.concat(tag));
  }, []);
  const removeTag = useCallback<(tag: string) => void>((tag: string) => {
    setTagList((prevState) => prevState.filter((existTag) => existTag !== tag));
  }, []);

  const addBoard = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    const board: Board = {
      title,
      content,
      tagList,
    };
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

export default WriteContainer;
