import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDatail() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:5500/user");
        setUserData(userResponse.data);
        // Accessing data property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <div className="overflow-x-auto dark:text-white  bg-transparent">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Height
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Weight
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                Target Weight
              </th>
            </tr>
          </thead>
          <tbody className="divide-y p-8 divide-gray-500 dark:divide-y-0">
            {userData.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.firstname + " " + user.lastname}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.height}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.weight}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.targetweight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
