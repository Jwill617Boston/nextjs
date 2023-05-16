export const GET = async (req, { params }) => {
   const users = [
      { id: 1, name: "Jason" },
      { id: 2, name: "KD" },
      { id: 3, name: "King" },
   ];

   return new Response(JSON.stringify(users));
};

export const HEAD = async (req, { params }) => {
   return new Response(JSON.stringify());
};

export const POST = async (req, { params }) => {
   return new Response(JSON.stringify());
};

export const PUT = async (req, { params }) => {
   return new Response(JSON.stringify());
};

export const DELETE = async (req, { params }) => {
   return new Response(JSON.stringify());
};

export const PATCH = async (req, { params }) => {
   return new Response(JSON.stringify());
};
