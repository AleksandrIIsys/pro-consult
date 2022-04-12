import React, {useEffect, useRef} from "react";
import SunEditor, {buttonList} from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import {observer} from "mobx-react-lite";
const Editor = observer(({setTextEdit,textDefault}) => {
    const editor = useRef();
    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };
    const handleChange = (e) => {
      setTextEdit(e)
    }
    return (
        <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            lang="en"
            setOptions={{
                buttonList: buttonList.complex,
            }}
            onChange={handleChange}
            autoFocus={true}
            setContents={`<p>${textDefault}</p>`}
        />
    );
});

export default Editor;
