/* import { useRouter } from "next/router"; */

export default function () {
  return (
    <div>
      <h2>просто перейти сюда</h2>
    </div>
  );
}
/* export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const taxNumber = await response.json();
  return {
    props: { taxNumber },
  };
}
 */
