// firebase/database.js
import { v4 as uuidv4 } from "uuid";

import { firestore } from "./config.js"; // Import Firebase firestore and other configurations
import {
  doc,
  setDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  limit,
} from "firebase/firestore";
import { getDocs, query, where, collection, orderBy } from "firebase/firestore";

export const getDocument = (col, docId) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(firestore, col, docId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve({
            success: true,
            data: snapshot.data(),
          });
        } else {
          resolve({
            success: false,
            message: "Document does not exist",
          });
        }
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const createDocument = (col, name, data) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(firestore, col, name), data)
      .then((res) => {
        resolve({
          success: true,
          message: "document created successfully",
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const createDocumentWithRandomUid = (col, data) => {
  return new Promise((resolve, reject) => {
    const randomUid = uuidv4();

    setDoc(doc(firestore, col, randomUid), data)
      .then((res) => {
        resolve({
          success: true,
          message: "document created successfully",
          documentId: randomUid,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const updateDocument = (col, docId, data, user) => {
  return new Promise((resolve, reject) => {
    // Assuming user.uid is the user's unique identifier, you can customize this based on your authentication setup

    if (!user || !user.uid) {
      reject({
        success: false,
        message: "User information missing or invalid",
      });
      return;
    }

    // Pass user information to Firestore security rules for validation
    const securityContext = { uid: user.uid };

    updateDoc(doc(firestore, col, docId), data, { context: securityContext })
      .then((res) => {
        resolve({
          success: true,
          message: res,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const updateScoreBoard = (data) => {
  return new Promise((resolve, reject) => {
    updateDoc(doc(firestore, "wordle", "scoreboard"), data)
      .then((res) => {
        resolve({
          success: true,
          message: res,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const updateChallenges = (data) => {
  return new Promise((resolve, reject) => {
    updateDoc(doc(firestore, "wordle", "challenges"), data)
      .then((res) => {
        resolve({
          success: true,
          message: res,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const deleteDocument = (col, docId, user) => {
  return new Promise((resolve, reject) => {
    // Assuming user.uid is the user's unique identifier, you can customize this based on your authentication setup

    if (!user || !user.uid) {
      reject({
        success: false,
        message: "User information missing or invalid",
      });
      return;
    }

    // Pass user information to Firestore security rules for validation
    const securityContext = { uid: user.uid };

    deleteDoc(doc(firestore, col, docId), { context: securityContext })
      .then(() => {
        resolve({
          success: true,
          message: "Document deleted successfully",
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const getGalleryDocuments = (position, isArchived) => {
  return new Promise((resolve, reject) => {
    let q = collection(firestore, "gallery");
    if (position) {
      q = query(q, where("position", "==", position));
      q = query(q, where("status", "==", "active"));
    } else {
      q = query(q, where("status", "==", "active"));
    }

    getDocs(q)
      .then((snapshot) => {
        const items = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            data: data,
          });
        });

        resolve({
          success: true,
          message: position === "right" || isArchived ? items : items[0],
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let q = collection(firestore, "products");

    q = query(q, where("status", "==", "live"));

    getDocs(q)
      .then((snapshot) => {
        const items = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            data: data,
          });
        });

        resolve({
          success: true,
          message: items,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};

export const getReviews = () => {
  return new Promise((resolve, reject) => {
    let q = collection(firestore, "reviews");

    q = query(q, where("is_visible", "==", true));

    getDocs(q)
      .then((snapshot) => {
        const items = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            data: data,
          });
        });

        resolve({
          success: true,
          message: items,
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error,
        });
      });
  });
};
