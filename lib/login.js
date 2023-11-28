export const login = (username, password) => {};

export const signup = async (form) => {
  const { email, password } = form;

  const request = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + "api/login", {
    cache: "no-cache",
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const response = await request.json();
  console.log(response);

  //return data;
};
