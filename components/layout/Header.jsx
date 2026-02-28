import Container from "./Container";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            whereToEat<span className="text-gray-400">.io</span>
          </h1>
        </div>
      </Container>
    </header>
  );
}