import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const result = await pool.query(
      "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    // if user is created successfuly, return a success message
    return new Response(
      JSON.stringify({ status: "Created", user: result.rows[0] })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ status: "Error", message: error.message })
    );
  }
}
