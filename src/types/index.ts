export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  jobTitle: string;
  vote: number;
};

export type UserEvent = {
  id: string;
  data: {
    message: string;
    subjectId: string;
  };
  timestamp: number;
};
