import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      throw error;
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "An error occurred while retrieving users" });
  }
});

router.patch("/", async (req, res) => {
  const { userId, connected } = req.body;

  if (!userId) {
    return res.status(404).send({ message: `User ID is required.` });
  }

  if (typeof connected === "undefined") {
    return res.status(400).send({ message: `Connection status is required.` });
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .update({ connected })
      .eq("id", Number(userId))
      .select();

    if (error) {
      throw error;
    }

    if (!data.length) {
      return res
        .status(404)
        .send({ message: `User with ID ${userId} not found.` });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error modifying the user status:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating user status" });
  }
});

export default router;
