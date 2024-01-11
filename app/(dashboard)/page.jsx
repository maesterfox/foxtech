import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="2xl">Dashboard</h2>
      <p>
        Fox Tech has launched a new cloud hosting platform this quarter which
        has seen great adoption from customers. Our engineering team has been
        working hard to roll out new features and improvements.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          We are excited to welcome John Doe to the web development team. John
          brings 5 years of experience in React and Node.js development which
          will help strengthen our web app capabilities.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Our brand new company website is now live! The updated design and
          improved content will help provide a better experience for customers
          learning about our IT services and solutions.
        </p>
      </div>
    </main>
  );
}
