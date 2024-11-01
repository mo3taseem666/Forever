import React, { useState } from 'react';
import { deleteFileFromStorage, uploadFileToStorage } from '../../firebase/firebaseTS';


const useUpload = (collectionNAme:string,folderNAme:string,field?:string) => {
   const [file, setFile] = useState<null | File>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<null | string>(null);
   const [uploadedFiles, setUploadedFiles] = useState<{ id: string; name: string; url: string }[]>([]);

   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target?.files?.[0];
      if (selectedFile) {
         setFile(selectedFile);
      }
   };

   const handleUpload = async () => {
      if (file) {
         setLoading(true);
         setError(null);
         try {
            const downloadURL = await uploadFileToStorage(file, collectionNAme, folderNAme,field ? field : '');
            if (downloadURL) {
               // Update the state with the uploaded file details
               setUploadedFiles(prev => [...prev, { id: file.name, name: file.name, url: downloadURL }]);
            }
         } catch (err) {
            setError('Error uploading file');
            console.error(err);
         } finally {
            setLoading(false);
            setFile(null); // Reset the file after upload
         }
      }
   };

   const handleDelete = async (id: string,collectionName:string) => {
      try {
         await deleteFileFromStorage(id, collectionName);
         setUploadedFiles(prev => prev.filter(file => file.id !== id)); // Remove the deleted file from the state
      } catch (err) {
         setError('Error deleting file');
         console.error(err);
      }
   };

   return {
      file,
      loading,
      error,
      uploadedFiles,
      handleFile,
      handleUpload,
      handleDelete,
   };
};

export default useUpload;
