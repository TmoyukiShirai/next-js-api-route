import { useState, useEffect } from "react";
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();

  return { props: { data } };
}

//天気取得
export default function Home({ data }) {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch("/api/weather");
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weather.weather && <p>東京の天気：{weather.weather[0].main}</p>}
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>DBから取得したname:{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

//postに変更
// export default function Home() {
//   useEffect(() => {
//     const postData = async () => {
//       await fetch("/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: "John" }), //postリクエスト(ベタ書き)
//       });
//     };
//     postData();
//   }, []);

//   return (
//     <div>
//       <h1>ユーザ</h1>
//     </div>
//   );
// }

//自作のAPI利用
// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/users");
//   const data = await response.json();

//   return { props: { data } };
// }

// export default function Home({ data }) {
//   return (
//     <div>
//       <ul>
//         {data.users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// //外部のAPI利用(オープンソース)
// export default function Home() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch("/api/users");
//       const data = await response.json();
//       setUsers(data.users);
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
