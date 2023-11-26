/** Export collection references so we avoid repetition and typos */
import { db } from "@mono/backend/firebase";

export const refs = {
  counters: db.collection("counters"),
};
