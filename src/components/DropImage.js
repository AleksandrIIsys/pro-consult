import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropImage = ({image,setImage}) => {
    const [have, setHave] = useState(image !== "");
    const [url, setURL] = useState(
        image !== "" ? image : ""
    );
    const onDrop = useCallback(async (acceptedFiles) => {
        setHave(true);
        setImage(acceptedFiles[0]);
        const filereader = new FileReader();
        filereader.onload = (file) => {
            setURL(file.target.result);
        };
        filereader.readAsDataURL(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/jpeg,image/png,image/jpg",
    });
    return (
        <>
            <div style={{ cursor: "pointer" }} {...getRootProps()}>
                <input {...getInputProps()} />

                {have ? (
                    <img
                        src={url}
                        className={"admin_create_news-image"}
                    />
                ) : isDragActive ? (
                    <p className={"admin_create_news-image"}>
                        Drop the files here ...
                    </p>
                ) : (
                    <p className={"admin_create_news-image"}>
                        Drag 'n' drop some files here, or click to
                        select files...
                    </p>
                )}
            </div>
        </>
    );
};

export default DropImage;