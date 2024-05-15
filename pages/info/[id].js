import { useRouter } from "next/router";

export default function ({ taxNumber }) {
  const { query } = useRouter();

  return (
    <div>
      <h2>User id{query.id}</h2>
      <div>{user.name}</div>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const taxNumber = await response.json();
  return {
    props: { taxNumber },
  };
}
