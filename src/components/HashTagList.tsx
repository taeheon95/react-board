import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const HashTagContainer = styled.ul`
  border-radius: 5px;
  padding-inline-start: 2px;
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

const HashTag = styled.li`
  display: inline-block;
  font-family: "Helvetica, sans-serif";
  border-radius: 20px;
  padding: 3px 10px;
  margin-right: 5px;
  margin-bottom: 4px;
  cursor: pointer;
  background-color: #79dfc1;
`;

const Input = styled.input`
  outline: none;
  border: none;
  height: inherit;
`;

interface TagListProps {
  tagList: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

function HashTagList(props: TagListProps) {
  const { tagList, addTag, removeTag } = props;
  const [tagInput, setTagInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeTagInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setTagInput(e.target.value);
    },
    []
  );

  const handleTagList = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (e.key === "Enter" && tagInput !== "" && !tagList.includes(tagInput)) {
        e.preventDefault();
        addTag(tagInput);
        setTagInput("");
      } else if (
        tagInput === "" &&
        tagList.length > 0 &&
        e.key === "Backspace"
      ) {
        removeTag(tagList[tagList.length - 1]);
      }
    },
    [tagList, tagInput]
  );

  const handleDeleteTag = useCallback(
    (idx: number): MouseEventHandler => {
      return (e) => {
        removeTag(tagList[idx]);
      };
    },
    [tagList]
  );

  const handleFocus = useCallback<MouseEventHandler>(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="form-control" onClick={handleFocus}>
      <HashTagContainer>
        {tagList.map((tag, idx) => (
          <HashTag key={tag} onClick={handleDeleteTag(idx)}>
            {tag}
          </HashTag>
        ))}
        <Input
          ref={inputRef}
          value={tagInput}
          onChange={onChangeTagInput}
          onKeyUp={handleTagList}
        />
      </HashTagContainer>
    </div>
  );
}

export default HashTagList;
