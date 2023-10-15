import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons/faDownLeftAndUpRightToCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsEditorInterface {
  handleChange: ( event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  expanded: () => void;
  isExpanded: boolean;
  text: string;
  giveId: (id: number) => void;
}
function Editor({
  handleChange,
  expanded,
  isExpanded,
  giveId,
  text
}: PropsEditorInterface) {

  return (
    <>
      <h2 className="header-component">
        Editor
        {isExpanded ? (
          <FontAwesomeIcon
            onClick={() => {
              expanded();
              giveId(0);
            }}
            icon={faDownLeftAndUpRightToCenter}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              expanded();
              giveId(1);
            }}
            icon={faMaximize}
          />
        )}
      </h2>
      <label htmlFor="editor" className="display-none">Editor</label>
      <textarea id="editor" defaultValue={text} onChange={(e)=>handleChange(e)}></textarea>
    </>
  );
}

export default Editor;
