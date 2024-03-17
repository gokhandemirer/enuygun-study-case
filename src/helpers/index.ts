import { UserEvent } from "@/types";
import { v4 as uuidv4 } from "uuid";

const createUserEvent = (message: string, subjectId: string): UserEvent => {
  return {
    id: uuidv4(),
    data: {
      message,
      subjectId,
    },
    timestamp: Date.now(),
  };
};

export { createUserEvent };
