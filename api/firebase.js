import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} from "react-native-dotenv";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export default firebase.initializeApp(firebaseConfig);

export async function getTransactions (limit=20) {
    const transactionsRef = firebase.firestore().collection('transactions');
    const transactionsOrdered = transactionsRef.orderBy('date','desc').limit(limit);
    const transactions = [];

    await transactionsOrdered.get()
        .then(res => {
            res.forEach(doc => {
                const {date, ...rest} = doc.data();
                const obj = {
                    id: doc.id,
                    date: date.toDate(),
                    ...rest
                };
                transactions.push(obj);
            })
        });

    return transactions;
};
