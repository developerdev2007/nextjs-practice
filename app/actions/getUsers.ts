"use server";

import prismadb from "../lib/prismadb";

export default async function getUsers() {
  const users = await prismadb.user.findMany({});
  console.log({ users });
  return users;
}
