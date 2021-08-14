export default async function getQuotes() {
  const url = 'https://api.quotable.io/random';
  const req = await fetch(url);
  const res = await req.json();
  return { quote: res.content, author: res.author };
}