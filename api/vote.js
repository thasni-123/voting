let voteCounts = {};

export default function handler(req, res) {
    if (req.method === "POST") {
        const { voterName, candidate } = req.body;

        if (!voterName || !candidate) {
            return res.status(400).json({ message: "Invalid input" });
        }

        voteCounts[candidate] = (voteCounts[candidate] || 0) + 1;

        return res.status(200).json({
            message: `Thanks for voting, ${voterName}!`,
            votes: voteCounts
        });
    }

    res.status(405).json({ message: "Method not allowed" });
}
