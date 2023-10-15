import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons/faDownLeftAndUpRightToCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsEditorInterface {
  handleChange: ( event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
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
      <textarea id="editor" defaultValue={text} onChange={handleChange}></textarea>
    </>
  );
}

export default Editor;
