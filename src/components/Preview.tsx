import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons/faDownLeftAndUpRightToCenter";
import {marked} from 'marked';

interface PropsPreviewInterface {
  text: string | undefined;
  expanded: () => void;
  isExpanded: boolean;
  giveId: (id: number) => void;
}

function Preview({
  text,
  expanded,
  isExpanded,
  giveId,
}: PropsPreviewInterface) {

  return (
    <>
      <h2 className="header-component">
        Preview
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
              giveId(2);
            }}
            icon={faMaximize}
          />
        )}
      </h2>
      <div className="preview-content" dangerouslySetInnerHTML={text ?{
        __html:marked(text)
        }: undefined} id="preview">
        
      </div>
    </>
  );
}

export default Preview;
