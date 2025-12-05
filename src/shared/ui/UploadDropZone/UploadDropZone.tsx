"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import Dropzone from "react-dropzone";
import { UploadSimpleIcon } from "@phosphor-icons/react/dist/ssr/UploadSimple";

import classes from "./UploadDropZone.module.css";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";

type FileWithPreview = {
  file: File;
  uuid: string;
  preview: string;
};

interface Props {
  files?: File[];
  onUpload: (files: File[]) => void;
  onUpdate: (files: File[]) => void;
}

export default function UploadDropZone({
  files = [],
  onUpload,
  onUpdate,
}: Props) {
  const localFiles: FileWithPreview[] = useMemo(
    () =>
      files.map((file) => ({
        file,
        uuid: self.crypto.randomUUID(),
        preview: URL.createObjectURL(file),
      })),
    [files],
  );

  useEffect(() => {
    return () =>
      localFiles.forEach((localFile) => URL.revokeObjectURL(localFile.preview));
  }, [localFiles]);

  const handleUnselectFile = (uuid: string) => {
    const filteredListFiles = localFiles.filter(
      (localFile) => localFile.uuid !== uuid,
    );

    onUpdate(filteredListFiles.map(({ file }) => file));
  };

  return (
    <>
      <Dropzone
        accept={{
          "image/*": [],
          "video/mp4": [".mp4"],
          "video/mpeg": [".mpeg"],
          "video/webm": [".webm"],
        }}
        onDrop={(acceptedFiles) => onUpload(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <section className={classes.fileUpload}>
            <div
              {...getRootProps()}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <input {...getInputProps()} />
              <UploadSimpleIcon size={48} className={classes.fileUploadIcon} />
              Just drag your files here — or click to browse.
            </div>
          </section>
        )}
      </Dropzone>

      {localFiles.length > 0 && (
        <aside className={classes.fileUploadPreviewContainer}>
          {localFiles.map((localFile) => (
            <div key={localFile.uuid} className={classes.fileUploadPreview}>
              <Image
                unoptimized
                alt="Preview"
                width={80}
                height={80}
                src={localFile.preview}
                onLoad={() => {
                  URL.revokeObjectURL(localFile.preview);
                }}
              />

              <button
                onClick={() => handleUnselectFile(localFile.uuid)}
                className={classes.fileUploadPreviewClose}
              >
                <XIcon size={22} />
              </button>
            </div>
          ))}
        </aside>
      )}
    </>
  );
}
