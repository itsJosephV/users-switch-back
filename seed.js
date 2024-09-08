import supabase from "./supabaseClient.js";

const seedUsers = async () => {
  const users = [
    {
      name: "John",
      last: "Doe",
      email: "john.doe@example.com",
      connected: true,
    },
    {
      name: "Jane",
      last: "Doe",
      email: "jane.doe@example.com",
      connected: false,
    },
    {
      name: "Alice",
      last: "Smith",
      email: "alice.smith@example.com",
      connected: true,
    },
    {
      name: "Bob",
      last: "Brown",
      email: "bob.brown@example.com",
      connected: false,
    },
    {
      name: "Charlie",
      last: "Johnson",
      email: "charlie.johnson@example.com",
      connected: true,
    },
  ];

  for (let user of users) {
    const { data, error } = await supabase.from("users").insert([user]);

    if (error) {
      console.error("Error seeding user:", error);
    } else {
      console.log("Seeded user:", data);
    }
  }
};

seedUsers();
