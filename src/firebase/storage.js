import { storage } from "./config.js"; // Import Firebase storage and other configurations
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

// Function to upload a file to Firebase Storage
export const uploadPhoto = (file, path, fileName, user) => {
  return new Promise((resolve, reject) => {
    // Assuming user.uid is the user's unique identifier, you can customize this based on your authentication setup
    if (!user || !user.uid) {
      reject({
        success: false,
        message: "User information missing or invalid",
      });
      return;
    }

    const storageRef = ref(storage, `${path}/${user.uid}/${fileName}`);

    // Upload the file to the specified storage path
    uploadBytes(storageRef, file)
      .then(async () => {
        // Get the download URL for the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        resolve({
          success: true,
          downloadURL: downloadURL,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error.message,
        });
      });
  });
};

// Function to get download URL for a file from Firebase Storage

// Function to delete a file from Firebase Storage
export const deleteFile = async (path) => {
  try {
    const storageRef = storage.ref(path);
    await storageRef.delete();
    return { success: true, message: "File deleted successfully!" };
  } catch (error) {
    console.error("Error deleting file:", error);
    return { success: false, message: "Error deleting file." };
  }
};

export const listFolderFiles = async (path) => {
  try {
    const listRef = ref(storage, path);
    const urls = [];

    listAll(listRef)
      .then(async (res) => {
        res.prefixes.forEach((folderRef) => {});
        res.items.forEach(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          urls.push(url);
        });
      })
      .catch((error) => {
        return { success: false, message: "Error loading list." };
      });

    return { success: true, urls };
  } catch (error) {
    console.error("Error loading list:", error);
    return { success: false, message: "Error loading list." };
  }
};

export const getFile = async (path) => {
  console.log("getFile called with path:", path); // Log the start of the function
  try {
    if (!path) {
      console.error("Invalid path provided.");
      return { success: false, message: "Invalid path provided." };
    }

    console.log("Creating file reference...");
    const fileRef = ref(storage, path); // File reference
    console.log("File reference created:", fileRef);

    console.log("Fetching download URL...");
    const url = await getDownloadURL(fileRef); // Download URL
    console.log("File URL fetched successfully:", url);

    return { success: true, message: url }; // Return URL on success
  } catch (error) {
    console.error("Error fetching file:", error.code, error.message);
    console.error("Full error object:", error);
    return { success: false, message: "Error fetching file." };
  }
};
