const search = document.querySelector("input");

search.addEventListener("change", (e) => {
  const data = [
    { title: "Harry Potter and the Philosopher's Stone", category: "books" },
    { title: "Harry Potter and the Chamber of Secrets", category: "books" },
    { title: "Harry Potter and the Prisoner of Azkaban", category: "books" },
    { title: "Harry Potter and the Goblet of Fire", category: "books" },
    { title: "Harry Potter and the Order of the Phoenix", category: "books" },
    { title: "Harry Potter and the Half-Blood Prince", category: "books" },
    { title: "Harry Potter and the Deathly Hallows", category: "books" },
    { title: "History of the world", category: "books" },
    { title: "Geography", category: "books" },
    { title: "Animals", category: "books" },
    { title: "Pottery", category: "books" },
  ];
  const r = document.getElementById("results");
  if (r) r.remove();

  const ul = document.createElement("ul");

  data
    .filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    .forEach((book) => {
      const li = document.createElement("li");
      li.innerText = `${book.title} (${book.category})`;
      ul.appendChild(li);
    });

  const results = document.createElement("div");
  results.setAttribute("id", "results");
  results.appendChild(ul);

  document.body.appendChild(results);
});
