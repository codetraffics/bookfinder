import Image from "next/image";
import { fetchBooks } from "@/utils";
import { BookCard } from "@/components";

export default async function Home() {
  const allBooks = await fetchBooks();

  const isDataEmpty =
    !Array.isArray(allBooks) || allBooks.length < 1 || !allBooks;

  return (
    <main>
      <h1 className="bg-blue-700">Hello</h1>

      {!isDataEmpty ? (
        <section>
          <div className="flex flex-wrap space-y-10 mx-20">
            {allBooks.map((book) => (
              <BookCard key={Math.random() * 10} book={book} />
            ))}
          </div>
        </section>
      ) : (
        <div>
          <h2>Oops, no books</h2>
          {/* <p>{allBooks?.message}</p> */}
        </div>
      )}
    </main>
  );
}
