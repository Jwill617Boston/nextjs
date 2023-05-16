const express = require("express");
const app = express();

// Create Get response

app.get("/api/users", (req, res) => {
   // Create Data to respond RES
   const users = [
      { id: 1, name: "Jason" },
      { id: 2, name: "KD" },
      { id: 3, name: "King" },
   ];

   // Send Data as response RES
   res.json(users);
});

// Entry point to App
app.listen(3000, () => {
   console.log("Server is now listening on port 3000");
});
