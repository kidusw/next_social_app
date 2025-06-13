import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested page</p>
      <p>This is customized</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
