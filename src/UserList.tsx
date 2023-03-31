import axios from "axios";
import { useQuery } from "react-query";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type ApiError = {
    message: string;
    // Other properties, if needed
  };
const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

const UsersList = () => {
  const { data, isLoading, error } = useQuery<User[]>("users", getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    const apiError = error as ApiError;
    return <div>An error occurred: {apiError.message}</div>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;