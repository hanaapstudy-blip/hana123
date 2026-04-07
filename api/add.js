export default function handler(req, res) {
  res.status(200).json({ result: 2 + 3 });
}