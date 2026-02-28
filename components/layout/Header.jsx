import Container from "./Container";

export default function Header() {
  return (
    <header className="py-6 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            whereToEat<span className="text-gray-400">.io</span>
          </h1>

          <button className="bg-black text-white px-4 py-2 rounded-xl">
            Try Now
          </button>
        </div>
      </Container>
    </header>
  );
}